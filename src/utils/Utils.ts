import * as crypto from "crypto";
function makeid(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

export class Util {
  public MAX_TOKEN_TIME = 5 * 60 * 1000;
  static randomUser = () => {
    const phonePrefix = "0919";
    const emailDomain = "@gmail.com";
    const statusOptions = ["active", "inactive", "pending"];
    const types = ["ADMIN", "USER", "MODERATOR"];
    const randomNumber = (min, max) =>
      Math.floor(Math.random() * (max - min + 1)) + min;

    const randomName = "name-" + makeid(15);
    const randomPhone = phonePrefix + "." + randomNumber(100000, 999999);
    const randomEmail = makeid(10) + randomNumber(100, 999) + emailDomain;
    const randomStatus =
      statusOptions[randomNumber(0, statusOptions.length - 1)];
    const randomType = types[randomNumber(0, types.length - 1)];
    const randomPassword = makeid(10); // You can generate a random password here if needed

    return JSON.stringify(
      {
        name: randomName,
        phone: randomPhone,
        email: randomEmail,
        type: randomType,
        status: randomStatus,
        password: randomPassword,
      },
      null,
      2
    );
  };
  static RandomString(length) {
    let result = "";
    const characters =
      "$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }
  static randomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min + 1)) + min;
  static RandomKeyToken = (bytes: number) => {
    const iv = crypto.randomBytes(bytes).toString("hex");
    return iv;
  };
}
