const express = require('express');
const app = express();
const connectDB = require('./configs/database');
const HomeController = require('./controllers/product.controller');
const categoryModel = require('./controllers/category.controller');
const accountModel = require('./controllers/account.controller');

const router = require('./routers');
//HTTP method: GET, POST...

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('./public'));

connectDB();
router(app);

app.post('/api/accounts', accountModel.createaccount);
app.get('/api/accounts', accountModel.getaccounts);
app.patch('/api/accounts/:id', accountModel.updateaccount);
app.delete('/api/accounts/:id', accountModel.deleteaccount);

app.listen(5000, () => {
  console.log('server run at port 5000');
});
