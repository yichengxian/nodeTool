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
}

module.exports = ObjectUtil
