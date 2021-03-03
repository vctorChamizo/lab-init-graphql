import mongoose from "mongoose";
import logger from "@log";

import { DB_HOST_MONGODB, DB_NAME_MONGODB } from "@constants";
import { DatabaseStatus } from "@enums";

const connect = async () => {
  try {
    await mongoose.connect(`${DB_HOST_MONGODB}${DB_NAME_MONGODB}`, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      autoIndex: false,
    });

    logger.info(`Connected to momngo at ${DB_HOST_MONGODB}${DB_NAME_MONGODB}`);
  } catch (error) {
    logger.error(
      `Error connecting to mongo database. Error description: ${error}`
    );
  }
};

const disconnect = async () => {
  if (mongoose.connection.readyState !== DatabaseStatus.CONNECTED) return;

  try {
    await mongoose.disconnect();

    logger.info(`Disconnected to momngo successful.`);
  } catch (error) {
    logger.error(
      `Error disconnecting to mongo database. Error description: ${error}`
    );
  }
};

export { connect, disconnect };
