const express = require('express');
const app = express();
const connectDB = require('./configs/database');

const router = require('./routers');
//HTTP method: GET, POST...

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('./public'));

connectDB();
router(app);

app.listen(5000, () => {
  console.log('server run at port 5000');
});
