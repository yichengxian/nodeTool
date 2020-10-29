/**
 * date 格式化
 */
class DatePattern{
    /**
     * 标准日期时间正则，每个字段支持单个数字或2个数字，包括：
     *     yyyy-MM-dd HH:mm:ss.SSS
     *     yyyy-MM-dd HH:mm:ss
     *     yyyy-MM-dd HH:mm
     *     yyyy-MM-dd
     * @type {RegExp}
     */
    static REGEX_NORM =new RegExp('\\d{4}-\\d{1,2}-\\d{1,2}(\\s\\d{1,2}:\\d{1,2}(:\\d{1,2})?)?(.\\d{1,3})?').compile();

    /**
     * 标准日期格式：yyyy-MM-dd
     * @type {string}
     */
    static NORM_DATE_PATTERN ='yyyy-MM-dd';

    /**
     * 标准时间格式：HH:mm:ss
     */
    static NORM_TIME_PATTERN ='HH:mm:ss';

    /**
     * 标准日期时间格式，精确到分：yyyy-MM-dd HH:mm
     */
    static NORM_DATETIME_MINUTE_PATTERN ='yyyy-MM-dd HH:mm';

    /**
     * 标准日期时间格式，精确到秒：yyyy-MM-dd HH:mm:ss
     * @type {string}
     */
    static NORM_DATETIME_PATTERN ='yyyy-MM-dd HH:mm:ss';


}
