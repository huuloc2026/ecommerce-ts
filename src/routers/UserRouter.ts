import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { UserValidators } from "../validators/UserValidator";

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
    this.router.get("/signup", UserValidators.signup(), UserController.signup);
    this.router.get("/test", UserController.test,UserController.test2);
  }
  postRouter() {}
  patchRouter() {}
  putRouter() {}
  deleteRouter() {}
}

export default new UserRouter().router;
