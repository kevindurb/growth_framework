const {
  object,
  string,
} = require('yup');

const loginSchema = object().shape({
  email: string().required(),
  password: string().required(),
});

module.exports = request => (
  loginSchema.isValid(request.body)
);
