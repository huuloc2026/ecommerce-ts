import User from "../models/User";
import { Util } from "../utils/Utils";

export class UserController {
  static async signup(req, res, next) {
    const { name, phone, email, password, type, status } = req.body;
    const dataInput = {
      name,
      verify_token: Util.randomNumber(100000, 999999),
      verifycation_token_time: Date.now() + new Util().MAX_TOKEN_TIME,
      phone,
      email,
      password,
      type,
      status,
    };
    try {
      const user = new User(dataInput).save();
      res.status(200).json({ user });
    } catch (error) {
      next(error);
    }
  }

  static verify(req, res, next) {
    const { email, verification_token } = req.body;
    User;
    // res.status(200).send("this is test 2");
  }
}
