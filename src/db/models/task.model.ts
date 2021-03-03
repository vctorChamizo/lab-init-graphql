import { Schema, model } from "mongoose";

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

export const TaskModel = model("Task", TaskSchema);
