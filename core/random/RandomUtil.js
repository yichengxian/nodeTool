const StringUtil = require('../string/StringUtil');
const ArrayUtil = require('../array/ArrayUtil');

/**
 * @author ycx
 * @description 随机数工具类
 */
class RandomUtil {


    /**
     * 获取随机范围的int数值
     * @param min {number}
     * @param max {number}
     */
    static randomInt(min, max) {
        if (Number.isNaN(Number(min))) {
            min = 0;
        }
        if (Number.isNaN(Number(min))) {
            max = 0;
        }
        return parseInt(Math.random() * (max - min + 1) + min, 10);
    }

    /**
     * 从指定字符串中随机获取字符串
     * e.g. 'abcdefg'中获取长度为3随机字符串 ‘afg’;
     * @param str {string}
     * @param length {number} 随机字符串的长度
     * @return {string}
     */
    static randomStr(str, length) {
        if (StringUtil.isEmpty(str)) {
            return StringUtil.Empty;
        }
        let randStr = '';
        for (let i = 0; i < str.length; i++) {
            let strElement = str[this.randomInt(0, str.length - 1)];
            randStr += strElement;
        }
        return randStr;

    }

    /**
     *从前几个数组中随机获取 一个元素
     * @param arr {Array} 数组对象
     * @param limit {number} 限制的前n项
     */
    static randomEle(arr, limit) {
        if (ArrayUtil.isEmpty(arr)) {
            return ArrayUtil.EMPTY;
        }
        if (limit >= arr.length) {
            limit = arr.length;
        }
        return arr[this.randomInt(0, limit - 1)];

    }


}

module.exports = RandomUtil


