var express = require('express');
var router = express.Router();
var productCtrl = require('../controllers/product.ctrl');

router.get('/', productCtrl.get);
router.post('/', productCtrl.save);
router.get('/:id', productCtrl.getById);
router.delete('/:id', productCtrl.delete);

module.exports = router;