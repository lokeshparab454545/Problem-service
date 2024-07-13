function pingProblemController(req, res) {
  return res.json({ message: "Problem controller is up" });
}

function addProblem(req, res) {}

function getProblem(req, res) {}

function getProblems(req, res) {}

function deleteProblems(req, res) {}

function updateProblems(req, res) {}

module.exports = {
  pingProblemController,
  addProblem,
  getProblem,
  getProblems,
  deleteProblems,
  updateProblems,
};
