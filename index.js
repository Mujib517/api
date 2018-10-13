var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var defaultCtrl = require('./controllers/default.ctrl');
var productRouter = require('./routes/product.router');

app.listen(3000, function () {
  console.log("Server is running on 3000");
});

//DDD
//Database centric
mongoose.connect("mongodb://localhost:27017/nareshdb");

app.use(bodyParser.json());

//routing
app.get('/', defaultCtrl.get);
app.use('/api/products', productRouter);