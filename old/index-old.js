//Http server
// 7 times faster
//express
// loosely typed,higher order funs, objects,sync,async,http,routing,handle req
var http = require('http');
var fs = require('fs');
var server = http.createServer(handleRequests);

//routing
function handleRequests(req, res) {
  switch (req.url) {
    case '/':
      fs.readFile("index.html", function (err, data) {
        res.write(data);
        res.end();
      });

      break;
    case '/products':
      var products = [
        { id: 1, brand: "Nokia", model: "1100", inStock: true, price: 200 },
        { id: 2, brand: "Samsung", model: "S8", inStock: true, price: 1200 },
        { id: 3, brand: "Nokia", model: "2100", inStock: false, price: 200 }];
      res.write(JSON.stringify(products));
      break;
    case '/books':
      res.write("List of books");
      break;
    default:
      res.write("hello Nodejs");
      break;
  }
 // res.end();
}

//80
var port = 5000;
function callback() {
  console.log("server is running");
}

server.listen(port, callback);
