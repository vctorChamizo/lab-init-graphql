import { Document } from "mongoose";
import { ITask } from "@interfaces";

export interface IUser {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  notes?: string[];
}

export interface IUserData {
  username: string;
  email: string;
  avatar?: string;
  notes?: string[];
}

export interface IUserModel extends Document {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  notes?: string[];
}
