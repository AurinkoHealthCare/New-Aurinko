// middlewares/imageUploadMiddleware.js
const multer = require('multer');
const { storage } = require('../../cloudinary/cloudisetup');

const upload = multer({
  storage,
  limits: {
    fileSize: 1 * 1024 * 1024 // ✅ 1MB = 1 * 1024 * 1024 bytes
  }
});

module.exports = upload;
