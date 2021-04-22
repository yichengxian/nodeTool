'use strict';
const StringFormatUtil = require('../string/StringFormatUtil');
/**
 * @author yichengxian
 * 异常
 */
class ErrorUtil {


    /**
     * 获取错误信息
     * @param error {Error}
     * @return {string}
     */
    static getMsg(error){
      if (null === error){
          return '';
      }
       return StringFormatUtil.format('\x1B[31m{}:{}',error.name,error.message);
    }

    /**
     * 获取堆栈信息
     * @param error {Error}
     * @return {string}
     */
    static getStack(error){
        if (null === error){
            return '';
        }
        return StringFormatUtil.format('\x1B[31m{}',error.stack);
    }


}
module.exports = ErrorUtil;
