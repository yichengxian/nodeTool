const ReUtil = require('../../core/reg/ReUtil');

//是否匹配
console.info(ReUtil.test(new RegExp(ReUtil.RE_CHINESE,"g"),"中文12124")); //true
