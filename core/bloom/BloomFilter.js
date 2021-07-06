'use strict';
const HashUtil = require('../hash/HashUtil');

/**
 * @author ycx
 * @description 布隆过滤器
 * @link https://yq.aliyun.com/articles/3607
 */
class BloomFilter {

    /**
     * 构造
     * @param maxKeys  {number} 最大数量
     * @param errorRate {number} 错误率
     */
    constructor(maxKeys,errorRate) {
        // 布隆过滤器位图映射变量
        this.bitMap = [];
        // 布隆过滤器中最多可放的数量
        this.maxKeys = maxKeys;
        // 布隆过滤器错误率
        this.errorRate = errorRate;
        // 位图变量的长度，需要根据maxKeys和errorRate来计算
        this.bitSize = Math.ceil(maxKeys * (-Math.log(errorRate) / (Math.log(2) * Math.log(2)) ));
        // 哈希数量
        this.hashCount = Math.ceil(Math.log(2) * (this.bitSize / maxKeys));
        // 已加入元素数量
        this.keyCount = 0;
       /* // 初始化位图数组
        for (let i = Math.ceil(this.bitSize / 31) - 1; i >=0; i--) {
          this.bitMap[i] = 0;
        }*/
    }

    /**
     * 设置位
     * @param bit {number} 位
     */
    bitSet(bit){
        // this.bitMap |= (1<<bit);
        // bitSize
        let numArr = Math.floor(bit / 31),
            numBit = Math.floor(bit % 31);
        this.bitMap[numArr] |= (1<<numBit);
        // this.bitMap[bit] = 1;

    }

    /**
     * 获取位
     * @param bit {number} 位
     */
     bitGet(bit){
        // return this.bitMap &= (1<<bit);
        let numArr = Math.floor(bit / 31),
            numBit = Math.floor(bit % 31);
        return this.bitMap[numArr] &= (1<<numBit);
        // return this.bitMap[bit];
    }

    /**
     * 加入布隆过滤
     * @param key {*} key
     */
    add(key){
        if (this.contain(key)) {
            return -1;
        }

        let hash1 = HashUtil.murmurHas(key,0,0),
            hash2 = HashUtil.murmurHas(key, 0, hash1);

        for (let i = 0; i < this.hashCount; i++) {
            this.bitSet(Math.abs( Math.floor((hash1 + i * hash2) % (this.bitSize)) ));
        }

        this.keyCount++;
    }

    /**
     * 是否包含
     * @param key {any}
     * @return {boolean} 是否包含 有一定错误率
     */
    contain(key){
        let hash1 = HashUtil.murmurHas(key, 0, 0),
            hash2 = HashUtil.murmurHas(key, 0, hash1);


        for (let i = 0; i < this.hashCount; i++) {
            if ( !this.bitGet(Math.abs( Math.floor((hash1 + i * hash2) % (this.bitSize)) )) ) {
                return false;
            }
        }

        return true;

    }
}


module.exports = BloomFilter
