/**
 * Created with JetBrains PhpStorm.
 * User: zhangshibiao
 * Date: 15-3-26
 * Time: 下午9:21
 * To change this template use File | Settings | File Templates.
 */
function isArray(obj) {
    return Object.prototype.toString.call(obj) === "[object Array]" ? true : false;
}
var detect = {};
detect.isArray = isArray;
module.exports = detect;