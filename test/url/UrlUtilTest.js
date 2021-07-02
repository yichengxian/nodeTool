const UrlUtil = require('../../core/url/UrlUtil');

//把url上的查询参数转化为对象
console.log(UrlUtil.queryToObj('http://www.aa.com/my?key=value'));//{ key: 'value' }
