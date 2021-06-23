'use strict';
const net = require('net');
const OSUtil = require('../os/OSUtil');
const StringUtil = require("../string/StringUtil");

/**
 * @author ycx
 * @description 网络工具类
 */
class NetUtil {


    /**
     *  有效最大端口号 65535
     * @type {number}
     */
    static #PORT_RANGE_MAX = 0xFFFF;


    /**
     * 判断是否有效端口 这里是0 -65535
     * 注:有些端口是1024-65535
     * @param port {number} 端口号
     * @return {boolean} 是否有效
     */
    static isValidPort(port) {
        return port > 0 && port <= this.#PORT_RANGE_MAX;
    }

    /**
     * 检测本地端口是否可用
     * @param port {number} 端口号
     * @return Promise({boolean})
     */
    static async isUsableLocalPort(port) {

        //获取回调
        return new Promise(resolve => {
            //检测是否合法端口
            if (!this.isValidPort(port)) {
                resolve(false);
                return;
            }
            let server = net.createServer().listen(port);
            server.on('listening', () => {
                //关闭服务
                server.close();
                resolve(true);
            });
            server.on('error', (err) => {

                // 'EACCES' 权限被拒绝
                // 'EADDRINUSE‘ 端口被占用
                resolve(false);
            });

        });
    }

    /**
     * 获取本机ipv4地址
     * @return {string | (() => AddressInfo) | (() => (AddressInfo | {})) | (() => (AddressInfo | string | null))}
     */
    static getIPV4Address() {
        return OSUtil.getIPV4Address();
    }

    /**
     *  获取本机ipv6地址
     * @return {string | (() => AddressInfo) | (() => (AddressInfo | {})) | (() => (AddressInfo | string | null))}
     */
    static getIPV6Address() {
        return OSUtil.getIPV6Address();
    }

    /**
     * 从多级反向代理中获得第一个非unknown IP地址
     * @param ip {string} 获得的IP地址
     * @return {string} 第一个非unknown IP地址
     */
    static getMultistageReverseProxyIp(ip){
        if (StringUtil.isNotEmpty(ip) &&  ip.indexOf(",") > 0){
            const ips = ip.trim().split(',');

            for (let subIp of ips) {
                if (false === this.isUnknown(subIp)){
                    ip = subIp;
                    break;
                }
            }
        }
        return ip;
    }

    /**
     * 检测给定字符串是否为未知
     * @param checkString {string}
     * @return {boolean}
     */
    static isUnknown(checkString){
        return StringUtil.isBlank(checkString) || 'unknown' === checkString.toLowerCase();
    }


    /**
     * 是不是ip地址
     * @param ipStr {string}
     * @return {number}
     */
    static isIp(ipStr){
        return net.isIP(ipStr);
    }

    /**
     * 是不是ipv4地址
     * @param ipStr
     * @return {boolean}
     */
    static isIpv4(ipStr){
        return net.isIPv4(ipStr);
    }

    /**
     * 是不是ipv6地址
     * @param ipStr
     * @return {boolean}
     */
    static  isIpv6(ipStr){
        return net.isIPv6(ipStr);
    }

}

module.exports = NetUtil


