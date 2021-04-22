'use strict';
const {Duplex} = require('stream');

/**
 * @author ycx
 *
 */
class StreamUtil {

    /**
     * buffer 转 stream <br/>
     * <link>https://stackoverflow.com/questions/16038705/how-to-wrap-a-buffer-as-a-stream2-readable-stream</link>
     * @param buffer {Buffer} buffer 对象
     * @return {module:stream.internal.Duplex}
     */
    static bufferToStream(buffer) {
        let stream = new Duplex();
        stream.push(buffer);
        stream.push(null);

        return stream;
    }
}

module.exports = StreamUtil
