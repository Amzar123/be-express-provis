const catchAsync = require('../utils/catchAsync');
const pick = require('../utils/pick');
const { investApplicationService } = require('../services');

const createInvestApplication = catchAsync(async (req, res) => {
  const result = await investApplicationService.createInvestApplication(req.body);
  res.send(result);
});

const getInvestApplication = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['investorId']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await investApplicationService.queryInvestApplication(filter, options);
  res.send(result);
});

module.exports = {
  createInvestApplication,
  getInvestApplication,
};
