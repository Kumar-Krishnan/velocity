var express = require('express');
var router = express.Router({mergeParams: true});

const allQuotes = require('../db/allQuotes/allQuotes.json')

router.get('/', function(req, res, next) {
      res.send(allQuotes[1])
});

module.exports = router;
