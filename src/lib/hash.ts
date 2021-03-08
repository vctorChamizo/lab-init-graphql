import bcrypt from "bcrypt";
import { SALT_ROUNDS } from "@constants";

export const encryptPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, SALT_ROUNDS);
};

export const comparePassword = async (
  inputPassword: string,
  hashedPassword: string
): Promise<boolean> => {
  return await bcrypt.compare(hashedPassword, inputPassword);
};
