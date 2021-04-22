'use strict';
//并不是所有操作系统都可执行加密 所以在require 当中会产生异常
const crypto = require('crypto');

/**
 * @author ycx
 * 相关阅读：<link>https://juejin.cn/post/6844903993647300615<link>
 * md5 工具类
 */
class Md5Util {

    /**
     *  创建32位 md5
     * @param value {BinaryLike}
     * @return {string} 32位字符 的md5数值
     */
    static createMd5(value) {
        return crypto.createHash('md5').update(value).digest('hex');
    }


}

module.exports = Md5Util;

