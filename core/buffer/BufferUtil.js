const StreamUtil = require('../stream/StreamUtil');

/**
 * @author ycx
 *
 * @description buffer
 */
class BufferUtil {

    /**
     * stream 转buffer
     * @param stream {Stream}
     * @return {Promise<Buffer>}
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
     * @param buffer
     */
    static bufferToStream(buffer) {
        return StreamUtil.bufferToStream(buffer);
    }
}

module.exports = BufferUtil;
