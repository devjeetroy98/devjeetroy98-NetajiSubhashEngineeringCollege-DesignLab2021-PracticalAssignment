var express = require('express');
var router = express.Router();
var Airport = require("../schema/AirportSchema")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get("/get-payload",(req,res,next)=>{
  Airport.find({}, (err,data)=>{
    if(err) throw err
    res.json(data)
  })
})
module.exports = router;
