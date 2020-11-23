const net = require('net');
const os = require('os');
/**
 * @author ycx
 * @description 网络工具类
 */
class NetUtil {


    /**
     *  有效最大端口号
     * @type {number}
     */
    static #PORT_RANGE_MAX = 0xFFFF;


    /**
     * 判断是否有效端口
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
        //检测是否合法端口
        if (!this.isValidPort(port)) {
            return false;
        }
        let server = net.createServer().listen(port);

        //获取回调
        return new Promise(resolve => {

            server.on('listening', () => {
                //关闭服务
                server.close();

                resolve(true);
            });
            server.on('error', (err) => {
                //端口被占用
                if ('EADDRINUSE' === err.code) {
                    resolve(false);
                }
            });

        });
    }

    /**
     * 获取本机ipv4地址
     * @return {string | (() => AddressInfo) | (() => (AddressInfo | {})) | (() => (AddressInfo | string | null))}
     */
    static getIPV4Address() {
        const interfaces = os.networkInterfaces();
        for (const devName in interfaces) {
            const iface = interfaces[devName];
            for (let i = 0; i < iface.length; i++) {
                let alias = iface[i];
                if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                    return alias.address;
                }
            }
        }
    }


}

module.exports = NetUtil


