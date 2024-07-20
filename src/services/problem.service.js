const sanitizeMarkdown = require("../utils/markdownSanitizer");

class ProblemService {
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }
  async createProblem(problemData) {
    problemData.description = sanitizeMarkdown(problemData.description);

    const problem = await this.problemRepository.createProblem(problemData);

    return problem;
  }

  async getAllProblems() {
    const problems = await this.problemRepository.getAllProblems();
    return problems;
  }

  async getProblem(problemId) {
    const problem = await this.problemRepository.getProblem(problemId);
    return problem;
  }

  async deleteProblem(problemId) {
    const problem = await this.problemRepository.deleteProblem(problemId);
    return problem;
  }

  async updateProblem(problemId) {
    const problem = await this.problemRepository.updateProblem(problemId);
    return problem;
  }
}
module.exports = ProblemService;
