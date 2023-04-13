const { StatusCodes } = require("http-status-codes");
const ErrorHandlerMiddleWare = (err, req, res, next) => {
  const customError = {
    error: err.message || "Something went wrong,please try again later",
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
  };

  res.status(customError.statusCode).json({ error: customError.error });
};

module.exports = ErrorHandlerMiddleWare;
