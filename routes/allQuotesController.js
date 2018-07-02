var express = require('express');
var router = express.Router({mergeParams: true});

const allQuotes = require('../db/allQuotes/allQuotes.json')

router.get('/', function(req, res, next) {
      const index = Math.floor(Math.random() *1501)
      res.send(allQuotes[index])
});

module.exports = router;
