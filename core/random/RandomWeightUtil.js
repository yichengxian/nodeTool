'use strict';

const ArrayUtil = require('../array/ArrayUtil');
const RandomUtil = require('./RandomUtil');
/**
 * @author ycx
 * @description : 简单实现的随机权重工具类
 * todo
 */
class RandomWeightUtil {
    /**
     *  私有外部无法访问
     * @type {[]}
     */
    #weightArr = []

    /**
     * 添加权重对象
     * @param obj {Object} 对象
     * @param weight {number} 权重值 需要配置 整数
     * @return {RandomWeightUtil}
     */
    add(obj, weight) {
        for (let i = 0; i < weight; i++) {
            this.#weightArr.push(obj);
        }
        return this;
    };

    /**
     * @description: 清空权重对象
     *  @return {Object}
     */
    clear() {
        return this.#weightArr.splice(0, this.#weightArr.length);
    };

    /**
     * @author ycx
     * 获取下一个随机权重对象
     * @return {Object}
     */
    next() {
        if (ArrayUtil.isEmpty(this.#weightArr)) {
            return null;
        }
        return this.#weightArr[RandomUtil.randomInt(0,this.#weightArr.length)];
    };
}

module.exports = RandomWeightUtil




