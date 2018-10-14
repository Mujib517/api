var Product = require('../models/product.model');

class ProductSvc {
  get() {
    return Product.find({}, { __v: 0, lastUpdated: 0 }).exec();
  }

  getById(id) {
    return Product.findById(id, { __v: 0, lastUpdated: 0 }).exec();
  }

  save(data) {
    var product = new Product(data);
    return product.save();
  }

  delete(id) {
    return Product.findByIdAndRemove(id).exec();
  }

  update(id, data) {
    return Product.findByIdAndUpdate(id, {
      $set: {
        brand: data.brand,
        model: data.model,
        price: data.price,
        inStock: data.inStock
      }
    }).exec();
  }
}

module.exports = new ProductSvc();