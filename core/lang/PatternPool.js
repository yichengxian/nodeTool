/**
 * @author:ycx
 *
 * todo
 * @description: 正则池
 */
class PatternPooL {


    /**
     * 英文字母 、数字和下划线
     * @type {RegExp}
     */
    GENERAL = new RegExp("^\\w+$");

    /**
     * 数字
     * @type {RegExp}
     */
    NUMBERS = new RegExp("\\d+");

    /**
     * 字母
     * @type {RegExp}
     */
    WORD = new RegExp("[a-zA-Z]+");

    /**
     * 单个汉字
     * @type {RegExp}
     */
    CHINESE = new RegExp("[\u4E00-\u9FFF]");

    /**
     * 多个汉字
     * @type {RegExp}
     */
    CHINESES = new RegExp("[\u4E00-\u9FFF]+");


    /**
     * 分组
     * @type {RegExp}
     */
    GROUP_VAR = new RegExp("\\$(\\d+)");

    /**
     * ip v4
     * @type {RegExp}
     */
    IPV4 = new RegExp("\\b((?!\\d\\d\\d)\\d+|1\\d\\d|2[0-4]\\d|25[0-5])\\.((?!\\d\\d\\d)\\d+|1\\d\\d|2[0-4]\\d|25[0-5])\\.((?!\\d\\d\\d)\\d+|1\\d\\d|2[0-4]\\d|25[0-5])\\.((?!\\d\\d\\d)\\d+|1\\d\\d|2[0-4]\\d|25[0-5])\\b")

    /**
     * ip v6
     * @type {RegExp}
     */
    IPV6 = new RegExp("(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]+|::(ffff(:0{1,4})?:)?((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\\.){3}(25[0-5]|(2[0-4]|1?[0-9])?[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1?[0-9])?[0-9])\\.){3}(25[0-5]|(2[0-4]|1?[0-9])?[0-9]))");

    /**
     * 货币
     * @type {RegExp}
     */
    MONEY = new RegExp("^(\\d+(?:\\.\\d+)?)$");

    /**
     *  符合RFC 5322规范 邮箱地址
     *  正则来自：http://emailregex.com/
     * @type {RegExp}
     */
    EMAIL = new RegExp("(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|\"(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21\\x23-\\x5b\\x5d-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])*\")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\\x01-\\x08\\x0b\\x0c\\x0e-\\x1f\\x21-\\x5a\\x53-\\x7f]|\\\\[\\x01-\\x09\\x0b\\x0c\\x0e-\\x7f])+)])", Pattern.CASE_INSENSITIVE);

    /**
     * 移动电话
     * @type {RegExp}
     */
    MOBILE = new RegExp("(?:0|86|\\+86)?1[3-9]\\d{9}");

    /**
     * 18位身份证
     * @type {RegExp}
     */
    CITIZEN_ID = new RegExp("[1-9]\\d{5}[1-2]\\d{3}((0\\d)|(1[0-2]))(([012]\\d)|3[0-1])\\d{3}(\\d|X|x)");

    /**
     * 邮编
     * @type {RegExp}
     */
    ZIP_CODE = new RegExp("[1-9]\\d{5}(?!\\d)");

    /**
     * 生日
     * @type {RegExp}
     */
    BIRTHDAY = new RegExp("^(\\d{2,4})([/\\-.年]?)(\\d{1,2})([/\\-.月]?)(\\d{1,2})日?$");

    /**
     * URl
     * @type {RegExp}
     */
    URL = new RegExp("[a-zA-z]+://[^\\s]*");

    /**
     * http url
     * @type {RegExp}
     */
    URL_HTTP = new RegExp("(https://|http://)?([\\w-]+\\.)+[\\w-]+(:\\d+)*(/[\\w- ./?%&=]*)?");

    /**
     * 中文字、英文字母、数字和下划线
     * @type {RegExp}
     */
    GENERAL_WITH_CHINESE = new RegExp("^[\u4E00-\u9FFF\\w]+$");

    /**
     * 中国车牌号码（兼容新能源车牌）
     * @type {RegExp}
     */
    PLATE_NUMBER = new RegExp("^(([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z](([0-9]{5}[ABCDEFGHJK])|([ABCDEFGHJK]([A-HJ-NP-Z0-9])[0-9]{4})))|" +
        "([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领]\\d{3}\\d{1,3}[领])|" +
        "([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领]))$");

    /**
     * 社会统一信用代码
     * <pre>
     * 第一部分：登记管理部门代码1位 (数字或大写英文字母)
     * 第二部分：机构类别代码1位 (数字或大写英文字母)
     * 第三部分：登记管理机关行政区划码6位 (数字)
     * 第四部分：主体标识码（组织机构代码）9位 (数字或大写英文字母)
     * 第五部分：校验码1位 (数字或大写英文字母)
     * </pre>
     * @type {RegExp}
     */
    CREDIT_CODE = new RegExp("^[0-9A-HJ-NPQRTUWXY]{2}\\d{6}[0-9A-HJ-NPQRTUWXY]{10}$");


    /**
     * 时间正则
     * @type {*}
     */
    TIME = new RegExp("\\d{1,2}:\\d{1,2}(:\\d{1,2})?");

    /**
     * 16进制
     * @type {*}
     */
    HEX = new RegExp("^[a-f0-9]+$","i");

    /**
     * MAC地址
     * @type {*}
     */
    MAC_ADDRESS = new RegExp("((?:[A-F0-9]{1,2}[:-]){5}[A-F0-9]{1,2})|(?:0x)(\\d{12})(?:.+ETHER)","i");

    /**
     * uuid
     * @type {*}
     */
    UUID = new RegExp("^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$","i");

    /**
     * 不带下划线的uuid
     * @type {*}
     */
    UUID_SIMPLE = new RegExp( "^[0-9a-f]{32}$","i");

    



}

module.exports = PatternPooL

