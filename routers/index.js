const categoryRouter = require('./category.router');
const productRouter = require('./product.router');
const accountRouter = require('./account.router');

module.exports = (app) => {
  app.use('/api/categorys', categoryRouter);
  app.use('/api/products', productRouter);
  app.use('/api/account', accountRouter);
};
