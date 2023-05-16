const { StatusCodes } = require("http-status-codes");
const ErrorHandlerMiddleWare = (error, req, res, next) => {
  let customError = {
    message: error.message || "Something went wrong, please try again later",
    statusCode: error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
  };
  if (error.code === 11000) {
    return (customError = {
      message: `${Object.keys(error.keyValue)} already exists,please provide another`,
      statusCode: StatusCodes.BAD_REQUEST,
    });
  }
  return res.status(customError.statusCode).json({ message: customError.message });
};

module.exports = ErrorHandlerMiddleWare;
