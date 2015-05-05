/**
 * Created with JetBrains PhpStorm.
 * User: zhangshibiao
 * Date: 15-3-25
 * Time: 下午10:46
 * To change this template use File | Settings | File Templates.
 */
var mongodb = require('../utils/db');
/**
 * Class User
 * if params user object is null,or undefined ,for the reason for call get()，to get all users
 * if not null,for get some users for some conditions
 * if not null ,to insert into db
 * if not null,to update some key value
 *
 * @param user
 * @constructor
 */
function User(user) {
    if (!user) {
        return;
    }
    this.name = user.name || '';
    this.age = user.age || '';
    this.email = user.email || '';
}
/**
 * insert into db
 * return success insert into  nums
 * @param callback
 */
User.prototype.save = function (callback) {
    var user = {
        name: this.name,
        age: this.age,
        email: this.email
    }
    mongodb.open(function (err,db) {
        if (err) {
            mongodb.close();
            return callback(err);
        }
        db.collection('user',function (err,collection) {
            if (err) {
                mongodb.close();
                return callback(err);
            }
            collection.insert(user,{
                safe: true
            },function (err,user) {
               mongodb.close();
               if (err) {
                   return mongodb.close();
               }
                // result['n'] is insert into db  docs number
               return callback(null,result['result']['n']);
            });
        });
    });
}
/**
 * get user by name ,
 * this method is static method of User
 * @param name
 * @param callback
 */
User.getByName = function (name,callback) {
    if (!callback) {
        callback = function (err,data) {
            if (err) {
                console.log('get user err...'.err);
                return [];
            }
            if (data) {
                return data;
            }
        }
    }
    if (!name) {
        callback('name is nulll');
    }
    mongodb.open(function(err,db){
        if (err) {
            mongodb.close();
            return callback(err);
        }
        db.collection('user',function (err,collection) {
                if (err) {
                    mongodb.close();
                    return callback(err);
                }
                collection.find({name:name}).toArray(function (err,data) {
                    mongodb.close();
                    if (err) {
                        return callback(err);
                    }
                    return callback(null,data)
                });
        });
    });
}
/**
 *
 * @param {function=} callback
 * return Array
 * if param is null,the function will return user list Array
 * if param is not null,return the callback funciton returned
 */
User.prototype.get = function (callback) {
    if (!callback) {
        callback = function (err,data) {
            if (err) {
                console.log('get user err...');
                return [];
            }
            if (data && Object.prototype.toString.call(data) === "[object Array]") {
                return data;
            }
        }
    }
    mongodb.open(function (err,db) {
        if (err) {
            mongodb.close();
            return callback(err);
        }
        db.collection('user', function (err,collection) {
            collection.find().toArray(function (err,docs) {
                mongodb.close();
                if (err) {
                    return callback(err);
                }
                return callback(null,docs);
            });
        });
    });
}

module.exports = User;