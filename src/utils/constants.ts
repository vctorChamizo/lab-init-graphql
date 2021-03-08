import dotenv from "dotenv";
import { Secret } from "jsonwebtoken";

import { Enviroments } from "@enums";

if (process.env.NODE_ENV === Enviroments.PRODUCTION) {
  dotenv.config({ path: ".env.production" });
} else if (process.env.NODE_ENV === Enviroments.DEVELOPMENT) {
  dotenv.config({ path: ".env.development" });
} else {
  dotenv.config();
}

// Enviroment
export const API_HOST: string = process.env.API_HOST || "http://localhost";
export const PORT: number = Number(process.env.PORT) || 4000;
export const API_URL: string = process.env.API_URL || "/api";

// Database
export const DB_LOCAL_HOST_MONGODB: string | undefined =
  process.env.DB_LOCAL_HOST_MONGODB;
export const DB_LOCAL_NAME_MONGODB: string | undefined =
  process.env.DB_LOCAL_NAME_MONGODB;
export const DB_REMOTE_HOST_MONGODB: string | undefined =
  process.env.DB_REMOTE_HOST_MONGODB;

// Password
export const SALT_ROUNDS: number = Number(process.env.SALT_ROUNDS) || 10;

// JWT
export const JWT_SECRET: Secret = String(process.env.JWT_SECRET) || "Secret";
