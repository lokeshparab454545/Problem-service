const { StatusCodes } = require("http-status-codes");
const NotImplementedError = require("../errors/notImplemented.error");

function pingProblemController(req, res) {
  return res.json({ message: "Problem controller is up" });
}

function addProblem(req, res, next) {
  try {
    throw new NotImplementedError("addProblem");
  } catch (error) {
    next(error);
  }
}

function getProblem(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "Not Implemented",
  });
}

function getProblems(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "Not Implemented",
  });
}

function deleteProblems(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "Not Implemented",
  });
}

function updateProblems(req, res) {
  return res.status(StatusCodes.NOT_IMPLEMENTED).json({
    message: "Not Implemented",
  });
}

module.exports = {
  pingProblemController,
  addProblem,
  getProblem,
  getProblems,
  deleteProblems,
  updateProblems,
};
