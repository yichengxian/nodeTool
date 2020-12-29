const NetUtil = require('../../core/net/NetUtil');

//判断端口是否有效 1 -65535
console.info(NetUtil.isValidPort(65536)); //false

//检测端口是否可用 async
NetUtil.isUsableLocalPort(80).then(res =>console.info(res)); //false

//获取当前ipv4 ip
console.log(NetUtil.getIPV4Address()); //192.168.4.97

// 获取ipv6地址
console.info(NetUtil.getIPV6Address()) ;//fe80::407a:a6d8:1623:aa89
