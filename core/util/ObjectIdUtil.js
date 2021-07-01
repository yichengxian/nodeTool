'use strict';
const StringUtil = require('../string/StringUtil');

/**
 * @author ycx
 * @description objectId 的工具类
 */
class ObjectIdUtil {

    /**
     * 是否是 objectId
     * @param objectId {string}
     * @return {boolean}
     */
    static isValid(objectId) {
        if (StringUtil.isEmpty(objectId)) {
            return false;
        }
        objectId = objectId.replace(/-/g, '');
        if (24 !== objectId.length) {
            return false;
        }
        for (let i = 0; i < objectId.length; i++) {
            const c = objectId.charAt(i);
            if ((c < '0' || c > '9') && (c < 'a' || c > 'f') && (c < 'A' || c > 'F')) {
                return false;
            }
        }
        return true;
    }
}

module.exports = ObjectIdUtil

