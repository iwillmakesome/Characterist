const mime = require('mime');

exports.getFileType = (filename) => {
  const mimeType = mime.getType(filename);
  if (mimeType.startsWith('image')) {
    return 'image';
  } else if (mimeType.startsWith('video')) {
    return 'video';
  } else {
    return 'unknown';
  }
};
