const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class NotImplementedError extends BaseError {
  constructor(methodName) {
    super(
      "Not Implemented",
      StatusCodes.NOT_IMPLEMENTED,
      `${methodName} Not implemented`,
      {}
    );
  }
}
module.exports = NotImplementedError;
