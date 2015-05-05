/**
 * Created with JetBrains PhpStorm.
 * User: zhangshibiao
 * Date: 15-3-25
 * Time: 下午8:04
 * To database initial
 */
var setting = require('../config/setting');
var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var	Server = require('mongodb').Server;
module.exports = new Db(
    setting.db,
    new Server(setting.host,27017),
    //Connection.DEFAULT_PORT||27017,
    {safe: true}
);


