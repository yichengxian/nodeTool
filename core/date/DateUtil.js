/**
 * date工具类
 */
class DateUtil {

    /**
     * 获取当前时间
     * @return {Date} 当前时间对象
     */
    static date() {
        return new Date();
    }

    /**
     * 获取当前秒数
     * @return {number}
     */
    static dateSecond() {
        return this.date().now() / 1000;
    }

    /**
     * 获取data的年
     * @param date {Date} 时间
     * @return {number} 4位/年
     */
    static year(date) {
        return date.getFullYear()
    }

    /**
     * 获得指定日期所属季度，从1开始计数
     * @param date {Date} 时间
     * @return {number} 季度
     */
    static quarter(date) {
        return this.month(date) / 3 + 1;
    }

    /**
     * 获取指定日期的月份
     * @param date {Date} 时间
     * @return {number} 第几月
     */
    static month(date) {
        return date.getMonth() + 1;
    }

    /**
     * 获取日期在当年的第几天
     * @param date {Date}
     * @return {number}
     */
    static dayOfYear(date) {
        return Math.ceil((this.date() - new Date(this.year(date).toString())) / (24 * 60 * 60 * 1000)) + 1;
    }

    /**
     * 获取日期为星期几 0 为周日 1为周一
     * @param date {Date}
     * @return {number}
     */
    static dayOfWeek(date) {
        return date.getDay()
    }

    /**
     * 是否为上午
     * @param date {Date}
     * @return {boolean}
     */
    static isAM(date) {
        return date.getHours() > 12
    }

    /**
     * 是否为下午
     * @param date {Date}
     * @return {boolean}
     */
    static isPM(date) {
        return !this.isAM(date);
    }


    /**
     *
     * @param date {Date}
     * @param formatStr {string} 例如  yyyy-MM-dd HH:mm:ss
     */
    static format(date, formatStr) {

        let o = {
            "M+": date.getMonth() + 1, //月份
            "d+": date.getDate(), //日
            "H+": date.getHours(), //小时
            "m+": date.getMinutes(), //分
            "s+": date.getSeconds(), //秒
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度
            "S": date.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(formatStr)) {
            formatStr = formatStr.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (let k in o) {
            if (new RegExp("(" + k + ")").test(formatStr)) {
                formatStr = formatStr.replace(RegExp.$1, (1 === RegExp.$1.length) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
        }
        return formatStr;
    }

}

module.exports = DateUtil

console.log(DateUtil.format(new Date(),'yyyy-MM-dd HH:mm:ss'))
