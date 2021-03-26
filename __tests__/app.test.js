const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const app = require('../lib/app');
const request = require('supertest');

// jest.mock('twilio', () => () => ({
//   messages: {
//     create: jest.fn(),
//   },
// }));

describe('lab-04-build-something routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  let token;
  beforeEach(async done => {
    pool.connect();

    const signInData = await request(app)
      .post('/auth/signup')
      .send({
        email: 'reza@user.com',
        password: '1234'
      });
    
    token = signInData.body.token; // eslint-disable-line

    return done();
  });

  afterEach(done => {
    return pool.end(done);
  });

  it('creates a new contact in the database', () => {
    const contact = {
      id: '1',
      name: 'Hamid Tehrani',
      phoneNumber: 12345678
    }
    
    return request(app)
      .post('/api/contacts')
      .send(contact)
      .then((res) => {
        expect(res.body).toEqual({
          id: '1',
          name: 'Hamid Tehrani',
          phoneNumber: 12345678,
          userId: '1'
        });
      });
  });
});
