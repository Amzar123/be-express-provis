const { InvestApplication } = require('../models');

/**
 * Create a user
 * @param {Object} investorApplicationBody
 * @returns {Promise<InvestApplication>}
 */
const createInvestApplication = async (investorApplicationBody) => {
  const investorApplication = await InvestApplication.create(investorApplicationBody);
  return investorApplication;
};

/**
 * Query for users
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryInvestApplication = async (filter, options) => {
  const investApplication = await InvestApplication.paginate(filter, options);
  return investApplication;
};

module.exports = {
  createInvestApplication,
  queryInvestApplication,
};
