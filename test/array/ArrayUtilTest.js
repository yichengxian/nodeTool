
//测试数组方法
const ArrayUtil = require('../../core/array/ArrayUtil');

//是否为空
console.info(ArrayUtil.isEmpty([1])); //false

//是否不为空
console.info(ArrayUtil.isNotEmpty([1,2])); //true

//如果数组为空 则设置默认数组
console.info(ArrayUtil.defaultIfEmpty([],[1,2,3,4])); //[ 1, 2, 3, 4 ]

//数组中是否包含null
console.info(ArrayUtil.hasNull([null,undefined])); //true

//数组中是否包含undefined
console.info(ArrayUtil.hasUndefined([null,1,undefined])); //true

//数组中是否包含某个元素
console.info(ArrayUtil.contains([1,2,3,4],2)); //true

//移除某个元素
console.info(ArrayUtil.remove([1,2,3,4],2)); //[ 1, 3, 4 ]

//出去数组中的重复元素
console.info(ArrayUtil.unique([1,2,1,4,4])); //[ 1, 2, 4 ]

//合并多个数组 //获取并集
console.info(ArrayUtil.uniquelize([1,2,3],[1,2,3,4],[4,5,6,9])); //[1, 2, 3, 4,5, 6, 9]

//获取交集 获取多个数组相同部分
console.info(ArrayUtil.intersect([2,3,4],[2,3,5])) //[ 2, 3 ]

//获取差集 差集
console.info(ArrayUtil.minus([2,2,3,4],[4,5,6,7])); //[ 2,3 ]


