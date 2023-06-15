/**
 * Create object to return response to user
 * @param {Object} object
 * @param {string[]} keys
 * @returns {Object}
 */
const responseSuccess = (props) => {
  return {
    code: props.code,
    message: props.message,
    body: props.body,
  };
};

module.exports = responseSuccess;
