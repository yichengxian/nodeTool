'use strict';
const ArrayUtil = require('../array/ArrayUtil');
const StringUtil = require('../string/StringUtil');
/**
 * @author ycx
 * 字符串格式化工具
 */
class StringFormatUtil {


    /**
     *  主要针对 {} 替换
     * @param strPatten {String}
     * @param optionalParams {any} 可选参数
     * @return {string} 返回格式化后的字符串
     */
    static format(strPatten,...optionalParams){
        //
        if (StringUtil.isEmpty(strPatten) ||ArrayUtil.isEmpty(optionalParams)) {
            return strPatten;
        }
        optionalParams.forEach(value => strPatten = strPatten.replace('{}',value ));
        return strPatten;
    }
}
module.exports = StringFormatUtil;
