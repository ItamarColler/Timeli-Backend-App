import { config } from "dotenv";
import { expand } from "dotenv-expand";

expand(config());

export const PORT: number = +(process.env.PORT ?? 3005);

export const MONGO_URL: string = process.env.MONGO_URL ?? "";

export const ACCESS_TOKEN_SECRET: string =
  process.env.ACCESS_TOKEN_SECRET ?? "";

export const REFRESH_TOKEN_SECRET: string =
  process.env.REFRESH_TOKEN_SECRET ?? "";

export const SALTROUNDS: number = +(process.env.SALTROUNDS ?? 10);

export const NODE_ENV: string = process.env.NODE_ENV ?? "local";
