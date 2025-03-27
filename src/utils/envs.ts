import { config } from "dotenv";
import { expand } from "dotenv-expand";
import path from "path";

expand(config());

export const PORT: number = +(process.env.PORT ?? "3005");

export const MONGO_URL: string = process.env.MONGO_URL ?? "";
