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
    #TEL = new RegExp("0\\d{2,3}-[1-9]\\d{6,7}");

    /**
     * 是否手机号
     * @param phoneNum
     * @return {boolean}
     */
    isMobile(phoneNum){
        return false
    }

}