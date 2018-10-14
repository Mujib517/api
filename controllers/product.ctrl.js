var productSvc = require('../services/product.svc');

function ProductCtrl() {

  this.get = async function (req, res) {

    try {
      var products = await productSvc.get();
      res.status(200).json(products);
    }
    catch (err) {
      res.status(500).send("Internal Server Error");
    }

    // productSvc.get()
    //   .then(function (products) {
    //     res.status(200);
    //     res.json(products);
    //   })
    //   .catch(function () {
    //     res.status(500);
    //     res.send("Internal Server Error");
    //   });
  };

  this.save = async function (req, res) {
    var product = await productSvc.save(req.body);
    res.status(201);
    res.json(product);
  }

  this.getById = async function (req, res) {
    var id = req.params.id;
    var product = await productSvc.getById(id);
    res.status(200).json(product);


    // Product.findById(id, function (err, product) {
    //   res.status(200);
    //   res.json(product);
    // });
  }

  this.delete = async function (req, res) {
    var id = req.params.id;
    await productSvc.delete(id);
    res.status(204).send();
  }

  this.update = async function (req, res) {
    var id = req.params.id;
    await productSvc.update(id, req.body);
    res.status(204).send();
  }
}

module.exports = new ProductCtrl();

// Mongodb, mysql, postgres