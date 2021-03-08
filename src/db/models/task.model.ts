import { Schema, model } from "mongoose";

import { ITaskModel } from "@interfaces";

const TaskSchema = new Schema(
  {
    name: {
      type: String,
      reqired: true,
    },
    description: {
      type: String,
      reqired: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const TaskModel = model<ITaskModel>("Task", TaskSchema);
