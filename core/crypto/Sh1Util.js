const { createHash } = require('crypto');

/**
 * 安全散列算法1
 */
class Sh1Util {

    /**
     *
     * @param plain
     * @return {string}
     */
    static sh1(plain){
        const hash = createHash('sha1');
        return hash.update(plain).digest('hex').toUpperCase();
    }
}


module.exports = Sh1Util;