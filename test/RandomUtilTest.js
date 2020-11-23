const index = require('../index');

const RandomWeightUtil = index.RandomWeightUtil;

const weightUtil = new RandomWeightUtil();

let obj1= {
    name: '张三'
}

let obj2 = {
    name :'李四'
}

weightUtil.add(obj1,10);
weightUtil.add(obj2,90);

for (let i = 0; i < 10; i++) {
    console.log(weightUtil.next())
}

