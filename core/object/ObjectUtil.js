const MapUtil = require('../map/MapUtil');

/**
 * 对象处理工具类
 */
class ObjectUtil {

    /**
     * 判断对象是否为空
     * @param obj {Object} 被检测对象
     * @return {boolean} 是否为空
     */
    static isEmpty(obj) {
        if (undefined === obj) {
            return true;
        }

        if (null === obj) {
            return true;
        }

        for (let key in obj) {
            if ({}.hasOwnProperty.call(obj, key)) {
                return false;
            }
        }
        return true;
    }

    /**
     * 判断对象是否不为空
     * @param obj {Object} 被检测的对象
     * @return {boolean} 是否不为空
     */
    static isNotEmpty(obj) {
        return !this.isEmpty(obj)
    }

    /**
     * map转换为对象
     * @param map {Map} map对象
     * @return {Object} 转换后的对象
     */
    static mapToObject(map) {
        let obj = {};
        map.forEach((value, key) => obj[key] = value);
        return obj;
    }

    /**
     * 对象转map
     * @param obj {Object}
     * @return {Map}
     */
    static objectToMap(obj) {
        return MapUtil.objectToMap(obj);
    }
}

module.exports = ObjectUtil
