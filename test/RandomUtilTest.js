
const RandomWeightUtil = require("../random/RandomWeightUtil");

const randomWeight = new RandomWeightUtil();

randomWeight.add('张三',13)
console.log(randomWeight.next())