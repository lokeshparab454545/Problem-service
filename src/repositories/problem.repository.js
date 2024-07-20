const logger = require("../config/logger.config");
const NotFoundError = require("../errors/notFound.error");
const { Problem } = require("../models");

class ProblemRepository {
  async createProblem(problemData) {
    try {
      const problem = await Problem.create({
        title: problemData.title,
        description: problemData.description,
        testCases: problemData.testCases ? problemData.testCases : [],
      });
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAllProblems() {
    try {
      const problems = await Problem.find({});
      return problems;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getProblem(id) {
    try {
      const problem = await Problem.findById(id);
      if (!problem) {
        throw new NotFoundError("Problem", id);
      }
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteProblem(id) {
    try {
      const deleteProblem = await Problem.findByIdAndDelete(id);
      if (!deleteProblem) {
        logger.error(`Problem with id: ${id} not found in the db`);
        throw new NotFoundError("Problem", id);
      }
      return deleteProblem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async updateProblem(id) {
    try {
      const updateProblem = await Problem.findByIdAndUpdate(id, updatedData, {
        new: true,
      });
      if (!updateProblem) {
        throw new NotFoundError("Problem", id);
      }
      return updateProblem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = ProblemRepository;
