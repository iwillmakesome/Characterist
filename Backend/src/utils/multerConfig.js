const multer = require('multer');
const path = require('path');

const multerConfig = (folder) => {
  const storage = multer.diskStorage({
    destination: function (req, file, done) {
      const uploadPath = path.join(__dirname, '../../public', '/scenes');
      done(null, uploadPath);
    },
    filename: function (req, file, done) {
      const uniqueSuffix = Date.now() + Math.round(Math.random() * 1e9);
      const extension = path.extname(file.originalname);
      const fileName = uniqueSuffix + extension;
      file.fileName = fileName;

      done(null, fileName);
    },
  });

  return multer({ storage: storage });
};

module.exports = multerConfig;
