import { IUser } from "@interfaces";
import { getUserByToken, findUserByIdService } from "../service";

export const authContext = async (token: string): Promise<IUser | null> => {
  if (!token) return null;

  const userJWT = await getUserByToken(token);
  const { id: userId } = userJWT;

  if (!userId) return null;

  const user: IUser | null = await findUserByIdService(userId);

  return user;
};
