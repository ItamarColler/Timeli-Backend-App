import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import path from "path";
import { registerRouter } from "./routers";

const app = express();

app.use(express.static(path.join(__dirname, "..", "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/register", registerRouter);

app.get("/", (req, res) => {
  res.send("Hello This is Main Page!");
});
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  res.status(500).send(err);
});

export default app;
