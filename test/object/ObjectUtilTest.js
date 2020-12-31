const ObjectUtil = require('../../core/object/ObjectUtil');

//是否空对象
console.info(ObjectUtil.isEmpty({}));//true

//是否非空对象
console.info(ObjectUtil.isNotEmpty({}));//false

const map = new Map();
map.set('name','张三');
map.set('age',18);
console.info(ObjectUtil.mapToObject(map)); //{ name: '张三', age: 18 }

//对象转map
console.info(ObjectUtil.objectToMap({ name: '张三', age: 18 })); //Map(2) { 'name' => '张三', 'age' => 18 }
