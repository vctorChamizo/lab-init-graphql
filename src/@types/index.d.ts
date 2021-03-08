export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      NODE_ENV: string;
      API_URL: string;
      DB_LOCAL_HOST_MONGODB: string;
      DB_LOCAL_NAME_MONGODB: string;
      SALT_ROUNDS: number;
      JWT_SECRET: string;
    }
  }
}
