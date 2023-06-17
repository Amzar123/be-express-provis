const mongoose = require('mongoose');
const { toJSON } = require('./plugins');
const { statusTypes } = require('../config/tokens');

const investApplicationSchema = mongoose.Schema(
  {
    businessId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Business',
      required: true,
    },
    investorId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Investor',
      required: true,
    },
    amount: {
      type: Number,
      required: true,
      index: true,
    },
    deviden: {
      type: Number,
      required: true,
      index: true,
    },
    status: {
      type: String,
      enum: [statusTypes.APPROVED, statusTypes.ON_PROGRESS, statusTypes.REJECTED],
      required: true,
    },
    duration: {
      type: Number, // dalam satuan minggu
      required: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
investApplicationSchema.plugin(toJSON);

/**
 * @typedef InvestApplication
 */
const InvestApplication = mongoose.model('InvestApplication', investApplicationSchema);

module.exports = InvestApplication;
