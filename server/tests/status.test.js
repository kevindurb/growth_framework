const request = require('supertest');
const app = require('../../testapp');

describe('/status', () => {
  it('should return OK', () => {
    return request(app)
      .get('/api/status')
      .expect(200);
  });
});
