const { StatusCodes } = require("http-status-codes");
const ErrorHandlerMiddleWare = (error, req, res, next) => {
  console.log(error);
  let customError = {
    message: error.message || "Something went wrong, please try again later",
    statusCode: error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
  };
  if (error.code === 11000) {
    customError.message = `${Object.keys(error.keyValue)} already exists,please provide another`;
    customError.statusCode = StatusCodes.BAD_REQUEST;
  }
  if (error.name === "ValidationError") {
    let values = Object.values(error.errors).map((error) => {
      if (error.kind === "minlength") {
        const minlength = error.properties.minlength;
        return `${error.path} must be greater than ${minlength} characters`;
      }
      if (error.kind === "maxlength") {
        const maxlength = error.properties.maxlength;
        return `${error.path} must be less than ${maxlength} characters`;
      }
      return error.properties.type;
    });
    values = values.join(",");
    customError.message = values;
    customError.statusCode = StatusCodes.BAD_REQUEST;
  }
  return res.status(customError.statusCode).json({ message: customError.message });
};

module.exports = ErrorHandlerMiddleWare;
