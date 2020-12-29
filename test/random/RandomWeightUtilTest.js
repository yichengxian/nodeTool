// 测试权重工具类方法

const RandomWeightUtil = require('../../core/random/RandomWeightUtil');

const weightUtil = new RandomWeightUtil();

let obj1 = {name: '张三'},obj2 = {name: '李四'}
//添加权重对象
weightUtil.add(obj1, 10);
weightUtil.add(obj2, 90);


console.log(weightUtil.next()); //{ name: '李四' }


