const MapUtil = require('../../core/map/MapUtil');

//判断map集合是否为空
console.info(MapUtil.isEmpty(new Map())); //true

//判断map是否不为空
console.info(MapUtil.isNotEmpty(new Map())); //false
