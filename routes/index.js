var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' ,list: []});
  //mongo db test
    /*var list = [];
    var mongoDb = require("../utils/db");
    var list = [];
    mongoDb.open(function(err,db){
        db.collection('user',function(err,collection){
            collection.find().toArray(function(err,docs){
                list = docs;
                mongoDb.close();
                res.render('index', { title: 'Express' ,list: list});
            });
        });
    });*/
});

router.get('/reg',function (req,res,next) {
   res.render('reg',{
       title: '欢迎注册'
   });
});
router.post('/doReg',function (req,res,next) {
    var body = req.body;
    var name = body.username;
    var pwd = body.pwd;
    req.flash(name);
    console.log(name,pwd);
    res.render('index', { title: name ,list: [name,pwd]});
});



module.exports = router;
