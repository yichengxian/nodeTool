/**
 * @author
 * @description 分页工具
 */
class PageUtil {

    /**
     * 根据总数计算总页数
     * @param totalCount {number} 总数
     * @param pageSize {number} 页页面大小
     * @return {Number}
     */
    static totalPage(totalCount, pageSize) {
        if (0 === pageSize) {
            return 0;
        }
        return 0 === (totalCount % pageSize) ? (totalCount / pageSize) : (totalCount / pageSize + 1);
    }

    /**
     * 彩虹分页算法
     * @param pageNo {number} 页码
     * @param totalPage {number} 总页数
     * @param displayCount {number} 每屏展示记录数
     */
    static rainbow(pageNo, totalPage, displayCount) {
        //
        const isEven = 0 === (displayCount & 1);

        const left = displayCount >> 1;
        let right = displayCount >> 1;

        let length = displayCount;

        if (isEven) {
            right++;
        }

        if (totalPage < displayCount) {
            length = totalCount;
        }

        let result = new Array(length);
        if (totalPage >= displayCount) {

            if (pageNo <= left) {
                for (let i = 0; i < result.length; i++) {
                    result[i] = i + 1;
                }

            } else if (pageNo > totalPage - right) {
                for (let i = 0; i < result.length; i++) {
                    result[i] = i + totalPage - displayCount + 1;
                }

            } else {
                for (let i = 0; i < result.length; i++) {
                    result[i] = i + pageNo - left + (isEven ? 1 : 0);
                }
            }

        } else {
            for (let i = 0; i < result.length; i++) {
                result[i] = i + 1;
            }
        }

        return result;
    }


}

module.exports = PageUtil
