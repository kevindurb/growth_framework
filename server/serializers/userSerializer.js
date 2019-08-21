const {
  object,
  string,
} = require('yup');

const userSchema = object().shape({
  id: string(),
  name: string(),
  email: string(),
  hash: string().strip(),
});

module.exports = user => userSchema.cast(user);
