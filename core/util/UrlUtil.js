const StringUtil = require("../string/StringUtil");
const ObjectUtil = require("../object/ObjectUtil");
const {URL} = require('url');

/**
 * @author ycx
 * url 工具类
 */
class UrlUtil {

    /**
     * url上的查询参数转对象
     * @param url {string}
     * @return {Object}
     */
    static queryToObj(url) {

        let obj = {};

        if (ObjectUtil.isEmpty(url)){
            return obj;
        }

        const urlObj = new URL(url);

        urlObj.searchParams.forEach((value,name) =>{
            if (StringUtil.isNotBlank(value)){
                obj[name] = value;
            }
        })
        return obj;
    }
}

module.exports = UrlUtil

