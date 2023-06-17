const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { investorService } = require('../services');

const getInvestors = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await investorService.queryInvestors(filter, options);
  res.send(result);
});

module.exports = {
  getInvestors,
};
