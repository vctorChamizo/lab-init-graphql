import gravatar from "gravatar";

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  AuthenticationError,
  ForbiddenError,
} = require("apollo-server-express");
require("dotenv").config();

import { UserModel } from "../../../db/models";
import { encryptPassword } from "../../../lib/hash";

export const signUp = async (_: any, args: any) => {
  //   try {
  //     const { username, email, password } = args;
  //     const normalizeEmail = email.trim().toLowerCase();
  //     const hashedPassword = encryptPassword(password);
  //     const avatar = gravatar(email);
  //     const user = await UserModel.create({
  //       username,
  //       email,
  //       avatar,
  //       password: hashed,
  //     });
  //     // create and return the json web token
  //     return jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  //   } catch (err) {
  //     console.log(err);
  //     // if there's a problem creating the account, throw an error throw new Error('Error creating account');
  //   }
  // };
  // export const signIn = async (_: any, args: any) => {
  //   try {
  //   } catch (error) {}
};

export const signIn = async () => {};
