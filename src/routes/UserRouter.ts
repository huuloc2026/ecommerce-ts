import { Router } from "express";

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
    this.router.get("/login", (req, res) => {
      console.log(req.query);
      res.status(200).send("Success");
    });
  }
  postRoutes() {}
  patchRoutes() {}
  putRoutes() {}
  deleteRoutes() {}
}
export default new UserRouter().router;
