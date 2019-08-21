const {
  object,
  string,
} = require('yup');

const userSchema = object().shape({
  email: string().required(),
  password: string().required(),
});

module.exports = request => userSchema.isValid(request.body);
