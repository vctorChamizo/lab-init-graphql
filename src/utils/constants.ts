import dotenv from "dotenv";

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
export const PORT: string = process.env.PORT || "4000";
export const API_URL: string = process.env.API_URL || "/api";

// Database
export const DB_HOST_MONGODB: string = process.env.DB_HOST_MONGODB;
export const DB_NAME_MONGODB: string = process.env.DB_NAME_MONGODB;

// Password
export const SALT_ROUNDS: string = process.env.SALT_ROUNDS;

// JWT
export const JWT_SECRET: string = process.env.JWT_SECRET;
