import { IUser } from "@interfaces";
import { addUserService } from "../../../service";

export const addUserMutation = async (_: any, args: any) => {
  const {
    username,
    email,
    avatar,
    notes,
  }: {
    username: string;
    email: string;
    avatar: string;
    notes: string[];
  } = args;
  const newUser: IUser = await addUserService(username, email, avatar, notes);
  return newUser;
};
