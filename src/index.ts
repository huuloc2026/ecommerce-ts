console.clear();
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });
import { Server } from "./server";
let server = new Server().app;
let port = process.env.PORT;
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port} `);
});
