'use strict';

/**
 * @author ycx
 * @description base64
 */
class Base64 {

    /**
     * 字符串转base64
     * @param str {string} 字符串
     * @return {string}
     */
    static encodeStr(str){
       return  Buffer.from(str).toString('base64');
    }

    /**
     *  base64字符串解码
     * @param base64Str {string}
     * @return {string}
     */
    static decodeStr(base64Str){

        return new Buffer(base64Str, 'base64').toString();
    }


}

module.exports = Base64
