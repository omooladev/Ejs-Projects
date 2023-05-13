const { StatusCodes } = require("http-status-codes");
const customAPIError = require("./custom-error");
class UnAuthenticatedError extends CustomAPIError {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = UnAuthenticatedError;
