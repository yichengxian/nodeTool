/**
 * @author ycx
 * @description map工具类
 */
class MapUtil {

    /**
     *  判断map集合是否为空
     * @param map {Map}
     * @return {boolean}
     */
    static isEmpty(map) {
        return !(typeof map) || 0 === map.size;
    }

    /**
     * 判断map集合不为空
     * @param map
     */
    static isNotEmpty(map) {
        return !this.isEmpty(map);
    }


}

module.exports = MapUtil;



