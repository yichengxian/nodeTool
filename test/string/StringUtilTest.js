
const StringUtil = require('../../core/string/StringUtil');

//判断字符串是否为空白
console.info(StringUtil.isBlank("     ")) // true

//判断字符串是否不为空白
console.info(StringUtil.isNotBlank("   ")) //false

//判断多个字符串中是否包含空白
console.info(StringUtil.hasBlank("zhang","1234","")); //true

//判断是否全是空白
console.info(StringUtil.isAllBlank("zhang","1234","")) ;//false

//判断字符串是不是空的 只要有东西就是存在 不包括“ ”，
console.info(StringUtil.isEmpty(" ")); //false

//是否不为空的
console.info(StringUtil.isNotEmpty(" ")) //true

//是否包含空的
console.info(StringUtil.hasEmpty(undefined,"234","aaaa")); //true

//是否全是空的
console.info(StringUtil.hasAllEmpty(undefined,"234","aaaa")) //false
