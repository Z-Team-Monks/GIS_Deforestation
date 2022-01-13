const { Model } = require('mongoose');
const catchAsyncErrors = require('../utils/catchAsyncError');
const ApiFeatures = require('../utils/apiFeatures.js');

exports.deleteOne = Model => catchAsyncErrors(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) return next(new AppError("No document found with given id!", 404));

    res.status(204).json({
        status: "success",
        message: {
            data: null
        }
    });
});

exports.updateOne = Model => catchAsyncErrors(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    
    if (!doc) return next(new AppError("No document found with given id!", 404));

    res.status(200).json({
        status: "success",
        message: {
            data: doc
        }
    });
});

exports.createOne = Model => catchAsyncErrors(async (req, res, next) => {
    const newDoc = await Model.create(req.body);

    res.status(201).json({
        status: 'success',
        message: {
            data:newDoc
        },
    });
});

exports.getOne = (Model, populateOptions) => catchAsyncErrors(async (req, resp, next) => {
    let query = Model.findById(req.params.id).select('-__v');
    if(populateOptions) query.populate(populateOptions)

    const doc = await query;
    if(!doc) return next(new AppError("No document found with that id!", 404));

    resp.status(200).json({
        status: "success",
        message:{
            data: doc
        }
    });
});

exports.getAll = Model => catchAsyncErrors(async (req, res, next) => {
    // apply api features on given query

    const features = new ApiFeatures(Model.find(req.params), req.query)
      .filter()
      .sort()
      .limitFields()
      .pagination();
  
    // excute query
    const doc = await features.query;
    // send responce to client
    res.status(200).json({
      status: 'success',
      results: doc.length,
      message: {
        data: doc
      },
    });
  });