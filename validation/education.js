const isEmpty = require('./is-empty');
const Validator = require('validator');

const validateEducationInput = data => {
  let errors = {};

  data.school = !isEmpty(data.school) ? data.school : '';
  data.degree = !isEmpty(data.degree) ? data.degree : '';
  data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : '';
  data.from = !isEmpty(data.from) ? data.from : '';

  // Experience validations
  if (Validator.isEmpty(data.school)) {
    errors.school = "School field can't be empty";
  }

  if (Validator.isEmpty(data.degree)) {
    errors.degree = "Degree field can't be empty";
  }

  if (Validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = "Field of study field can't be empty";
  }

  if (Validator.isEmpty(data.from)) {
    errors.from = "From date field can't be empty";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};

module.exports = validateEducationInput;
