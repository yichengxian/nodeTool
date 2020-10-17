
const arrayUtil = require('../core/util/ArrayUtil');
/**
 * @author ycx
 * @description : 简单实现的随机权重工具类
 * todo
 */
class RandomWeightUtil {
    #weightArr = []

    /**
     * 添加权重对象
     * @param obj 对象
     * @param weight 权重值 需要配置 整数
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
     *
     */
    clear() {
        return this.#weightArr.splice(0, this.#weightArr.length);
    };

    /**
     * @author ycx
     * 获取下一个随机权重对象
     * @return {Object}
     */
    next = function () {
        if (arrayUtil.isEmpty(this.#weightArr)) {
            return null;
        }
        return this.#weightArr[Math.floor(Math.random() * this.#weightArr.length)];
    };
}

module.exports = RandomWeightUtil




