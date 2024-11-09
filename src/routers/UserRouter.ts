import { Router } from "express";
import { UserController } from "../controllers/UserController";

class UserRouter {
  public router: Router;
  constructor() {
    this.router = Router();
    this.getRouter();
    this.postRouter();
    this.patchRouter();
    this.putRouter();
    this.deleteRouter();
  }
  getRouter() {
    this.router.get("/login",UserController.login);
    this.router.get("/test", UserController.test,UserController.test2);
  }
  postRouter() {}
  patchRouter() {}
  putRouter() {}
  deleteRouter() {}
}

export default new UserRouter().router;
