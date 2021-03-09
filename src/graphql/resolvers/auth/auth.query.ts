import { signInService } from "../../../service";

export const signInMutation = async (
  _: undefined,
  {
    username,
    email,
    password,
  }: { username: string; email: string; password: string }
) => {
  return await signInService(username, email, password);
};
