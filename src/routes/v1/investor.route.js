const express = require('express');
// const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const investorValidation = require('../../validations/investor.validation');
const investorController = require('../../controllers/investor.controller');

const router = express.Router();

router.get('/', validate(investorValidation.getInvestors), investorController.getInvestors);

module.exports = router;
