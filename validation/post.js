const isEmpty = require('./is-empty');
const Validator = require('validator');

const validatePostInput = data => {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : '';

  // Login validations
  if (!Validator.isLength(data.text, { min: 5, max: 300 })) {
    errors.text = 'Post must be at least 5 characters';
  }
  if (Validator.isEmpty(data.text)) {
    errors.text = `Text field can't be empty`;
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

module.exports = validatePostInput;
