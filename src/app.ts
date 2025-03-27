import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import path from "path";
import { registerRouter } from "./routers";
import errorHandler from "./utils/error.handler";

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/register", registerRouter);

app.get("/", (req, res) => {
  res.send("Hello This is Main Page!");
});
app.use(errorHandler);

export default app;
