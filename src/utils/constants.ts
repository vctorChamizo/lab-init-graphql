import dotenv from "dotenv";
import { Secret } from "jsonwebtoken";

import { Enviroments } from "@enums";

if (process.env.NODE_ENV === Enviroments.SANDBOX) {
  dotenv.config({ path: ".env.sandbox" });
} else if (process.env.NODE_ENV === Enviroments.DEVELOPMENT) {
  dotenv.config({ path: ".env.dev" });
} else if (process.env.NODE_ENV === Enviroments.PRODUCTION) {
  dotenv.config();
}

// Enviroment
export const NODE_ENV: string = process.env.NODE_ENV || "sandbox";
export const API_HOST: string = process.env.API_HOST || "http://localhost";
export const PORT: number = Number(process.env.PORT) || 4000;
export const API_URL: string = process.env.API_URL || "/api";

// Database
export const DB_HOST_MONGODB: string | undefined = process.env.DB_HOST_MONGODB;
export const DB_NAME_MONGODB: string | undefined = process.env.DB_NAME_MONGODB;

// Password
export const SALT_ROUNDS: number = Number(process.env.SALT_ROUNDS) || 10;

// JWT
export const JWT_SECRET: Secret = String(process.env.JWT_SECRET) || "Secret";

// Sentry
export const SENTRY_DSN: string | undefined = process.env.SENTRY_DSN;

// Errors

export const NO_AUTHORIZATION = "No Authorization supplied";
