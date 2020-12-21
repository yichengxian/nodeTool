const StringUtil = require("../string/StringUtil");
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
    static queryToObj(url){
        let obj = {}
        const arr = url.split('?');
        if (arr.length < 1) {
            return obj;
        }
        //第一号数组
        const pList = new URLSearchParams(arr[1])
        pList.forEach((val, key) => {
            if (StringUtil.isNotEmpty(val)) {
                obj[key] = val;
            }
        });
        return obj;
    }

}
