var express = require('express');
var router = express.Router();
//What the heck is going on here, how does this allow us to edit and interact with Mongo?
const UserModel = require('../db/models/User')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
