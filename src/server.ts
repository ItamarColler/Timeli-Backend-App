import app from "./app";
import { connectMongooseDB } from "./db/mongoose";
import { MONGO_URL, PORT } from "./utils/envs";

connectMongooseDB(MONGO_URL).then(() => {
  app.listen(PORT, () => {
    console.log(`listening to PORT: ${PORT}`);
  });
});
