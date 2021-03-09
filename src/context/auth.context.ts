import { IUser } from "@interfaces";
import { getUserIdByToken, findUserByIdService } from "../service";

export const authContext = async (token: string): Promise<IUser | null> => {
  if (!token) return null;

  const userJWT: IUser | null = await getUserIdByToken(token);

  if (userJWT) {
    const { id: userId }: { id: string } = userJWT;

    const user: IUser | null = await findUserByIdService(userId);

    return user;
  }

  return null;
};
