const MapUtil = require('../../core/map/MapUtil');

//判断map集合是否为空
console.info(MapUtil.isEmpty(new Map())); //true

//判断map是否不为空
console.info(MapUtil.isNotEmpty(new Map())); //false


const map = new Map();
map.set('name','张三');
map.set('age',18);
console.info(MapUtil.mapToObject(map)); //{ name: '张三', age: 18 }

//对象转map
console.info(MapUtil.objectToMap({ name: '张三', age: 18 })); //Map(2) { 'name' => '张三', 'age' => 18 }
