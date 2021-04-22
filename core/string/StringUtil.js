'use strict';
const arrayUtil = require('../array/ArrayUtil');

/**
 * 字符串工具类
 * @author
 */
class StringUtil {

    /**
     * 空字符串
     * @type {string}
     */
    static BlankStr = ' ';

    /**
     *
     * @type {string}
     */
    static RandomStr ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    /**
     * @author ycx
     *  判断字符串是否为空白 空白的定义如下：<br/>
     *  1,字符串不存在
     *  2,''
     *  3.全是' '
     *  <br/>
     *
     * @param str {string} 被检测的字符
     * @return {boolean} 是否是空白
     */
    static isBlank(str) {

        if (this.isEmpty(str)) {
            return true;
        }

        for (let i = 0; i < str.length; i++) {
            //有一个不为' '
            if (!(this.BlankStr=== str[i])) {
                return false;
            }
        }
        return true;
    }

    /**
     * @author ycx
     *  判断字符串是否不为空白
     *  参考 isBank
     * @param str {string} 被检测字符串
     * @return {boolean} 是否不为空白
     */
    static isNotBlank(str) {
        return !this.isBlank(str);
    }


    /**
     * 判断是否包含空白字符
     * @param strs {string} 字符串列表
     * @return {boolean}
     */
    static hasBlank(...strs) {
        if (arrayUtil.isEmpty(strs)) {
            return true;
        }

        for (let str of strs) {
            if (this.isBlank(str)) {
                return true;
            }

        }

        return false;
    }

    /**
     * 判断给定字符串是否空白
     * @param strs {string} 被检测字符列表
     */
    static isAllBlank(...strs) {
        if (arrayUtil.isEmpty(strs)) {
            return true;
        }

        for (let str of strs) {
            if (this.isNotBlank(str)) {
                return false;
            }
        }
        return true;
    }

    /**
     * @author:ycx
     * 字符串是否为空，空的定义如下:<br>
     * 1、为null <br>
     * 2、为""<br>
     * 3. undefined <br>
     * @param str {string} 被检测的字符串
     * @return {boolean} 是否为空
     */
    static isEmpty(str) {

        return null === str || undefined === str || 0 === str.length;
    }

    /**
     * @author ycx
     * 检测字符串是否不为空</br>
     *  参考 isEmpty
     * @param str {string}被检测字符串
     * @return {boolean} 是否不为空
     */
    static isNotEmpty(str) {
        return !this.isEmpty(str);
    }

    /**
     * @author ycx
     * 判断字符串列表是否包含空字符串列表
     * @param strs {string} 被检测字符串列表
     * @return {boolean} 是否含有
     */
    static hasEmpty(...strs){
        if (arrayUtil.isEmpty(strs)) {
            return true;
        }

        for (let str of strs) {
            if (this.isEmpty(str)) {
                return true
            }
        }
        return false;
    }

    /**
     * @author ycx
     * 判断字符串列表是否全是空字符串
     * @param strs {string} 被检测字符串列表
     * @return {boolean} 是否不包含
     */
    static hasAllEmpty(...strs){
        if (arrayUtil.isEmpty(strs)) {
            return true;
        }

        for (let str of strs) {
            if (this.isNotEmpty(strs)) {
                return false
            }
        }
        return true;
    }


}

module.exports = StringUtil






