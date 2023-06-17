const Joi = require('joi');

const createInvestApplication = {
  body: Joi.object().keys({
    businessId: Joi.string().required(),
    investorId: Joi.string().required(),
    amount: Joi.number().required(),
    deviden: Joi.number().required(),
    duration: Joi.number().required(),
  }),
};

const getInvestorApplication = {
  query: Joi.object().keys({
    investorId: Joi.string(),
  }),
};

module.exports = {
  createInvestApplication,
  getInvestorApplication,
};
