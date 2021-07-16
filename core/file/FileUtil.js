const fs = require('fs');
/**
 * @author ycx
 * @description 文件工具类
 */
class FileUtil {

    /**
     * 创建文件目录<br/>
     * 此方法支持创建多级目录
     * @param path {string} 目录路径例如/home/ycx
     * @return {string}
     */
    static mkdir(path){
        return fs.mkdirSync(path,{recursive:true});
    }
}

module.exports = FileUtil
