var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var productRouter = require('./routes/product.router');
var defaultRouter = require('./routes/default.router');
var middlewares = require('./middlewares');
var userRouter = require('./routes/user.router');
var config = require('./config');
// var cluster = require('cluster');
// var os = require("os");
//course location: https://bit.ly/2yCd3z4

// if (cluster.isMaster) {

//   for (var i = 0; i < os.cpus().length; i++) {
//     cluster.fork();
//   }
// }
// else {

  var port = process.env.PORT || 3000;

  app.listen(port, function () {
    console.log("Server is running on 3000", process.pid);
  });
//}

mongoose.connect(config.conStr, { useNewUrlParser: true });

app.use(bodyParser.json());
app.use('/', defaultRouter);

app.use('/api/users', userRouter);
//app.use(middlewares.authenticateToken);
app.use('/api/products', productRouter);
