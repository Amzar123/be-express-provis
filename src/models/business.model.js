const mongoose = require('mongoose');
const { toJSON } = require('./plugins');
const { businessTypes } = require('../config/tokens');

const businessSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    type: {
      type: String,
      enum: [businessTypes.CULINARY, businessTypes.AGRIBUSINESS, businessTypes.FASHION],
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    income: {
      type: Number,
      required: true,
      index: true,
    },
    profession: {
      type: String,
      required: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
businessSchema.plugin(toJSON);

/**
 * @typedef InvestApplication
 */
const Business = mongoose.model('Business', businessSchema);

module.exports = Business;
