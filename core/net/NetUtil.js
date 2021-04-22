'use strict';
const net = require('net');
const OSUtil = require('../os/OSUtil');

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


}

module.exports = NetUtil


