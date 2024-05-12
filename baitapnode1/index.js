const express = require('express')
const app = express()
const HomeController = require("./controllers/home.controller"); 


app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static("./public"));

app.get('/', HomeController.getHomePage);


app.listen(5001)