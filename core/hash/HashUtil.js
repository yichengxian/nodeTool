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


    /**
     * MurmurHash</br>
     * 是一种非加密型哈希函数，适用于一般的哈希检索操作
     * @link http://murmurhash.googlepages.com/
     * @param data
     * @param offset
     * @param seed
     * @return {number}
     */
    static murmurHas(data,offset,seed){

        let len = data.length,
            m = 0x5bd1e995,
            r = 24,
            h = seed ^ len,
            len_4 = len >> 2;

        for (let i = 0; i < len_4; i++) {
            let i_4 = (i << 2) + offset,
                k = data[i_4 + 3];

            k = k << 8;
            k = k | (data[i_4 + 2] & 0xff);
            k = k << 8;
            k = k | (data[i_4 + 1] & 0xff);
            k = k << 8;
            k = k | (data[i_4] & 0xff);
            k *= m;
            k ^= k >>> r;
            k *= m;
            h *= m;
            h ^= k;
        }

        // avoid calculating modulo
        let len_m = len_4 << 2,
            left = len - len_m,
            i_m = len_m + offset;

        if (left !== 0) {
            if (left >= 3) {
                h ^= data[i_m + 2] << 16;
            }
            if (left >= 2) {
                h ^= data[i_m + 1] << 8;
            }
            if (left >= 1) {
                h ^= data[i_m];
            }

            h *= m;
        }

        h ^= h >>> 13;
        h *= m;
        h ^= h >>> 15;

        return h;
    }

}

module.exports = HashUtil
