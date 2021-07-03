# nodeTool

[github](https://github.com/yichengxian/nodeTool)  [gitee](https://gitee.com/yichengxian/nodeTool)

nodejs常用或常见工具类集合体，由于npm已经存在nodeTool的包，所以发布以y-node-tool包名命名

## 介绍
 	在使用node开发中会遇到各种需要封装，在这些常用/常见的方法进行封装成工具类，提供参考;
~~均采用原生js手撸(996当中摸鱼)~~

:cold_sweat: 比如，我们在判断一个字符串是否为空值的时候

- 我们需要判断字符是是否未定义undefined

- 是否是null值

- 是否是空字符串等

  ```javascript
  let str=null;
  if(undefined === str || null === str || '' === str){
  	console.log('str is empty !');
  }
  ```

:yum: 当我们使用封装的方法后

```javascript
const {StringUtil} = require('nodeTool');

let str = null ;
if(StringUtil.isEmpty(str)){
   console.log('str is empty !');
}
```



## 工具类实现列表

- StringUtil 字符串工具
- MapUtil] map工具
- BufferUtil buffer工具
- DateUtil 日期工具
- UUID UUID 
- Snowflake 推特雪花算法
- ObjectUtil 对象工具
- ArrayUtil array工具
- PageUtil] 分页工具
- RandomUtil 随机工具
- PhoneUtil 手机号工具
- RandomWeightUtil 随机权重工具
- BufferUtil buffer工具
- NetUtil 网络工具
- IPV4Util ipv4工具
- OSUtil] 系统操作工具(~~好像并不需要怎么封装呀~~)
- ReUtil 正则工具(~~莫名发现好像js的正不是全匹配的不知道是不是姿势不太对~~)
- StringFormatUtil 字符串格式化工具 (~~就是感觉没有就写一个~~)
- ErrorUtil 错误工具
- Base64 base64




## API文档 
 一些方法的实现列表，使用jsdoc生成

[Github Pages](https://yichengxian.github.io/nodeTool-doc/index.html)

## 为什么用原生JS不用TS
本人太懒，JS已经够好了

## 如何使用
当然这里提供两种方案 ：

-  查看源码并且cv(~~cv大法，哈哈哈,没什么值得的~~)

- 获取已经向npm发布的版本 ：

  ```shell
  npm install y-node-tool
  ```

  ```javascript
  const {StringUtil} = require('y-node-tool');
  ```

  

## 用例

所有用例在源码 test 目录下可以找到



## 其他

这些封装，实现的方式可能不是最好的，或者说，可能还有什么bug，如果可以，欢迎用nodeJS作为服务端的你进行指正或者提交一些非常nice的code给我(~~注意不要引用第三方库提交哦，只做小小的封装就好啦~~)
