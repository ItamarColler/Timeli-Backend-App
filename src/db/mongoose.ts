import mongoose from "mongoose";

export const connectMongooseDB = async (uri: string): Promise<void> => {
  return mongoose
    .connect(uri)
    .then(() => {
      console.log("connected to database");
    })
    .catch((err) => {
      console.log(`failed to connect, error:${err} `);
      throw err;
    });
};
