import { Server } from "./server";
import { Util } from "./utils/Utils";
console.clear();
require("dotenv").config();
let server = new Server().app;
const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server is running at port http://localhost:${port}`);
});

const randomUser1 = Util.randomUser();
const testKey = Util.RandomKeyToken(64);

console.log(randomUser1);
