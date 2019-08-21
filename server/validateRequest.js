const BadRequest = require('./errors/BadRequest');

module.exports = validator => request => (
  Promise.resolve(validator(request)).then((isValid) => {
    if (!isValid) {
      throw new BadRequest('Request invalid.');
    }
    return request;
  })
)
