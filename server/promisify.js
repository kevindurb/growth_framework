const BadRequest = require('./errors/BadRequest');

module.exports = (handler) => async (request, response) => {
  try {
    const result = await handler(request);
    response.json(result);
  } catch (error) {
    if (error instanceof BadRequest) {
      response.status(400);
    } else {
      response.status(500);
    }

    response.json({
      message: error.message,
    });
  }
};
