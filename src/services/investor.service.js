const { Investor } = require('../models');

/**
 * Query for users
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryInvestors = async () => {
  const pipeline = [
    {
      $lookup: {
        from: 'users', // Koleksi yang ingin di-lookup
        localField: 'userId', // Field pada koleksi sumber untuk mencocokkan dengan koleksi target
        foreignField: '_id', // Field pada koleksi target yang akan dicocokkan
        as: 'user', // Nama field hasil lookup pada koleksi sumber
      },
    },
    {
      $unwind: '$user',
    },
  ];

  const investors = await Investor.aggregate(pipeline);
  return investors;
};

/**
 * Create a user
 * @param {Object} investorBody
 * @returns {Promise<Investor>}
 */
const createInvestor = async (investorBody) => {
  const investor = await Investor.create(investorBody);
  return investor;
};

module.exports = {
  queryInvestors,
  createInvestor,
};
