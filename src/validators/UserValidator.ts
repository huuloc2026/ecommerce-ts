import { body } from "express-validator";

export class UserValidators {
  static signup() {
    return [
      body("name", "Name is required").isString(),
      body("phone", "Phone is required").isString(),
      body("email", "Email is required").isEmail(),
      body("type", "User role is required").isString(),
      body("status", "User status is required").isString(),
      body("password", "Password is required")
        .isAlphanumeric()
        .isLength({ min: 5, max: 25 })
        .withMessage("Password must be between 8-20 characters"),
    ];
  }
  static verifyUserEmail() {
    return [
      body(
        "verification_token",
        "Email verification token is required"
      ).isString(),
      body("email", "Email is required").isEmail(),
    ];
  }
}
