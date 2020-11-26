/**
 * @author ycx
 * @description：数组工具类
 */
class ArrayUtil {

    static EMPTY = [];
    /**
     * @author ycx
     * @description: 数组是否为空
     * @param arr {Array} 数组
     * @return {boolean} 是否为空
     */
    static isEmpty(arr) {
        return !Array.isArray(arr) || 0 === arr.length
    }

    /**
     * @author ycx
     * 判断数组是否不包含空
     * @param arr 数组
     * @return {boolean}
     */
    static isNotEmpty(arr) {
        return !this.isEmpty(arr);

    }

    /**
     * @author ycx
     * @description 给定数组如果为空，返回默认数组对象
     * @param arr {Array} 数组对象
     * @param defaultArr {Array} 默认的数组对象
     * @return {boolean}
     */
    static defaultIfEmpty(arr, defaultArr) {
        if (!Array.isArray(defaultArr)) {
            throw new Error('defaultArr not is  array');
        }
        return this.isEmpty(arr) ? defaultArr : arr;

    }

    /**
     * @author ycx
     * 判断数组中是否包含null
     * @param arr {Array} 被检测的数组
     * @return {boolean}
     */
    static hasNull(arr) {
        if (this.isNotEmpty(arr)) {
            for (let e of arr) {
                if (null === e) {
                    return true;
                }
            }
        }

        return false;
    }


    /**
     * @author ycx
     * 判断数组中是否包含 undefined
     * @param arr {Array} 数组列表
     * @return {boolean} 是否包含
     */
    static hasUndefined(arr){

        if (this.isNotEmpty(arr)) {
            for (let e of arr) {
                if (undefined === e) {
                    return true;
                }
            }
        }

        return false;
    }


}

module.exports = ArrayUtil
