import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { UserValidators } from "../validators/UserValidator";
import { GlobalMiddleWare } from "../middlewares/GlobalMiddleware";

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
  getRouter() {}
  postRouter() {
    this.router.post(
      "/signup",
      UserValidators.signup(),
      GlobalMiddleWare.checkError,
      UserController.signup
    );
  }
  patchRouter() {
    this.router.patch(
      "/verify",
      UserValidators.verifyUserEmail(),
      UserController.verify
    );
  }
  putRouter() {}
  deleteRouter() {}
}

export default new UserRouter().router;
