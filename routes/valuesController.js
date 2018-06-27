var express = require('express');
var router = express.Router({mergeParams: true});
//What the heck is going on here, how does this allow us to edit and interact with Mongo?
const UserModel = require('../db/models/User')
const ValueModel = require('../db/models/Value')


/* GET user listing. */

router.get('/', function(req, res, next) {
  UserModel.findById(req.params.userId)
  .then((user)=>{
    res.send(user.tenValues)
  })
});


router.post('/', (req,res)=>{
    UserModel.findById(req.params.userId)
    .then((user)=>{
        const value = new ValueModel(req.body)
        user.tenValues.push(value)
        return user.save()
        .then(()=>{
            res.send("Mission accomplished")
        })
    })
})

router.delete('/:valueId', (req,res) =>{
  UserModel.findById(req.params.userId)
  .then((user)=>{
    user.tenValues.id(req.params.valueId).remove()
    user.save()
  })
  .then(()=>{
      res.send("Quote deleted")
  })
})

// router.put('/:userId',(req,res)=>{
//   return UserModel.findByIdAndUpdate(req.params.userId, req.body, {new: true})
//   .then((user)=>{
//       res.send(user)
//   })
// })


module.exports = router;
