var products = [
  { id: 1, brand: "Nokia", model: "1100", inStock: true, price: 200 },
  { id: 2, brand: "Samsung", model: "S8", inStock: true, price: 1200 },
  { id: 3, brand: "Nokia", model: "2100", inStock: false, price: 200 }];

function ProductCtrl() {

  this.get = function (req, res) {
    res.json(products);
  };

  this.save = function (req, res) {
    products.push(req.body);

    res.status(201); //created
    res.send("Success");
  }

  this.getById = function (req, res) {
    var id = req.params.id;
    var product;

    for (var i = 0; i < products.length; i++) {
      if (products[i].id == id) product = products[i];
    }
    if (product) {
      res.status(200);
      res.json(product);
    }
    else {
      res.status(404);
      res.send("Not found");
    }
  }

  this.delete = function (req, res) {
    var id = req.params.id;
    for (var i = 0; i < products.length; i++) {
      if (products[i].id == id) {
        products.splice(i, 1);
      }
    }

    res.status(204); //no content
    res.send();
  }
}

module.exports = new ProductCtrl();