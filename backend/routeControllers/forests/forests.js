const Forest = require("../../models/forest-model");
const catchAsyncErrors = require("../../utils/catchAsyncError");
const factory = require("../handleFactory");

exports.aliasTopDeforested = (req, resp, next) => {
  req.query.limit = "4";
  req.query.page = "1";
  req.query.sort = "forestCoverage";
  req.query.fields =
    "name,imageCover,fundraised,deforestationRate,forestCoverage,region";
  next();
};

exports.getAllForests = factory.getAll(Forest);
exports.createForest = factory.createOne(Forest);
exports.getForest = factory.getOne(Forest, { path: "discussions", limit: 5 });
exports.updateForest = factory.updateOne(Forest);
exports.deleteForest = factory.deleteOne(Forest);

exports.getByRegion = catchAsyncErrors(async (req, res, next) => {
  const forestCategory = await Forest.aggregate([
    {
      $group: {
        _id: { $toUpper: "$region" },
        itemCount: { $sum: 1 },
        forests: {
          $push: {
            id: "$_id",
            name: "$name",
            location: "$location",
            imageCover: "$imageCover",
          },
        },
      },
    },
  ]);

  res.status(200).json({
    status: 200,
    results: forestCategory.length,
    data: {
      forestCategory,
    },
  });
});

exports.searchForAreas = catchAsyncErrors(async (req, res, next) => {
  const { name, region, nearby, lon, lat } = req.query;

  let queryParam = undefined;
  if (name) {
    queryParam = { ...queryParam, name };
  }
  if (region) {
    queryParam = { ...queryParam, region };
  }

  let forests = await Forest.aggregate([
    {
      $geoNear: {
        near: { type: "Point", coordinates: [Number(lat), Number(lon)] },
        distanceField: "dist.calculated",
        maxDistance: Number(nearby),
        query: queryParam,
        includeLocs: "dist.location",
        spherical: true,
      },
    },
  ]);

  res.status(200).json({
    status: 200,
    results: forests.length,
    data: {
      forests,
    },
  });
});
