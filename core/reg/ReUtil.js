const StringUtil = require("../string/StringUtil");

/**
 * @author yichengxian
 * @description
 */
class ReUtil {

    /**
     * 中文正則
     * @type {string}
     */
    static  RE_CHINESE = "[\u4E00-\u9FFF]";

    /**
     *  內容是否匹配
     * @param reg{RegExp}
     * @param content {string}
     */
    static test(reg, content) {
        if (null === reg || !reg instanceof RegExp || StringUtil.isEmpty(content)) {
            return false;
        }
        return reg.test(content);
    }
}

module.exports = ReUtil;