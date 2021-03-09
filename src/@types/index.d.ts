export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      NODE_ENV: string;
      API_URL: string;
      DB_LOCAL_HOST_MONGODB: string;
      DB_LOCAL_NAME_MONGODB: string;
      SALT_ROUNDS: string;
      JWT_SECRET: string;
    }
  }
}
