'use strict';
const StringUtil = require('../string/StringUtil');

/**
 * @author ycx
 * @description hash工具类
 */
class HashUtil {


    /**
     * 霍纳法则是求多项式值的一个快速算法：
     * a0*x0+a1*x1+a2*x2+a3*x3+……an*x^n //n* (n+1)/2 次乘法
     *  =(((……(((an+an-1)*x+an-2)*x+an-3)*x)+……)*x+a1)*x+a0 //复杂度 为 O(n)
     * @param str {String} 指定字符串
     * @param size {Number} hash表长度
     * @return number
     */
    static hornerHash(str, size) {
        let hashCode = 0;
        if (StringUtil.isEmpty(str) || !Number.isInteger(size)) {
            return hashCode;
        }
        for (let i = 0; i < str.length; i++) {
            hashCode = 37 * hashCode + str.charCodeAt(i);
        }
        //利用hashCode与哈希表的长度取余得到下标值
        return hashCode % size;
    }


    /**
     * FNV算法 hash
     * @param data {string}
     * @return {number}
     */
    static fnvHash(data) {
        let p = 16777619;
        let hash = Number.parseInt(2166136261n);

        for (let i = 0; i < data.length; i++) {
            hash = (hash ^ data.charCodeAt(i)) * p;
        }
        hash += hash << 13;
        hash ^= hash >> 7;
        hash += hash << 3;
        hash ^= hash >> 17;
        hash += hash << 5;
        return Math.abs(hash);
    }

}

module.exports = HashUtil
