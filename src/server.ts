import * as express from "express";
import * as mongoose from "mongoose";
import * as bodyParser from "body-parser";
import * as dotenv from "dotenv";
import UserRouter from "./routes/UserRouter";

dotenv.config({ path: __dirname + "/.env" });

export class Server {
  public app: express.Application = express();
  constructor() {
    this.setConfig();
    this.setRoutes();
    this.error404Handler();
    this.handle404Handler();
  }
  setConfig() {
    this.connectMongoDB();
    this.setConfigBodyParser();
  }
  connectMongoDB() {
    mongoose.connect(process.env.MONGO_URI).then(() => {
      console.log("Connected db");
    });
  }
  setConfigBodyParser() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }
  setRoutes() {
    this.app.use("/api/user/", UserRouter);
  }
  error404Handler() {
    this.app.use((req, res) => {
      res.status(404).json({
        message: "Not Found",
        status_code: 404,
      });
    });
  }
  handle404Handler() {
    this.app.use((error, req, res, next) => {
      const errorStatus = req.errorStatus || 500;
      res.status(errorStatus).json({
        message: error.message || "Something went wrong!!!",
        status_code: errorStatus,
      });
    });
  }
}
