
const PatternPooL = require('../lang/PatternPool');

/**
 * @author ycx
 * 手机号工具类
 */
class PhoneUtil {
    /**
     * 座机号码正则
     * @type {*}
     */
     static #TEL = new RegExp("0\\d{2,3}-[1-9]\\d{6,7}");

    /**
     * 是否手机号(中国)
     * @param value 值
     * @return {boolean}
     */
    static isMobile(value) {
        return PatternPooL.MOBILE.test(phoneNum)
    }

    /**
     * 是否是座机号码(中国)
     * @param value
     */
    static isTel(value) {
        return this.#TEL.test(value);
    }

    /**
     * 是否是座机号码或手机号码 （中国）
     * @param value
     * @return {boolean}
     */
    static isPhone(value) {
        return this.isTel(value) || this.isMobile(value);
    }




}

module.exports = PatternPooL
