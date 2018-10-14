var mongoose = require('mongoose');

var productModel = mongoose.model("Product", {
  brand: { type: String, required: [true,"Brand is mandatory"], minlength: 3, maxlength: 10 },
  model: { type: String, required: true },
  price: {
    type: Number, validate: {
      validator: function (v) {
        return v >= 100;
      }
    }
  },
  inStock: Boolean,
  lastUpdated: { type: Date, default: Date.now }
});

module.exports = productModel;

//controller
//model
//route