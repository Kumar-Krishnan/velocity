var express = require('express');
var router = express.Router();
//What the heck is going on here, how does this allow us to edit and interact with Mongo?
const UserModel = require('../db/models/User')


/* GET user listing. */

router.get('/', function(req, res, next) {
  UserModel.find()
  .then((users)=>{
    res.send(users)
  })
});


router.get('/:userId', function(req, res, next) {
  UserModel.findById(req.params.userId)
  .then((user)=>{
    res.send(user.name)
  })
});

module.exports = router;
