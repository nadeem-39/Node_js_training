const fileValidation = (req, res, next) => {
  const fileInfo = req.file;
  const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
  if (!allowedMimeTypes.includes(fileInfo?.mimetype)) {
    return res.status(400).json({
      success: false,
      message: "Allowed files only .png, .jpeg, .jpg",
    });
  }

  if (fileInfo?.size >= 2097152) {
    return res.status(400).json({
      success: false,
      message: "File should be less than 2 MB",
    });
  }

  next();
};

module.exports = fileValidation;
