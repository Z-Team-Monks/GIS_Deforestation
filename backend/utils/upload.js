// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/areas/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, new Date().toISOString() + file.originalname);
//   },
// });

// const upload = multer({
//   storage: storage,
//   limits: {
//     fileSize: 1024 * 1025 * 5,
//   },
//   fileFilter: fileFilter,
// });

// module.exports = upload;
