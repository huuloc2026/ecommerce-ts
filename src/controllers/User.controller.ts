export class UserController {
  static login(req, res) {
    const data = [{ name: "Jake" }];
    res.status(200).send(data);
  }
}
