var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //mongo db test
    var list = [];
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
    });
});

module.exports = router;
