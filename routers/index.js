const categoryRouter = require('./category.router');
const foodRouter = require('./food.router');
const accountRouter = require('./account.router');
const itemRouter = require('./item.router');
const orderRouter = require('./order.router');
const cartRouter = require('./cart.router');
module.exports = (app) => {
  app.use('/api/categorys', categoryRouter);
  app.use('/api/products', foodRouter);
  app.use('/api/account', accountRouter);
  app.use('/api/item', itemRouter);
  app.use('/api/order', orderRouter);
  app.use('/api/cart', cartRouter);
};
