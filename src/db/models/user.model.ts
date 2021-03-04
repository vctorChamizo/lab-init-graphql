import { Schema, model } from "mongoose";

import { IUserModel } from "@interfaces";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      reqired: true,
    },
    email: {
      type: String,
      reqired: true,
    },
    password: {
      type: String,
      reqired: true,
    },
  },
  {
    timestamps: true,
  }
);

export const UserModel = model<IUserModel>("User", UserSchema);
