import * as express from "express";
import mongoose from "mongoose";
import { getEnvirontmentVariables } from "./environments/environment";
import UserRouter from "./routers/UserRouter";
import * as bodyParse from "body-parser";
import * as cors from 'cors';

export class Server {
  public app: express.Application = express();
  constructor() {
    this.setConfigs();
    this.setRoutes();
    this.error404Handler();
    this.handleErrors();
  }
  setConfigs() {
    this.connectMongoDB();
    this.configureBodyParser();
    this.allowCors();
  }
  connectMongoDB() {
    mongoose.connect(getEnvirontmentVariables().db_uri).then(() => {
      console.log("Connected to mongodb.");
    });
  }
  configureBodyParser() {
    this.app.use(bodyParse.json());
    this.app.use(bodyParse.urlencoded({ extended: true }));
  }
  allowCors(){
    this.app.use(cors());
  }
  setRoutes() {
    this.app.use("/api/user", UserRouter);
  }
  error404Handler() {
    this.app.use((req, res) => {
      res.status(404).json({
        message: "404 Not Found",
        status_code: 404,
      });
    });
  }
  handleErrors() {
    this.app.use((error, req, res, next) => {
      const errorStatus = req.errorStatus || 500;
      res.status(errorStatus).json({
        message: error.message || "Something went wrong",
        status_code: errorStatus,
      });
      next();
    });
  }
}
