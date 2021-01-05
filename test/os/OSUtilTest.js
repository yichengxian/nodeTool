const OSUtil = require('../../core/os/OSUtil');

//获取本机hostname
console.info(OSUtil.getHostName());//yichengxian-travelmatetx50g2

//获取本地ipv4地址
console.info(OSUtil.getIPV4Address()); //192.168.4.97

//获取本地ipv6地址
console.info(OSUtil.getIPV6Address()); //fe80::407a:a6d8:1623:aa89

//获取本机平台
console.info(OSUtil.getPlatform()); //linux

//
console.info(OSUtil.getArch()); //x64

//获取总内存 单位字节
console.info(OSUtil.getTotalmem()); //12424458240

//剩余内存
console.info(OSUtil.getFreemem()); //602943488

//运行时长 单位秒
console.info(OSUtil.getUptime()); //545488

//行末标志
console.info(OSUtil.getEOL()); //

