const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const app = require('../lib/app');
const request = require('supertest');
const Favorite = require('../lib/models/Favorite');

// jest.mock('twilio', () => () => ({
//   messages: {
//     create: jest.fn(),
//   },
// }));

describe.skip('giphy routes', () => {
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

describe('favorites routes', () =>{
  beforeEach(() => {
  return setup(pool);
  });

  let favorites;
  beforeEach(async () => {
    favorites = await Favorite.insert({
      item_id: 'test1234',
      title: 'cheese',
      images: { 'type':'cheese', 'file':'images'},
      slug: 'cheese slug',  
      url: 'cheese.com',
      bitly_url: 'bitly.cheese.com',
      embed_url: 'embed.cheese.com',
      username: 'Cheese Baby',
      source: 'cheese',
      source_post_url: 'cheeseforever.com',
      rating: 'g'
    })
  })

  afterEach(done => {
    return pool.end(done);
  });

  it('post /favorites creates a new favorite', () =>{
    const newFave = {
      item_id: 'test1234turtle',
      title: 'turtle',
      images: { 'type':'turtle', 'file':'images'},
      slug: 'turtle slug',  
      url: 'turtle.com',
      bitly_url: 'bitly.turtle.com',
      embed_url: 'embed.turtle.com',
      username: 'turtle Baby',
      source: 'turtle',
      source_post_url: 'turtleforever.com',
      rating: 'g'
    }
    return request(app)
      .post('/favorites')
      .send(newFave)
      .then((res) => {
        expect(res.body).toEqual({
          id: 2,
          item_id: 'test1234turtle',
          title: 'turtle',
          images: { 'type':'turtle', 'file':'images'},
          slug: 'turtle slug',  
          url: 'turtle.com',
          bitly_url: 'bitly.turtle.com',
          embed_url: 'embed.turtle.com',
          username: 'turtle Baby',
          source: 'turtle',
          source_post_url: 'turtleforever.com',
          rating: 'g'
        })
      })
  });

})

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
