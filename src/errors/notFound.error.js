const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class NotFoundError extends BaseError {
  constructor(resourceName, resourceValue) {
    super(
      "Not Found",
      StatusCodes.NOT_FOUND,
      `The requested resource: ${resourceName} with ${resourceValue} not found`,
      { resourceName, resourceValue }
    );
  }
}
module.exports = NotFoundError;
