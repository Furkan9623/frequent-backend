const createError = (message, statusCode, errorFound) => {
  const er = new Error(message);
  er.statusCode = statusCode;
  er.errorFound = errorFound;
  return er;
};

const HandleError = async (error, req, res, next) => {
  const { message, statusCode, errorFound } = error;
  return res.status(statusCode || 500).json({
    success: true,
    message,
    errorFound,
  });
};

module.exports = { HandleError, createError };
