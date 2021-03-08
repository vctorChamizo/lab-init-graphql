import { signUpService } from "../../../service";

export const signUpMutation = async (_: any, args: any) => {
  const {
    username,
    email,
    password,
  }: { username: string; email: string; password: string } = args;
  const newUser = await signUpService(username, email, password);

  return newUser;
};
