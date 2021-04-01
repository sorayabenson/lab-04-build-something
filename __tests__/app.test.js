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
  // beforeEach(() => {
  //   return setup(pool);
  // });

  // let token;
  // beforeEach(async done => {
  //   pool.connect();

  //   const signInData = await request(app)
  //     .post('/auth/signup')
  //     .send({
  //       email: 'reza@user.com',
  //       password: '1234'
  //     });
    
  //   token = signInData.body.token; // eslint-disable-line

  //   return done();
  // });

  // afterEach(done => {
  //   return pool.end(done);
  // });

  it('get /trending calls on the giphy api and returns the trending gifs', () => {
    return request(app)
      .get('/gifs/trending')
      .then((res) => {
        expect(res.status).toEqual(200);
      });
  });

  it('get /:id calls on the giphy api and returns the gifs with the corresponding id', () => {
    return request(app)
      .get('/gifs/xXbwgiIjYaZJC86YCk')
      .then((res) => {
        expect(res.status).toEqual(200)
      });
  });

  it('get /random calls on the giphy api and returns the a random gif', () => {
    return request(app)
      .get('/gifs/random/cheese')
      .then((res) => {
        expect(res.status).toEqual(200);
      });
  });

  it('get /search calls on the giphy api and returns the corresponding gifs', () => {
    return request(app)
      .get('/gifs/search/cheese')
      .then((res) => {
        expect(res.status).toEqual(200);
      });
  });

  it('get /categories calls on the giphy api and returns an array of categories', () => {
    return request(app)
      .get('/gifs/categories')
      .then((res) => {
        expect(res.status).toEqual(200);
      });
  });

});
