
//测试random util 方法

const randomUtil = require('../../core/random/RandomUtil');

//从A-Za-z0-9中获取指定长度的字符串
console.log(randomUtil.randomEnStr(4));//wdJO

//获取随机范围的int数值 包含min 不包含max
console.log(randomUtil.randomInt(2, 5)); //4

// 获取随机字符串
console.log(randomUtil.randomStr('中文哈哈哈asdfDFSzdgWSW',10)); //sD中dDzWd文W

// 获取数组中的随机元素
console.log(randomUtil.randomEle(['zhangsan','lisi','wangwu','ngls'],4));//ngls
