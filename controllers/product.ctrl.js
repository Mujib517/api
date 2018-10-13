var Product = require('../models/product.model');

function ProductCtrl() {

  this.get = function (req, res) {

    Product.find(function (err, products) {
      if (err) {
        res.status(500);
        //logging. Assignment
        res.send("Internal Server Error");
      }
      else {
        res.status(200);
        res.json(products);
      }
    });

  };

  this.save = function (req, res) {
    var product = new Product(req.body);

    product.save(function (err, result) {
      res.status(201); //created
      res.json(result);
    });
  }

  this.getById = function (req, res) {
    var id = req.params.id;

    Product.findById(id, function (err, product) {
      res.status(200);
      res.json(product);
    });
  }

  this.delete = function (req, res) {
    var id = req.params.id;

    Product.findByIdAndDelete(id, function (err) {
      res.status(204); //no content
      res.send();
    });

  }

  this.update = function (req, res) {
    var id = req.params.id;
    Product.findByIdAndUpdate(id, {
      $set: { brand: req.body.brand, model: req.body.model, price: req.body.price, inStock: req.body.inStock }
    }, function (err) {
      res.status(204);
      res.send();
    });
  }
}

module.exports = new ProductCtrl();

// Mongodb, mysql, postgres