import { MongoError } from "mongodb";
import mongoose, { Model } from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcrypt";

import logger from "../../lib/log";
import { IUser } from "../../interfaces";
import { UserModel, TaskModel } from "../models";

dotenv.config();

const users = require("./data/user");
const tasks = require("./data/task");

const executeSeeds = async (fn: Function) => {
  try {
    await mongoose.connect(
      `${process.env.DB_LOCAL_HOST_MONGODB}${process.env.DB_LOCAL_NAME_MONGODB}`,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
        autoIndex: false,
      }
    );

    logger.info(
      `Connected to momngo at ${process.env.DB_LOCAL_HOST_MONGODB}${process.env.DB_LOCAL_NAME_MONGODB}`
    );

    await fn();
  } catch (error) {
    logger.error(
      `Error connecting to mongo database. Error description: ${error}`
    );
  } finally {
    await mongoose.disconnect();

    logger.info(`Disconnected to momngo successful.`);
  }
};

const dropIfExists = async (model: Model<any>) => {
  try {
    await model.collection.drop();
  } catch (error) {
    if (error instanceof MongoError)
      logger.warn(
        `Cannot drop collection ${model.collection.name}, because does not exist in database.`
      );
    else throw error;
  }
};

const hashUsers = (users: IUser[]) => {
  return users.map((element) => {
    const hashedPassword = bcrypt.hashSync(
      element.password,
      Number(process.env.SALT_ROUNDS)
    );

    element.password = hashedPassword;
    return element;
  });
};

executeSeeds(async () => {
  await dropIfExists(UserModel);
  await UserModel.create(hashUsers(users));

  await dropIfExists(TaskModel);
  await TaskModel.create(tasks);
});
