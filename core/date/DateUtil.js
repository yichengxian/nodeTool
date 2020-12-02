const DatePattern = require('./DatePattern');

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
        return date.getDay();
    }

    /**
     * 是否为上午
     * @param date {Date}
     * @return {boolean}
     */
    static isAM(date) {
        return date.getHours() > 12;
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
     * 格式化时间
     * @param date {Date}
     * @param formatStr {string} 例如  yyyy-MM-dd HH:mm:ss
     */
    static format(date, formatStr) {

        let o = {
            "M+": this.month(date), //月份
            "d+": date.getDate(), //日
            "H+": date.getHours(), //小时
            "m+": date.getMinutes(), //分
            "s+": date.getSeconds(), //秒
            "q+": this.quarter(date), //季度
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

    /**
     * 格式化时间为 yyyy-MM-dd HH:mm:ss
     * @param date {Date} 指定时间
     * @return {string} 格式化后的日期
     */
    static formatDateTime(date) {
        return this.format(date, DatePattern.NORM_DATETIME_PATTERN);
    }


    /**
     * 格式化时间为 yyyy-MM-dd
     * @param date {Date} 指定时间
     * @return {string} 格式化后的日期
     */
    static formatDate(date) {
        return this.format(date, DatePattern.NORM_DATE_PATTERN);

    }

    /**
     * 格式化时间为 HH:mm:ss
     * @param date {Date} 指定时间
     *
     */
    static formatTime(date) {
        return this.format(date, DatePattern.NORM_TIME_PATTERN);
    }


    /**
     *  格式化时间为 中国时间
     *  yyyy年MM月dd日HH时mm分ss秒
     * @param date {Date} 指定时间
     * @return {string} 格式化后的时间字符串
     */
    static formatChineseDateTime(date) {
       return  this.format(date, DatePattern.CHINESE_DATE_TIME_PATTERN);
    }

    /**
     * 获取指定日期当日的开始时间
     * @param date  {Date}
     * @return {Date}
     */
    static getStartDate(date) {
        return new Date(date.toLocaleDateString());
    }

    /**
     * 获取当天的开始时间
     * @return {Date}
     */
    static getToDayStartDate(){
        return this.getStartDate(new Date());
    }

}

module.exports = DateUtil


