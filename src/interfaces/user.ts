import { Document } from "mongoose";
import { ITask } from "@interfaces";

export interface IUser {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  notes: ITask[];
}

export interface IUserData {
  username: string;
  email: string;
  avatar?: string;
  notes: ITask[];
}

export interface IUserModel extends Document {
  username: string;
  email: string;
  avatar?: string;
  notes: ITask[];
}
