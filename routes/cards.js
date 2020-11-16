var express = require('express');
var router = express.Router();
const ctrl = require('../controllers');

router.get('/show/:id', ctrl.cards.getCardData)
router.get('/:name/:set/:white/:blue/:black/:green/:red/:colorless/:supertype/:type/:subtype', ctrl.cards.searchForCard);


module.exports = router;