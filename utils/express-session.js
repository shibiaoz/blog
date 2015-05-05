/**
 * Created with JetBrains PhpStorm.
 * User: zhangshibiao
 * Date: 15-3-26
 * Time: 上午10:41
 * To  把会话session信息存在mongodb中，express中好多的中间件都从express中分离出来
 * Please see https://github.com/senchalabs/connect#middleware.
 * 一栏的模块有express-session connect-mongo
 *
 */
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var setting = require('../config/setting');
module.exports = session({
    secret : setting.cookieSecrect,
    resave:false,
    saveUninitialized:true,
    store : new MongoStore(
        {
            db : setting.db
        }, function() {
            console.log('connect mongodb success...');
        }),
    cookie : {
        maxAge : new Date(Date.now() + 1000 * 60 * 60)
    }
});
