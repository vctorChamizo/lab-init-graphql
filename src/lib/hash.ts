const bcrypt = require("bcrypt");

import { SALT_ROUNDS } from "@constants";

export const encryptPassword = async (password: string) => {
  return await bcrypt.hash(password, 10);
};

export const comparePassword = async (
  inputPassword: string,
  hashedPassword: string
) => {
  return await bcrypt.compare(hashedPassword, inputPassword);
};
