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

describe('GET /api/me', () => {
  it('should return 400 if not logged in', () => {
    return request(app)
      .get('/api/me')
      .expect(400);
  });

  it('should return the current user if logged in', async () => {
    const client = request.agent(app);

    await client
      .post('/api/session')
      .send({
        email: 'fred@example.com',
        password: 'password1234',
      });

    await client
      .get('/api/me')
      .expect(200)
      .then((response) => {
        expect(response.body).toHaveProperty('id');
      });
  });
});

describe('DELETE /api/session', () => {
  it('should log you out', async () => {
    const client = request.agent(app);

    await client
      .post('/api/session')
      .send({
        email: 'fred@example.com',
        password: 'password1234',
      });

    await client
      .delete('/api/session');

    await client
      .get('/api/me')
      .expect(400);
  });
});
