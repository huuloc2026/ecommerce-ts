import * as express from "express";
import * as mongoose from "mongoose";
import UserRouter from "./routes/UserRouter";
import * as dotenv from "dotenv";

dotenv.config();

export class Server {
  public app: express.Application = express();
  constructor() {
    this.setConfig();
    this.connectMongoDB();
    this.setRoutes();
  }
  setConfig() {}
  connectMongoDB() {
    mongoose.connect(process.env.MONGODB_URI).then(() => {
      console.log("Connected db");
    });
  }
  setRoutes() {
    this.app.use("/api/user/", UserRouter);
  }
}
