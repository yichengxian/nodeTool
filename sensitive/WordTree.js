const stringUtil = require('../core/string/StringUtil');
const mapUtil = require('../core/map/MapUtil');

/**
 * @author ycx
 * @description 单词树对象 关键词查找
 */
class WordTree extends Map {

    /**
     * 敏感词字符末尾标识，用于标识单词末尾字符
     * @type {Set}
     */
    endCharacterSet = new Set();

    /**
     * @author ycx
     * @description 添加单词组
     * @param words {string[]} 单词组
     * @return {void}
     */
    addWords(words) {
        if (!(words instanceof Set)) {
            words = new Set(words);
        }
        //存入
        for (let word of words) {

            this.addWord(word);
        }
    }

    /**
     * @author ycx
     * @description 添加单个单词
     * @param word {string}
     */
    addWord(word) {

        //WordTree 对象
        let parent = null;
        //WordTree
        let current = this;
        // WordTree 子节点
        let child;
        //当前字符
        let currentChar;
        //便利添加单词
        for (let i = 0; i < word.length; i++) {
            currentChar = word.charAt(i);
            //赋值子孩子
            child = current.get(currentChar);
            //
            if (stringUtil.isEmpty(child)) {
                //没有字节点，新建一个字节点在放
                child = new WordTree();
                //
                current.set(currentChar, child);

            }
            parent = current;
            current = child;
        }

        //设置结尾
        if (null !== parent) {

            this.setEnd(currentChar);
        }


    }

    /**
     * @author ycx
     * @description 是否匹配树中的词
     * @param text {string} 被检测文本
     * @return {boolean}
     */
    isMatch(text) {
        if (stringUtil.isEmpty(text)) {
            return false;
        }

        return null !== this.matchOne(text);
    }

    /**
     * @author ycx
     * @description 匹配第一个词
     * @param text {string}被检测文本
     *
     */
    matchOne(text) {
        if (stringUtil.isEmpty(text)) {
            return null;
        }
        return this.matchAllLimit(text, 1);
    }

    /**
     * @author ycx
     * @description 匹配全部
     * @param text {string} 被检测文本
     * @param limit {number} 匹配个数限制
     */
    matchAllLimit(text, limit) {
        if (stringUtil.isEmpty(text)) {
            return null;
        }
        return this.matchAll(text, limit, false, false)
    }

    /**
     * @author ycx
     * @description 匹配所有
     * @param text {string} 被检测文本
     * @param limit {number} 限制个数
     * @param isDensityMatch {boolean} 是否密集匹配
     * @param isGreedMatch {boolean}是否贪婪匹配
     */
    matchAll(text, limit, isDensityMatch, isGreedMatch) {
        console.log(this);
        if (stringUtil.isEmpty(text)) {
            return null;
        }
        // 查到的单词组
        const foundWords = [];

        let current = this;

        let currentChar;
        let str = String();
        //
        for (let i = 0; i < text.length; i++) {
            str = '';
            //
            for (let j = i; j < text.length; j++) {
                //
                currentChar = text.charAt(j);

                //拼接字符
                str = str.concat(currentChar);
                //如果是结尾 关键词成立，从此词的下一个位置开始查找
               // console.log('-===============================')
                if (current.isEnd(currentChar)) {

                    //放入找到的词组
                    foundWords.push(str);
                    //判断是否到达限制查找个数
                    if (limit > 0 && foundWords.length >= limit) {

                        return foundWords;
                    }
                    //如果非密度匹配 跳过匹配到的词
                    if (!isDensityMatch) {
                        i = j;
                    }

                    //如果非贪婪匹配。遇到第一个结尾标记就结束匹配
                    if (!isGreedMatch) {
                        break;
                    }

                }

                current = current.get(currentChar)


                //
                if (mapUtil.isEmpty(current)) {
                    break;
                }

            }
            //
            current = this;


        }

        return foundWords;
    }

    /**
     * @author ycx
     * @description 是否结尾
     * @param charStr {string} 字符
     * @return {boolean}
     */
    isEnd(charStr) {
        return this.endCharacterSet.has(charStr)
    }

    /**
     * @author ycx
     * @description 设置结尾
     * @param charStr {string} 字符
     */
    setEnd(charStr) {
        //
        if (stringUtil.isNotEmpty(charStr)) {
            this.endCharacterSet.add(charStr);
        }
    }
}

module.exports = WordTree

const wordTree = new WordTree();

wordTree.addWords(["站","a蛤"]);

//console.log(wordTree.endCharacterSet.has('逼'));
const one = wordTree.matchAll("zha蛤ngwen",1,true,true);


console.log(one)
