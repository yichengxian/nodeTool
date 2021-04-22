'use strict';
const ObjectUtil = require('../object/ObjectUtil');

/**
 * @author ycx
 * @description map工具类
 */
class MapUtil {

    /**
     *  判断map集合是否为空
     * @param map {Map}
     * @return {boolean}
     */
    static isEmpty(map) {
        return !(typeof map) || 0 === map.size;
    }

    /**
     * 判断map集合不为空
     * @param map
     */
    static isNotEmpty(map) {
        return !this.isEmpty(map);
    }

    /**
     * map转object对象
     * @param map {Map}
     * @return {Object}
     */
    static mapToObject(map) {
        return ObjectUtil.mapToObject(map);
    }

    /**
     * 对象转map
     * @param obj {Object}
     * @return {Map}
     */
    static objectToMap(obj) {

        return new Map(Object.entries(obj))
    }


}

module.exports = MapUtil;



