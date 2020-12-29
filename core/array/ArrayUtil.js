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
     * 移除元素中指定元素
     * @param arr {Array<*>}
     * @param element {*};
     * @return {Array<*>}
     */
    static remove(arr, element) {
        return arr.filter(value => value !== element);
    }

    /**
     * 去除数组中重复元素
     * @param arr {Array<*>} 源数组
     * @return {Array<*>} 去重的后的数组
     */
    static unique(arr) {
        
        //return Array.from(new Set(arr));

        const newArr = [];
        for (let ele of arr) {
            if (!this.contains(newArr, ele)) {
                newArr.push(ele);
            }
        }
        return newArr;
    }

    /**
     * 合并多个数组并且不重复 <br/>
     * 注:这是一种比较暴力的方式
     * @param arr {Object[]|*[]}
     * @return {[]} 合并后的数组
     */
    static uniquelize(...arr) {
        //
        let newArr = this.EMPTY;
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
            });
        }
        return newArr;
    }

    /**
     * 获取并集 A ∪ B <br/>
     * 集合论:设A，B是两个集合，由所有属于集合A与属于集合B的元素所组成的集合(类似于迪卡尔积)，叫做集合A与集合B的并集
     * @param arr {*[]|Object[]}
     * @return {*[]}
     */

    /*    static union(...arr) {
            //不知道可变参如何传递下去所以就又写了一个
            let newArr = this.EMPTY;

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
                });
            }
            return newArr;
        }*/

    /**
     * 获取交集 A∩B <br/>
     * 集合论:设A，B是两个集合，由 属于集合A且属于集合B的元素所组成 的集合，叫做集合A与集合B的交集
     * @param arr {*[]|Object[]}
     * @return {*[]}
     */
    static intersect(...arr) {
        let newArr = this.EMPTY;
        if (this.isNotEmpty(arr)) {
            if (1 === arr.length) {
                return newArr;
            }
            newArr = arr[0];
            for (let i = 0; i < arr.length - 1; i++) {
                newArr = newArr.filter(value => new Set(arr[i + 1]).has(value));
            }
        }
        return newArr;
    }


    /**
     * 获取差集(相对) <br/>
     * 注:集合论可分为朴素集合论和相对集合论
     * 集合论:设A，B是两个集合，由 属于集合A但不属于集合B的元素 所组成的集合，叫做集合A与集合B的差集(也就是A减去B中与A相同的元素，)
     * @param sourceArr {[]} 源数组
     * @param anotherArr {[]} 另一个数组
     * @return {[]}
     */
    static minus(sourceArr, anotherArr) {

        let newArr = [];
        if (this.isNotEmpty(sourceArr) && this.isNotEmpty(anotherArr)) {
            newArr = Array.from(new Set(sourceArr.filter(value => !this.contains(anotherArr, value))));
        }
        return newArr;
    }

    /**
     * 获取补集 </br> 本方法用于获取各个数组不同项
     * @param arr {*}
     * @return {[]}
     */
    static complement(...arr) {
        let newArr = this.EMPTY;
        if (this.isNotEmpty(arr)) {
            if (1 === arr.length) {
                return newArr;
            }
            for (let i = 0; i < arr.length; i++) {
                //
                const set = new Set(arr[i]);

                set.forEach(value => {
                    if (this.contains(newArr, value)) {
                        newArr = this.remove(newArr,value);
                    }else {
                        newArr.push(value);
                    }
                })
            }
        }
        return newArr;
    }


}

module.exports = ArrayUtil

