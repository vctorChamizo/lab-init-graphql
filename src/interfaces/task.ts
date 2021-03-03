import { Document } from "mongoose";

export interface ITask {
  id: string;
  name: string;
  description: string;
  completed?: boolean;
}

export interface ITaskData {
  name: string;
  description: string;
  completed?: boolean;
}

export interface ITaskModel extends Document {
  id: number;
  name: string;
  description: string;
  completed?: boolean;
}
