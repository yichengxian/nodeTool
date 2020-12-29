const Snowflake = require('../../core/lang/Snowflake');

//推特雪花算法的通用方法封装
const snowflake = new Snowflake(1n,1n,0n);
const nextId = snowflake.nextId();
console.info(nextId.toString()); //1343854509113348096
