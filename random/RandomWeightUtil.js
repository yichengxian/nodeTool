/**
 * @author: 易成贤
 * @description: js 实现的简单随机权重工具类
 * @type {RandomWeightUtil}
 */
/**
 * @author:
 * @description : 简单实现的随机权重工具类
 */
RandomWeightUtil = function () {

    let weightArr  = [];

    function RandomWeightUtil() {

    }
    /**
     * 添加权重对象
     * @param obj 对象
     * @param weight 权重值 需要配置 整数
     */
    this.add = function (obj, weight) {
        for (let i = 0; i < weight; i++) {
            weightArr.push(obj);
        }
        return this;
    };
    /**
     * @description: 清空权重对象
     *
     */
    this.clear = function () {
        weightArr = [];
    };
    /**
     * 获取下一个随机权重对象
     */
    this.next = function () {
        if (0 === weightArr.length) {
            return null;
        }
        return weightArr[Math.floor(Math.random() * weightArr.length)];
    };

    return this;
}




