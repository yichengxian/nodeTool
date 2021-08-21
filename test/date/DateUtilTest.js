const DateUtil = require('../../core/date/DateUtil');

//获取当前时间
console.info(DateUtil.nowDate()); //2020-12-26T08:30:50.534Z

// 获取当前秒数
console.info(DateUtil.nowDateSecond()); //1608972008

//获取指定日期对象的秒数
console.info(DateUtil.dateSecond(new Date())); //1608972008

//获取日期年份
console.info(DateUtil.year(new Date()));//2020

//获取季度
console.info(DateUtil.quarter(new Date())); //4

//获取月份
console.info(DateUtil.month(new Date()));//12

//获取日期在当年的第几天
console.info(DateUtil.dayOfYear(new Date())); //362

//获取日期为星期几 0 为周日 1为周一
console.info(DateUtil.dayOfWeek(new Date()));//6

//是否为上午
console.info(DateUtil.isAM(new Date())); //false

//是否为下午
console.info(DateUtil.isPM(new Date())); //true

//格式化日期对象
console.info(DateUtil.format(new Date(),'yyyy-MM-dd HH:mm:ss')); //2020-12-26 16:53:16

//格式化时间为 yyyy-MM-dd HH:mm:ss
console.info(DateUtil.formatDateTime(new Date())); //2020-12-26 16:54:18

//格式化时间为 yyyy-MM-dd
console.info(DateUtil.formatDate(new Date()));  //2020-12-26

//格式化时间为 HH:mm:ss
console.info(DateUtil.formatTime(new Date())); //16:55:20

//格式化时间为中国时间 2020年12月26日16时56分12秒
console.info(DateUtil.formatChineseDateTime(new Date()));//2020年12月26日16时56分12秒

//获取开始时间 是个date 对象
console.info(DateUtil.getStartDate(new Date())); //2020-12-25T16:00:00.000Z

//获取当日开始时间
console.info(DateUtil.getToDayStartDate()); //2020-12-25T16:00:00.000Z

//获取结束时间
console.info(DateUtil.getEndDate(new Date()));//2020-12-26T15:59:59.999Z

//获取当日结束时间
console.info(DateUtil.getToDayEndDate()); //2020-12-26T15:59:59.999Z

//解析日期
console.info(DateUtil.parse("19981216",'yyyyMMdd')); //1998-12-15T16:00:00.000Z
//
console.info(DateUtil.isWeekday(new Date()));//
