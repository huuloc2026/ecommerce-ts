import { Router } from "express";
import { UserController } from "../controllers/User.controller";

class UserRouter {
  public router: Router;
  constructor() {
    this.router = Router();
    this.getRoutes();
    this.postRoutes();
    this.patchRoutes();
    this.putRoutes();
    this.deleteRoutes();
  }
  getRoutes() {
    this.router.post("/login", UserController.login);
    // this.router.post("/signup", UserController.signup);
  }
  postRoutes() {}
  patchRoutes() {}
  putRoutes() {}
  deleteRoutes() {}
}
export default new UserRouter().router;
