var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var productRouter = require('./routes/product.router');
var defaultRouter = require('./routes/default.router');
var middlewares = require('./middlewares');
var userRouter = require('./routes/user.router');

var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log("Server is running on 3000");
});

mongoose.connect("mongodb://localhost:27017/nareshdb");

app.use(bodyParser.json());
app.use('/', defaultRouter);

app.use('/api/users', userRouter);
app.use(middlewares.authenticateToken);
app.use('/api/products', productRouter);
