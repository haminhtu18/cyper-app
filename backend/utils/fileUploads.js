const multer = require("multer");

// Define file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      new Date().toISOString().replace(/:/g, "-") + "-" + file.originalname
    );
  },
});

function fileFilter(req, file, cb) {
  const allowedMimeTypes = ["image/png", "image/jpg", "image/jpeg"];

  if (allowedMimeTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
}

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

module.exports = { upload };
