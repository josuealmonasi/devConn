const isEmpty = require('./is-empty');
const Validator = require('validator');

const validateExperienceInput = data => {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : '';
  data.company = !isEmpty(data.company) ? data.company : '';
  data.from = !isEmpty(data.from) ? data.from : '';

  // Experience validations
  if (Validator.isEmpty(data.title)) {
    errors.title = "Job Title field can't be empty";
  }

  if (Validator.isEmpty(data.company)) {
    errors.company = "Company field can't be empty";
  }

  if (Validator.isEmpty(data.from)) {
    errors.from = "From date field can't be empty";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

module.exports = validateExperienceInput;
