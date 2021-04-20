var ErrorUtil = require('../../core/error/ErrorUtil');

console.error(ErrorUtil.getStack(new Error("测试")));