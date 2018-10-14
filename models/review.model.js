var mongoose = require('mongoose');


module.exports = mongoose.model("Review", {
  name: String,
  date: Date,
  rating: Number,
  productId: { type: mongoose.Types.ObjectId, ref: 'Product' }
});