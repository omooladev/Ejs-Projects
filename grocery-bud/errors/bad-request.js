const { CustomAPIError } = require("./custom-error");
const { StatusCodes } = require("http-status-codes");
class BadRequestError extends CustomAPIError {
  constructor() {
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = { BadRequestError };
