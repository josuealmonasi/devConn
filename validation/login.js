const isEmpty = require('./is-empty');
const Validator = require('validator');

const validateLogInInput = data => {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  // Login validations
  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = `Email field can't be empty`;
  }

  if (!Validator.isLength(data.password, { min: 4, max: 30 })) {
    errors.password = 'Password must be at least 4 characters';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

module.exports = validateLogInInput;
