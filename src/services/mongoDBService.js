import mongoose from "mongoose";
import { config } from "../config/config.js";

const initMongoDB = async () => {
  try {
    if (config.server.dbSelector !== config.persistences.mongo) return;
    await mongoose.connect(config.MongoDB.url, {
      dbName: config.MongoDB.dbName,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongo Db Conected");
  } catch (error) {
    console.error(error);
  }
};

const MongoDBService = {
  initMongoDB,
};

export { MongoDBService };
