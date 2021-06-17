module.exports = {
    "env": {
        "browser": false,
        "node":true,
        "commonjs": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 12
    },
    "rules": {
        "no-var":0,//禁用var，用let和const代替
        "camelcase": 2,//强制驼峰法命名
        "complexity": [0, 11],//循环复杂度
        "strict": 2,
        "use-isnan": 2,//禁止比较时使用NaN，只能用isNaN()
        "no-undef-init": 2,//变量初始化时不能直接给它赋值为undefined
        "no-lone-blocks": 2,//禁止不必要的嵌套块
        "no-extra-boolean-cast": 2,//禁止不必要的bool转换
        "no-extra-parens": 2,//禁止非必要的括号
        "no-extra-semi": 2,//禁止多余的冒号
        "no-fallthrough": 1,//禁止switch穿透
        "no-floating-decimal": 2,//禁止省略浮点数中的0 .5 3.
    }
};
