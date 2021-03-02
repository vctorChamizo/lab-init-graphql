import dotenv from "dotenv";

import { Enviroments } from "../enums";

if (process.env.NODE_ENV === Enviroments.PRODUCTION) {
  dotenv.config({ path: ".env.production" });
} else if (process.env.NODE_ENV === Enviroments.DEVELOPMENT) {
  dotenv.config({ path: ".env.development" });
} else {
  dotenv.config();
}

// Enviroment
export const PORT = process.env.PORT || "4000";
export const API_URL = process.env.API_URL || "/api";
