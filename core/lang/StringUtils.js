/**
 * @author
 * @description: string 工具类
 * @type {StringUtils}
 * @todo
 */
StringUtils = /** @class */ (function () {
    function StringUtils() {

    }

    /**
     * @author
     * 字符串是否为空白 空白的定义如下： <br/>
     * 1、为null <br/>
     * 2、""<br/>
     * 3. length ===0 <br/>
     * @param str 被检测的字符串
     * @return boolean 是否为空
     */
    StringUtils.isBank = function (str) {
        return null === str || undefined === str || str.length === 0 || '' === str;
    };
    /**
     * @author
     * 判断字符串是否不为空白
     * <code>isBank</code>
     * @param str 被检测的字符串
     * @return boolean 是否不为空
     */
    StringUtils.isNotBank = function (str) {
        return !this.isBank(str);
    };
    /**
     * @author
     * 检测字符串中是否包含空白
     * e.g : null or ''
     * @param str
     * @return boolean 是否包含空值
     */
    StringUtils.hasBank = function (str) {
        if (null === str) {
            return true;
        }
        for (let i = 0; i < str.length; i++) {
            if (this.isBank(str[i])) {
                return true;
            }
        }
        return false;
    };

    /**
     * @author:
     * 字符串是否为空，空的定义如下:<br>
     * 1、为null <br>
     * 2、为""<br>
     * 3. undefined <br>
     * @param str 被检测的字符串
     * @return boolean 是否为空
     */
    StringUtils.isEmpty = function (str) {

        return null === str || undefined === str || 0 === str.length;
    }

    /**
     * @author:
     * 检测字符串是否不为空<br>
     * @param str 被检测字符串
     * @returns {boolean} 是否不为空
     */
    StringUtils.isNotEmpty = function (str) {

        return !this.isEmpty(str);
    }


    /**
     * 查找指定字符串是否包含指定字符串列表中的任意一个字符串
     * @param str 指定字符串
     * @param searchStr 需要检查的字符串数组
     * @return {boolean}  是否包含
     */
    StringUtils.contains = function (str, searchStr) {

        if (-1 !== str.toString().indexOf(searchStr)) {
            return true;
        }

        return false;
    }


    return StringUtils;
}());

