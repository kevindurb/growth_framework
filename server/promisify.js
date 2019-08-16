module.exports = (handler) => async (request, response) => {
  try {
    const result = await handler(request);
    response.json(result);
  } catch (error) {
    response.status(500);
    response.json({
      message: error.message,
    });
  }
};
