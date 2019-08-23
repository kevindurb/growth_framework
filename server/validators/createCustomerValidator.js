const {
  object,
  string,
} = require('yup');

const customerSchema = object().shape({
  email: string().required(),
});

module.exports = request => customerSchema.isValid(request.body);
