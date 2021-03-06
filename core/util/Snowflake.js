'use strict';
/**
 * @author: 易成贤
 * @description: 推特雪花算法 的js 实现 用于生成不重复的id
 * @link: <a>https://www.cnblogs.com/grasp/p/12309726.html</a>
 * @type {Snowflake}
 */
class Snowflake {
    /**
     *
     * @param workerId {BigInt} 工作站id
     * @param dataCenterId {BigInt}数据中心
     * @param sequence {BigInt}
     * @constructor
     */
    constructor(workerId, dataCenterId, sequence) {
        this.twepoch = 1288834974657n;
        //this.twepoch = 0n;
        this.workerIdBits = 5n;
        this.dataCenterIdBits = 5n;
        this.maxWrokerId = -1n ^ -1n << this.workerIdBits; // 值为：31
        this.maxDataCenterId = -1n ^ -1n << this.dataCenterIdBits; // 值为：31
        this.sequenceBits = 12n;
        this.workerIdShift = this.sequenceBits; // 值为：12
        this.dataCenterIdShift = this.sequenceBits + this.workerIdBits; // 值为：17
        this.timestampLeftShift = this.sequenceBits + this.workerIdBits + this.dataCenterIdBits; // 值为：22
        this.sequenceMask = -1n ^ -1n << this.sequenceBits; // 值为：4095
        this.lastTimestamp = -1n;
        //设置默认值,从环境变量取
        this.workerId = 1n;
        this.dataCenterId = 1n;
        this.sequence = 0n;
        if (this.workerId > this.maxWrokerId || this.workerId < 0) {
            throw new Error('_workerId must max than 0 and small than maxWrokerId-[' + this.maxWrokerId + ']');
        }
        if (this.dataCenterId > this.maxDataCenterId || this.dataCenterId < 0) {
            throw new Error('_dataCenterId must max than 0 and small than maxDataCenterId-[' + this.maxDataCenterId + ']');
        }

        this.workerId = BigInt(workerId);
        this.dataCenterId = BigInt(dataCenterId);
        this.sequence = BigInt(sequence);
    }

    tilNextMillis(lastTimestamp) {
        let timestamp = this.timeGen();
        while (timestamp <= lastTimestamp) {
            timestamp = this.timeGen();
        }
        return BigInt(timestamp);
    }

    timeGen(){
        return BigInt(Date.now());
    }

    /**
     * 获取下一个
     * @return {bigint}
     */
    nextId() {
        let timestamp = this.timeGen();
        if (timestamp < this.lastTimestamp) {
            throw new Error('Clock moved backwards. Refusing to generate id for ' + (this.lastTimestamp - timestamp));
        }
        if (this.lastTimestamp === timestamp) {
            this.sequence = this.sequence + 1n & this.sequenceMask;
            if (this.sequence === 0n) {
                timestamp = this.tilNextMillis(this.lastTimestamp);
            }
        } else {
            this.sequence = 0n;
        }
        this.lastTimestamp = timestamp;
        return timestamp - this.twepoch << this.timestampLeftShift |
            this.dataCenterId << this.dataCenterIdShift |
            this.workerId << this.workerIdShift |
            this.sequence;
    }

}

module.exports = Snowflake




