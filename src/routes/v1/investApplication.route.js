const express = require('express');
// const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const investApplicationValidation = require('../../validations/investApplication.validation');
const investApplicationController = require('../../controllers/investApplication.controller');

const router = express.Router();

router.post(
  '/',
  validate(investApplicationValidation.createInvestApplication),
  investApplicationController.createInvestApplication
);

router.get(
  '/',
  validate(investApplicationValidation.getInvestorApplication),
  investApplicationController.getInvestApplication
);

module.exports = router;
