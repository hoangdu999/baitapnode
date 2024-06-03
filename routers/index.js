const errorHandle = require('../middlewares/error.handle');
const categoryRouter = require('./category.router');
const foodRouter = require('./food.router');
const accountRouter = require('./account.router');
const itemRouter = require('./item.router');
const orderRouter = require('./order.router');
const cartRouter = require('./cart.router');
const authRouter = require('./auth.router');

module.exports = (app) => {
  app.use('/api/auth', authRouter);
  app.use('/api/categorys', categoryRouter);
  app.use('/api/products', foodRouter);
  app.use('/api/accounts', accountRouter);
  app.use('/api/items', itemRouter);
  app.use('/api/orders', orderRouter);
  app.use('/api/carts', cartRouter);

  app.use(errorHandle);
};
