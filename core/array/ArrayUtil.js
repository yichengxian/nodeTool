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
     * @return {Array}
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
        return this.contains(arr, null);
    }


    /**
     * @author ycx
     * 判断数组中是否包含 undefined
     * @param arr {Array} 数组列表
     * @return {boolean} 是否包含
     */
    static hasUndefined(arr) {
        return this.contains(arr, undefined);

    }

    /**
     * 判断数组是否包含某个元素
     * @param arr {Array} 源数组
     * @param element {*} 被包含的元素
     * @return {boolean} 是否包含
     */
    static contains(arr, element) {
        if (this.isEmpty(arr)) {
            return false;
        }
        return -1 !== arr.indexOf(element);
    }

    /**
     * 合并多个数组并且不重复 <br/>
     * 注:这是一种比较暴力的方式
     * @param arr {Object|*}
     * @return {[]} 合并后的数组
     */
    static uniquelize(...arr) {

        //Array.from(new Set([...a, ...b]))

        //
        let newArr = [];
        if (this.isNotEmpty(arr)) {
            //遍历最外层数组
            arr.forEach(value => {
                if (this.isNotEmpty(value)) {
                    // 遍历元素
                    value.forEach(element => {
                        if (!this.contains(newArr, element)) {
                            newArr.push(element);
                        }
                    })
                }
            })
        }
        return newArr;
    }

    /**
     * 获取并集 A ∪ B <br/>
     * 集合论:设A，B是两个集合，由所有属于集合A与属于集合B的元素所组成的集合(类似于迪卡尔积)，叫做集合A与集合B的并集
     * @param arr {*|Object}
     * @return {*[]}
     */
    static union(...arr) {
        return this.uniquelize(arr);
    }

    /**
     * 获取交集 A∩B <br/>
     * 集合论:设A，B是两个集合，由 属于集合A且属于集合B的元素所组成 的集合，叫做集合A与集合B的交集
     * @param arr {*|Object}
     * @return {*[]}
     */
    static intersect(...arr) {
        let newArr = [];
        if (this.isNotEmpty(arr)) {
            if (1 === arr.length) {
                return newArr;
            }
            for (let i = 0; i < arr.length; i++) {
                if (i + 1 >= arr.length) {
                    break;
                }
                const set = new Set(arr[arr.length - 1]);
                newArr = newArr.filter(value => set.has(value));
            }
        }
        return newArr;
    }


    /**
     * 获取差集 <br/>
     * 注:集合论可分为朴素集合论和相对集合论
     * 集合论:设A，B是两个集合，由 属于集合A但不属于集合B的元素和属于集合B但不属于集合A 所组成的集合，叫做集合A与集合B的交集
     * @param arr {*|Object}
     * @return {[]}
     */
    static minus(...arr) {
        let newArr = [];
        if (this.isNotEmpty(arr)) {
            if (1 === arr.length) {
                return newArr;
            }
            newArr = arr[0];
            for (let i = 0; i < arr.length; i++) {
                if (i + 1 >= arr.length) {
                    break;
                }
                const set = new Set(arr[arr.length - 1]);
                newArr = newArr.filter(value => !set.has(value));
            }
        }
        return newArr;
    }


}

module.exports = ArrayUtil


