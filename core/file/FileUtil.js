const fs = require('fs');
const stream = require('stream');

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
    static mkdir(path) {
        if (fs.existsSync(path)) {
            return path;
        }
        return fs.mkdirSync(path, {recursive: true})
    }

    /**
     * 复制文件
     * @param src {string} 要复制的源文件名
     * @param dest {string} 复制操作的目标文件名
     */
    static copyFile(src, dest) {
        if ((src = src.trim()) === (dest = dest.trim())) {
            return;
        }
        fs.copyFileSync(src, dest, fs.constants.COPYFILE_FICLONE);
    }
}

module.exports = FileUtil
