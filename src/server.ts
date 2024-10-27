import * as express from "express";
import * as mongoose from "mongoose";
import UserRouter from "./routes/UserRouter";

export class Server {
  public app: express.Application = express();
  constructor() {
    this.setConfig();
    this.connectMongoDB();
    this.setRoutes();
  }
  setConfig() {}
  connectMongoDB() {
    mongoose
      .connect(
        "mongodb+srv://huuloc2026:sCUzElmeUrRc8ToW@cluster0.20izq.mongodb.net/"
      )
      .then(() => {
        console.log("Connected db");
      });
  }
  setRoutes() {
    this.app.use("/api/user/", UserRouter);
  }
}
