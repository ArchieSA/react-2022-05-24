const router = require('express').Router();
const { restaurants, products, reviews, users } = require('./mock');
const { reply, getById } = require('./utils');

router.get('/restaurants', (req, res, next) => {
  reply(res, restaurants);
});

router.get('/products', (req, res, next) => {
  let result = products;

  const { id } = req.query;
  if (id) {
    const restaurant = getById(restaurants)(id);
    if (restaurant) {
      result = restaurant.menu.map(getById(result));
      reply(res, result);
      return;
    }
  }

  const { productId } = req.query;
  if (productId) {
    const product = products.filter(p => p.id == productId)
    reply(res, product);
    return;
  }

  reply(res, result);
});

router.get('/reviews', (req, res, next) => {
  const { id } = req.query;
  let result = reviews;
  if (id) {
    const restaurant = getById(restaurants)(id);
    if (restaurant) {
      result = restaurant.reviews.map(getById(result));
    }
  }
  reply(res, result);
});

router.get('/users', (req, res, next) => {
  reply(res, users);
});

module.exports = router;
