import { Server } from "./server";
console.clear()
require('dotenv').config()
let server = new Server().app;
const port = process.env.PORT || 5000 ;
server.listen(port, () => {
    console.log(`Server is running at port http://localhost:${port}`)
})







