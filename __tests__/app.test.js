const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const app = require('../lib/app');
const request = require('supertest');
const supertest = require('supertest');
const Favorite = require('../lib/models/Favorite');
const Collection = require('../lib/models/Collection');

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

describe.skip('favorites routes', () =>{
  beforeEach(() => {
  return setup(pool);
  });
  
  let token;
  beforeEach(async done => {
    const signInData = await request(app)
      .post('/auth/signup')
      .send({
        email: 'reza@user.com',
        password: '1234',
        user_name: 'rezaTheGreat'
      });
    
    token = signInData.body.token; // eslint-disable-line

    return done();
  });

  let favorites;
  beforeEach(async () => {
    favorites = await Favorite.insert({
      item_id: 'test1234',
      title: 'cheese',
      images: {'type':'cheese','file':'images'},
      slug: 'cheese slug',  
      url: 'cheese.com',
      bitly_url: 'bitly.cheese.com',
      embed_url: 'embed.cheese.com',
      item_username: 'Cheese Baby',
      source: 'cheese',
      source_post_url: 'cheeseforever.com',
      rating: 'g',
      collection_id: 53
    }, 1)
  })

  afterAll(done => {
    return pool.end(done);
  });

  it('post /favorites creates a new favorite', () => {
    const newFave = {
      item_id: 'test1234turtle',
      title: 'turtle',
      images: {'type':'turtle', 'file':'images'},
      slug: 'turtle slug',  
      url: 'turtle.com',
      bitly_url: 'bitly.turtle.com',
      embed_url: 'embed.turtle.com',
      item_username: 'turtle Baby',
      source: 'turtle',
      source_post_url: 'turtleforever.com',
      rating: 'g'
    }
    
    return request(app)
      .post('/api/favorites')
      .set('Authorization', token)
      .send(newFave)
      .then((res) => {
        expect(res.body).toEqual({
          id: '2',
          item_id: 'test1234turtle',
          title: 'turtle',
          images: '{"type":"turtle","file":"images"}',
          slug: 'turtle slug',  
          url: 'turtle.com',
          bitly_url: 'bitly.turtle.com',
          embed_url: 'embed.turtle.com',
          item_username: 'turtle Baby',
          source: 'turtle',
          source_post_url: 'turtleforever.com',
          rating: 'g',
          collection_id: null,
          user_id: '1'
        })
      });
  });

  it('get /favorites returns the user`s favorites', () => {
    return request(app)
      .get('/api/favorites')
      .set('Authorization', token)
      .then((res) => {
        expect(res.body[0]).toEqual({
          id: '1',
          item_id: 'test1234',
          title: 'cheese',
          images: '{"type":"cheese","file":"images"}',
          slug: 'cheese slug',  
          url: 'cheese.com',
          bitly_url: 'bitly.cheese.com',
          embed_url: 'embed.cheese.com',
          item_username: 'Cheese Baby',
          source: 'cheese',
          source_post_url: 'cheeseforever.com',
          rating: 'g',
          collection_id: '53',
          user_id: '1'
        });
      })
  })

  it('get /favorites/:id returns the corresponding favorite object', () => {
    return request(app)
      .get('/api/favorites/1')
      .set('Authorization', token)
      .then((res) => {
        expect(res.body).toEqual({
          id: '1',
          item_id: 'test1234',
          title: 'cheese',
          images: '{"type":"cheese","file":"images"}',
          slug: 'cheese slug',  
          url: 'cheese.com',
          bitly_url: 'bitly.cheese.com',
          embed_url: 'embed.cheese.com',
          item_username: 'Cheese Baby',
          source: 'cheese',
          source_post_url: 'cheeseforever.com',
          rating: 'g',
          collection_id: '53',
          user_id: '1'
        })
      })
  })

  it('put /favorites/:id updates the corresponding favorite object', () => {
    const updatedFave = {
      collection_id: 2
    }

    return request(app)
      .put('/api/favorites/1')
      .set('Authorization', token)
      .send(updatedFave)
      .then((res) => {
        expect(res.body).toEqual({
          id: '1',
          item_id: 'test1234',
          title: 'cheese',
          images: '{"type":"cheese","file":"images"}',
          slug: 'cheese slug',  
          url: 'cheese.com',
          bitly_url: 'bitly.cheese.com',
          embed_url: 'embed.cheese.com',
          item_username: 'Cheese Baby',
          source: 'cheese',
          source_post_url: 'cheeseforever.com',
          rating: 'g',
          collection_id: '2',
          user_id: '1'
        })
      })
  })

  it('delete /favorites/:id deletes the corresponding favorite object', () => {
    return request(app)
      .delete('/api/favorites/1')
      .set('Authorization', token)
      .then((res) => {
        expect(res.body).toEqual({
          id: '1',
          item_id: 'test1234',
          title: 'cheese',
          images: '{"type":"cheese","file":"images"}',
          slug: 'cheese slug',  
          url: 'cheese.com',
          bitly_url: 'bitly.cheese.com',
          embed_url: 'embed.cheese.com',
          item_username: 'Cheese Baby',
          source: 'cheese',
          source_post_url: 'cheeseforever.com',
          rating: 'g',
          collection_id: '53',
          user_id: '1'
        })
      })
  })

});

