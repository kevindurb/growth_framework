const request = require('supertest');
const app = require('../../testapp');

describe('POST /api/session', () => {
  it('should return the logged in user', () => {
    return request(app)
      .post('/api/session')
      .send({
        email: 'fred@example.com',
        password: 'password1234',
      })
      .expect(201)
      .then((response) => {
        expect(response.body).toHaveProperty('id');
        expect(response.body).not.toHaveProperty('hash');
        expect(response.body).toHaveProperty('email', 'fred@example.com');
      });
  });

  it('wrong password should return 400', () => {
    return request(app)
      .post('/api/session')
      .send({
        email: 'fred@example.com',
        password: 'not the password',
      })
      .expect(400);
  });
});
