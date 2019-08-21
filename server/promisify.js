const BadRequest = require('./errors/BadRequest');

module.exports = (...handlers) => async (request, response) => {
  try {
    let data = request;
    for (let handler of handlers) {
      data = await handler(data);
    }
    response.json(data);
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
