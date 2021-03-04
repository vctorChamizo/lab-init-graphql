import { signInService } from "../../../service";

export const signInMutation = async (_: any, args: any) => {
  const {
    username,
    email,
    password,
  }: { username: string; email: string; password: string } = args;
  return await signInService(password, username, email);
};
