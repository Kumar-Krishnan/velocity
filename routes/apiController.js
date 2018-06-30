var express = require('express');
var router = express.Router({mergeParams: true});
var axios = require('axios')
require('dotenv').config()


router.get('/', (req,res,next)=>{
    axios({
        method: 'get',
        url: 'https://api.paperquotes.com/apiv1/quotes/?limit=10&tags=romance',
        headers: {
          Authorization: `Token ${process.env.REACT_APP_API}`
        }
    })
    .then((response)=>{
        res.send(response.data.results)
    })
    .catch((err) => {
        console.log(err)
        res.status(401)
        res.send(err)
    })
})
module.exports = router;