'use strict';
const StreamUtil = require('../stream/StreamUtil');

/**
 * @author ycx
 *
 * @description buffer工具类
 */
class BufferUtil {

    /**
     * stream 转buffer
     * @param stream {Stream} stream 对象
     * @return {Promise<Buffer>} buffer对象
     */
    static streamToBuffer(stream) {
        return new Promise((resolve, reject) => {
            const buffers = []
            stream.on('error', reject);
            stream.on('data', (data) => buffers.push(data));
            stream.on('end', () => resolve(Buffer.concat(buffers)));
        });
    }

    /**
     * buffer 转 stream
     * @param buffer {Buffer}
     * @return {module:stream.internal.Duplex}
     */
    static bufferToStream(buffer) {
        return StreamUtil.bufferToStream(buffer);
    }
}

module.exports = BufferUtil;
