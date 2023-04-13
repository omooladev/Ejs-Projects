const { StatusCodes } = require("http-status-codes");
const NotFound = (req, res) => {
  console.log("not found");
  res.status(StatusCodes.NOT_FOUND);
};

module.exports = NotFound;
