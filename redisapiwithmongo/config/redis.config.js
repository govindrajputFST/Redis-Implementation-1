const { createClient } = require("redis");
require('dotenv').config();
exports.connectRedis = async () => {
    const redisClient = await createClient({
        url: process.env.REDIS_URL
    })
        .on('error', (err) => {console.log("Redis client error", err) })
        .on('connect', () => console.log("redis client connected"))
        .connect()
    return redisClient;
}