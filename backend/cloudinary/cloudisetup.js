const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    let folder = 'project_image'; // default

    if (req.body.type === 'banner') {
      folder = 'banners';
    } else if (req.body.type === 'product') {
      folder = 'products';
    } else if (req.body.type === 'profile') {
      folder = 'profile_images';
    }

    return {
      folder: folder,
      allowed_formats: ['jpg', 'png', 'jpeg', 'webp'],
      public_id: `${Date.now()}-${file.originalname}`,
    };
  },
});

module.exports = { cloudinary, storage };
