import { createClient } from "redis";

export const redisClient = createClient({
  url: process.env.REDIS_URL,
});

// Connection Success
redisClient.on("connect", () => {
  console.log(" Redis Connected");
});

// Connection Error
redisClient.on("error", (err) => {
  console.log(" Redis Error:", err);
});

// Connect Redis
await redisClient.connect();