'use strict';
const StringUtil = require('../string/StringUtil');
const ArrayUtil = require('../array/ArrayUtil');

/**
 * @author ycx
 * @description 随机数工具类
 */
class RandomUtil {


    /**
     * 获取随机范围的int数值 包含min 不包含max
     * @param min {number} 最小数
     * @param max {number} 最大数
     * @return {number}
     */
    static randomInt(min, max) {
        if (Number.isNaN(min)) {
            min = 0;
        }
        if (Number.isNaN(min)) {
            max = 0;
        }

        const number = Math.random();
        const x = number * (max - min) + min;

        return Math.floor(x);
    }

    /**
     * 从指定字符串中随机获取字符串
     * e.g. 'abcdefg'中获取长度为3随机字符串 ‘afg’;
     * @param str {string}
     * @param length {number} 随机字符串的长度
     * @return {string|null}
     */
    static randomStr(str, length) {
        if (StringUtil.isEmpty(str)) {
            return null;
        }
        let randStr = '';
        for (let i = 0; i < length; i++) {
            let strElement = str[this.randomInt(0, str.length)];
            randStr += strElement;
        }
        return randStr;

    }

    /**
     *  从前几个数组中随机获取 一个元素
     * @param arr {Array<*>} 数组对象
     * @param limit {number} 限制的前n项
     * @return {*}
     */
    static randomEle(arr, limit) {
        if (ArrayUtil.isEmpty(arr)) {
            return null;
        }
        if (limit >= arr.length) {
            limit = arr.length;
        }
        return arr[this.randomInt(0, limit)];

    }

    /**
     * 从A-Za-z0-9中获取指定长度的字符串
     * @param length
     * @return {string}
     */
    static randomEnStr(length) {
        return this.randomStr(StringUtil.RandomStr, length);
    }


}

module.exports = RandomUtil

