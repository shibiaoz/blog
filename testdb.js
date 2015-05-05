/**
 * Created with JetBrains PhpStorm.
 * User: zhangshibiao
 * Date: 15-3-25
 * Time: 下午11:04
 * To change this template use File | Settings | File Templates.
 */

function find(){
    var mongoDb = require("./utils/db");
    mongoDb.open(function(err,db){
        db.collection('user',function(err,collection){
            collection.find().toArray(function(err,docs){
                console.log(docs);
                mongoDb.close();
            });
        });
    });
}
//find();
function connectTest(){
    var MongoClient = require('mongodb').MongoClient
    var assert = require('assert');

    // Connection URL
    var url = 'mongodb://localhost:27017/test';
    // Use connect method to connect to the Server
    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        console.log("Connected correctly to server");
        db.close();
    });
}

//connectTest();

var testUser = {
    name: 'zhangshibiao',
    age: '25',
    email: 'shibiaoz@sina.cn'
};
function errCall(err,data,data2) {
    if (err) {
        console.log('===========error msg========== ');
        console.log(err);
    }else if(data){
        console.log('=========== success=============');
        console.log(data);
    }
}
var User =  require('./model/user');
//var userInstace = new User();
//new User().get(errCall);
User.getByName('zhangshibiao',errCall);