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
})

router.get('/userNames', function(req, res, next) {
  UserModel.find()
  .then((users)=>{
    function getName(user) {
      const loginName = user.name
      const loginId = user._id
      return {
        name: loginName,
        id: loginId}
    }
    const allNames = users.map(getName)
    res.send(allNames)
  })
})

router.get('/:userId', function(req, res, next) {
  UserModel.findById(req.params.userId)
  .then((user)=>{
    res.send(user)
  })
});

router.post('/', (req,res)=>{
  const newUser = new UserModel(req.body)
  newUser.save()
  .then((createdUser)=>{
    res.send(createdUser)
  })
})

router.delete('/:userId', (req,res) =>{
  UserModel.findByIdAndRemove(req.params.userId)
  .then(()=>{
    res.send("We did it!")
  })
})

router.put('/:userId', (req,res)=>{
  UserModel.findByIdAndUpdate(req.params.userId, req.body, {new: true}).then((user)=>{
      res.send(user)
  })
})




module.exports = router;
