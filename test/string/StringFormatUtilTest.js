
var StringFormatUtil = require('../../core/string/StringFormatUtil');

//这个东西是：abc,第二个东西是：zhang
console.info(StringFormatUtil.format('这个东西是：{},第二个东西是：{}','abc',"zhang"));
