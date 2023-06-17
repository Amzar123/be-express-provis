const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const investorSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    saldo: {
      type: Number,
      required: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
investorSchema.plugin(toJSON);

/**
 * @typedef Investor
 */
const Investor = mongoose.model('Investor', investorSchema);

module.exports = Investor;
