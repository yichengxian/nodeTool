'use strict';

const ArrayUtil = require("../array/ArrayUtil");
const NetUtil = require("../net/NetUtil");
/**
 *
 *
 * 使用举例:https://gitee.com/yichengxian/testing-express/blob/main/testing-common/util/ClientUtil.js
 * @author ycx
 * @description 请求工具类
 */
class RequestUtil {

    /**
     *
     * 获取客户端ip
     *
     * @param request {Request} request对象
     * @param otherHeaderNames {string} 另外的header数组 可选
     * @return {string} 客户端IP
     */
    static getClientIp(request,...otherHeaderNames){
        //常见的ip头
        const headers = [
            "X-Forwarded-For",
            "X-Real-IP",
            "Proxy-Client-IP",
            "WL-Proxy-Client-IP",
            "HTTP_CLIENT_IP",
            "HTTP_X_FORWARDED_FOR"
        ];
        if (ArrayUtil.isNotEmpty(otherHeaderNames)){
            otherHeaderNames.forEach(value => headers.push(value))
        }
        return this.getClientIpByHeaders(request,headers);
    }


    /**
     * 获取客户端IP
     * @param request {Request} 请求头
     * @param otherHeaderNames {string} 其他header数组
     * @return {string} 客户端IP
     */
    static getClientIpByHeaders(request,...otherHeaderNames){
        //
        let ip;
        //循环遍历获取头
        for (let otherHeaderName of otherHeaderNames) {
            if (!NetUtil.isUnknown(ip = request.headers[otherHeaderName])) {
                ip = NetUtil.getMultistageReverseProxyIp(ip);
                return ip;
            }
        }

        // return req.headers['x-forwarded-for'] || // 判断是否有反向代理 IP
        //         req.connection.remoteAddress || // 判断 connection 的远程 IP
        //         req.socket.remoteAddress || // 判断后端的 socket 的 IP
        //         req.connection.socket.remoteAddress;
        ip = request.ip
            || request._remoteAddress
            ||  request.socket.remoteAddress || request.connection.socket.remoteAddress
            || request.connection && request.connection.remoteAddress;

        return NetUtil.getMultistageReverseProxyIp(ip);
    }
}
module.exports = RequestUtil;
