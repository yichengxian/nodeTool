'use strict';
const DatePattern = require('./DatePattern');

/**
 * date工具类
 */
class DateUtil {

    /**
     * 获取当前时间
     * @return {Date} 当前时间对象
     */
    static nowDate() {
        return new Date();
    }

    /**
     * 获取当前秒数
     * @return {number}
     */
    static nowDateSecond() {
        return this.dateSecond(this.nowDate());
    }

    /**
     * 获取日期秒数
     * @param date {Date}
     * @return {number}
     */
    static dateSecond(date) {
        return Math.floor(date.getTime() / 1000);
    }

    /**
     * 获取data的年
     * @param date {Date} 时间
     * @return {number} 4位/年
     */
    static year(date) {
        return date.getFullYear();
    }

    /**
     * 获得指定日期所属季度，从1开始计数 <br/>
     * 注：这里是每个月为一个季度
     * @param date {Date} 时间
     * @return {number} 季度
     */
    static quarter(date) {
        return Math.floor(date.getMonth() / 3+1);
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
        //一天 = 86400000ms =24 * 60 * 60 * 100

        return Math.ceil((this.nowDate()- new Date(this.year(date).toString())) /86400000 ) + 1;
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

        return date.getHours() < 12;
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
     * @return {string}
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
     * @return {string}
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
        return this.format(date, DatePattern.CHINESE_DATE_TIME_PATTERN);
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
    static getToDayStartDate() {
        return this.getStartDate(new Date());
    }

    /**
     *  获取某一天的结束时间
     * @param date {Date} 指定时间
     * @return {Date}
     */
    static getEndDate(date) {
        //一天少一毫秒 = 24 * 60 * 60 * 1000 - 1  = 86399999
        return new Date(this.getStartDate(date).getTime()+86399999);
    }

    /**
     * 获取当天的结束时间
     * @return {Date}
     */
    static getToDayEndDate() {
        return this.getEndDate(new Date());
    }

    /**
     * 日期解析
     * <link>https://www.cnblogs.com/liuxianan/p/js-date-format-parse.html</link>
     * @param dateStr {string}
     * @param format {string} 例如'yyyy-MM-dd'
     * @return {Date|null}
     */
    static parse(dateStr,format){
        format = format || DatePattern.NORM_DATE_PATTERN;
        const obj = {y: 0, M: 1, d: 0, H: 0, h: 0, m: 0, s: 0, S: 0};
        format.replace(/([^yMdHmsS]*?)(([yMdHmsS])\3*)([^yMdHmsS]*?)/g, function(m, $1, $2, $3, $4, idx, old)
        {
            dateStr = dateStr.replace(new RegExp($1+'(\\d{'+$2.length+'})'+$4), function(_m, _$1)
            {
                obj[$3] = parseInt(_$1);
                return null;
            });
            return null;
        });
        obj.M--; // 月份是从0开始的，所以要减去1
        const date = new Date(obj.y, obj.M, obj.d, obj.H, obj.m, obj.s);
        if(obj.S !== 0){
            date.setMilliseconds(obj.S); // 如果设置了毫秒
        }
        return date;
    }

}

module.exports = DateUtil


