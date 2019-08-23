const {
  object,
  string,
} = require('yup');

const customerSchema = object().shape({
  id: string(),
  name: string(),
  email: string(),
});

module.exports = user => customerSchema.cast(user);
