'use strict';
const os = require('os');

/**
 * @author ycx
 * <link>http://nodejs.cn/api/os.html#os_os_homedir<link>
 * 系统工具
 */
class OSUtil {

    /**
     * 获取hostname
     * @return {string}
     */
    static getHostName() {

        return os.hostname();
    }

    /**
     * 获取cpu信息
     *  例如我的cpu信息如下
     *   {
     *   model: 'Intel(R) Core(TM) i5-7200U CPU @ 2.50GHz',
     *   speed: 3099, 以兆赫兹为单位
     *   times: {
     *      user: 9491360, CPU 在用户模式下花费的毫秒数
     *      nice: 43660, CPU 在良好模式下花费的毫秒数
     *      sys: 2884860, CPU 在系统模式下花费的毫秒数
     *      idle: 15414210,  CPU 在空闲模式下花费的毫秒数
     *      irq: 640500 CPU 在中断请求模式下花费的毫秒数
     *      }
     *    }
     *
     * @return {CpuInfo[]}
     */
    static getCpus() {
        return os.cpus();
    }


    /**
     * 获取当前用户信息
     * 例如我的信息如下
     * {
     *  uid: 1000,
     *  gid: 1000,
     *  username: 'yichengxian',
     *  homedir: '/home/yichengxian',
     *  shell: '/bin/zsh'
     * }
     * @param options
     * @return {UserInfo<Buffer>}
     */
    static getUserInfo(options) {
        return os.userInfo(options);
    }

    /**
     * 获取操作系统版本<br/>
     *  注意不是 获取node版本
     *  @return {string}
     */
    static getVersion() {
        return os.version();
    }

    /**
     * 获取系统ipv4 地址
     * @return {string | (() => AddressInfo) | (() => (AddressInfo | {})) | (() => (AddressInfo | string | null))}
     */
    static getIPV4Address() {
        const interfaces = os.networkInterfaces();
        for (const devName in interfaces) {
            //
            //console.log(devName)
            const iface = interfaces[devName];
            //console.log(iface)
            for (let i = 0; i < iface.length; i++) {
                let alias = iface[i];
                //console.log(alias)
                if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                    return alias.address;
                }
            }
        }
        return null;
    }


    /**
     * 获取系统的ipv6地址
     * @return {string|(() => AddressInfo)|(() => (AddressInfo | {}))|(() => (AddressInfo | string | null))|null}
     */
    static getIPV6Address() {
        const interfaces = os.networkInterfaces();
        for (const devName in interfaces) {
            //
            const iface = interfaces[devName];
            for (let i = 0; i < iface.length; i++) {
                let alias = iface[i];
                //console.log(alias)
                if (alias.family === 'IPv6' && alias.address !== '::1' && !alias.internal) {
                    return alias.address;
                }
            }
        }
        return null;
    }

    /**
     * 获取当前操作系统所属平台
     * 例如： linux ，android，win32等
     * @return {NodeJS.Platform}
     */
    static getPlatform() {
        return os.platform();
    }

    /**
     * 获取当前系统架构 x86 x64 arm
     * @return {string}
     */
    static getArch() {
        return os.arch();
    }

    /**
     * 获取当前系统总内存（以字节为单位）
     * @return {number}
     */
    static getTotalmem() {
        return os.totalmem();
    }


    /**
     * 获取当前系统剩余内存 （以字节为单位）
     *
     * @return {number}
     */
    static getFreemem() {
        return os.freemem();
    }

    /**
     * 获取系统 运行时间 （以秒为单位）
     * @return {number}
     */
    static getUptime() {
        return os.uptime();
    }

    /**
     * 获取操作系统特定的行末标志 <br/>
     * 1,在 POSIX 上是 \n。
     * 2,在 Windows 上是 \r\n。
     * @return {string}
     */
    static getEOL() {
        return os.EOL;
    }
}

module.exports = OSUtil

