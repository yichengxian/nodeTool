/**
 * @author ycx
 * @description 网络工具类
 */
class NetUtil {

    /**
     * IP与掩码的分割符
     * @type {string}
     */
    static #IP_MASK_SPLIT_MARK = '/';

    /**
     * 格式化ip段
     * @param ip {string} ip 地址
     * @param mask {string} 掩码
     * @return {string} 返回xxx.xxx.xxx.xxx/mask的格式
     */
    static formatIpBlock(ip, mask) {
        return ip + this.#IP_MASK_SPLIT_MARK + mask;
    }

    /**
     *  根据数字值获取ip v4地址：xx.xx.xx.xx
     * @param numIp {number}
     * @return {string} 返回xxx.xxx.xxx.xxx格式ip地址
     */
    static numToIpv4(numIp) {
        let ip1 = (numIp >>> 24) >>> 0;
        let ip2 = ((numIp << 8) >>> 24) >>> 0;
        let ip3 = (numIp << 16) >>> 24;
        let ip4 = (numIp << 24) >>> 24;

        return ip1 + '.' + ip2 + '.' + ip3 + '.' + ip4;
    }

    /**
     * 根据ipv4 地址转换为数字类型
     * @param ipv4Str {string}
     * @return {number}
     */
    static ipv4ToNum(ipv4Str) {
        let num = 0;
        //数组
        ipv4Str = ipv4Str.split('.');
        num = Number(ipv4Str[0]) * 256 * 256 * 256 + Number(ipv4Str[1]) * 256 * 256 + Number(ipv4Str[2]) * 256 + Number(ipv4Str[3]);
        num = num >>> 0;
        return num;


    }


}

module.exports = NetUtil
