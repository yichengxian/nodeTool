const NetUtil = require('../../core/net/NetUtil');

//判断端口是否有效 1 -65535
console.info(NetUtil.isValidPort(65536)); //false

//检测端口是否可用 async
NetUtil.isUsableLocalPort(801).then(res =>console.info("这个检测端口是否可用:%s",res)); //false

//获取当前ipv4 ip
console.log(NetUtil.getIPV4Address()); //192.168.4.97

// 获取ipv6地址
console.info(NetUtil.getIPV6Address()) ;//fe80::407a:a6d8:1623:aa89

//檢測字符串是不是UNKNOWN
console.info(NetUtil.isUnknown('UNKNOWN'));//true

//从多级反向代理中获得第一个非unknown IP地址
console.info(NetUtil.getMultistageReverseProxyIp('192.6.12.3,2324.12,31')); //192.6.12.3

/*
console.log(`此进程的 pid 是 ${process.pid}`);
console.log(`父进程的 pid 是 ${process.ppid}`);*/