describe('collection routes', () =>{
  beforeEach(() => {
  return setup(pool);
  });
  
  let token;
  beforeEach(async done => {
    const signInData = await request(app)
      .post('/auth/signup')
      .send({
        email: 'reza@user.com',
        password: '1234',
        user_name: 'rezaTheGreat'
      });
    
    token = signInData.body.token; // eslint-disable-line

    return done();
  });

  let favorites;
  beforeEach(async () => {
    favorites = await Favorite.insert({
      item_id: 'test1234',
      title: 'cheese',
      images: {'type':'cheese','file':'images'},
      slug: 'cheese slug',  
      url: 'cheese.com',
      bitly_url: 'bitly.cheese.com',
      embed_url: 'embed.cheese.com',
      item_username: 'Cheese Baby',
      source: 'cheese',
      source_post_url: 'cheeseforever.com',
      rating: 'g',
      collection_id: 1
    }, 1)
  })

  let collections;
  beforeEach(async () => {
    collections = await Collection.insert({
      name: 'turtles'
    }, 1)
  })

  // afterAll(done => {
  //   return pool.end(done);
  // });

  it('post /collections creates a new collection', () => {
    return request(app)
      .post('/api/collections')
      .set('Authorization', token)
      .send({ name: 'cheese gifs'})
      .then((res) => {
        expect(res.body).toEqual({
          id: '2',
          name: 'cheese gifs',
          user_id: '1'
        });
      })
  });

  it('get /collections returns all of a users collections', () => {
    return request(app)
      .get('/api/collections')
      .set('Authorization', token)
      .then((res) => {
        expect(res.body).toEqual([{
          id: '1',
          name: 'turtles',
          user_id: '1'
        }]);
      })
  });

  it('get /collections/:id returns the specific collection joined with the favorites table on id', () => {
    return request(app)
      .get('/api/collections/1')
      .set('Authorization', token)
      .then((res) => {
        expect(res.body[0]).toEqual({
          collection_name: 'turtles',
          favorite_id: '1',
          item_id: 'test1234',
          title: 'cheese',
          images: '{"type":"cheese","file":"images"}',
          slug: 'cheese slug',  
          url: 'cheese.com',
          bitly_url: 'bitly.cheese.com',
          embed_url: 'embed.cheese.com',
          item_username: 'Cheese Baby',
          source: 'cheese',
          source_post_url: 'cheeseforever.com',
          rating: 'g',
          user_id: '1'
        });
      })
  });

  it('put /collections/:id updated the name of a collection', () => {
    request(app)
      .put('/api/collections/1')
      .set('Authorization', token)
      .send({ name: 'cheese turtles' })
      .then((res) => {
        expect(res.body).toEqual({
          id: '1',
          name: 'cheese turtles',
          user_id: '1'
        });
      });

    return request(app)
    .get('/api/collections/1')
    .set('Authorization', token)
    .then((res) => {
      expect(res.body[0]).toEqual({
        collection_name: 'cheese turtles',
        favorite_id: '1',
        item_id: 'test1234',
        title: 'cheese',
        images: '{"type":"cheese","file":"images"}',
        slug: 'cheese slug',  
        url: 'cheese.com',
        bitly_url: 'bitly.cheese.com',
        embed_url: 'embed.cheese.com',
        item_username: 'Cheese Baby',
        source: 'cheese',
        source_post_url: 'cheeseforever.com',
        rating: 'g',
        user_id: '1'
      });
    });
  });
  
})

