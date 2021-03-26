const StringFormatUtil = require('../string/StringFormatUtil');
/**
 * @author yichengxian
 * 异常
 */
class ErrorUtil {


    /**
     * 获取错误信息
     * @param error {Error}
     */
    static getMsg(error){
      if (null === error){
          return '';
      }
       return StringFormatUtil.format('{}:{}',error.name,error.message);
    }

    /**
     * 获取堆栈信息
     * @param error {Error}
     */
    static getStack(error){
        if (null === error){
            return '';
        }
        return StringFormatUtil.format('{}',error.stack);
    }


}
module.exports = ErrorUtil
