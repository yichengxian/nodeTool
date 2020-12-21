
const PatternPooL = require('../lang/PatternPool');

/**
 * @author ycx
 * 手机号工具类
 */
class PhoneUtil {
    /**
     * 座机号码正则
     * @type {RegExp}
     */
     static #TEL = new RegExp("0\\d{2,3}-[1-9]\\d{6,7}").compile();

    /**
     * 是否手机号(中国)
     * @param value {string} 被检测内容
     * @return {boolean}
     */
    static isMobile(value) {
        return PatternPooL.MOBILE.test(value)
    }

    /**
     * 是否是座机号码(中国)
     * @param value {string} 被检测内容
     */
    static isTel(value) {
        return this.#TEL.test(value);
    }

    /**
     * 是否是座机号码或手机号码 （中国）
     * @param value {string} 被检测内容
     * @return {boolean}
     */
    static isPhone(value) {
        return this.isTel(value) || this.isMobile(value);
    }




}

module.exports = PhoneUtil

