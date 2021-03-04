import { Document } from "mongoose";

export interface IUser {
  id: string;
  username: string;
  email: string;
  password: string;
  token: string;
}

export interface IUserAuth {
  username: string;
  email: string;
  password: string;
}

export interface IUserModel extends Document {
  id: string;
  username: string;
  email: string;
  password: string;
  token: string;
}
