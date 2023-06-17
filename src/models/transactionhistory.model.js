const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const transactionHistorySchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'User',
      required: true,
    },
    amount: {
      type: Number,
      required: true,
      index: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
transactionHistorySchema.plugin(toJSON);

/**
 * @typedef TransactionHistory
 */
const TransactionHistory = mongoose.model('TransactionHistory', transactionHistorySchema);

module.exports = TransactionHistory;
