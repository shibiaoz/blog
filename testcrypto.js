/**
 * Created with JetBrains PhpStorm.
 * User: zhangshibiao
 * Date: 15-3-30
 * Time: 下午9:16
 * To test some simple method of modue crypto
 *
 */
var crypto = require('crypto');
var md5 = crypto.createHash('md5');
var encryptionStr = md5.update('1').digest('hex');
console.log(encryptionStr);

