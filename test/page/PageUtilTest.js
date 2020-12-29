const PageUtil = require('../../core/util/PageUtil');

//根据总数计算总页数
console.info(PageUtil.totalPage(20,6)); //4

//彩虹分页(源自网络)
console.info(PageUtil.rainbow(4,20,4)); //[ 3, 4, 5, 6 ]
