const jwt = require("jsonwebtoken");

import { JWT_SECRET } from "@constants";

export const generateJWT = async (id: string) => {
  return await jwt.sign({ id }, JWT_SECRET);
};

export const validateJWT = async (token: string) => {
  return await jwt.verify(token, JWT_SECRET);
};
