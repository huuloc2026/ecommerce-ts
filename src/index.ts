console.clear()
require('dotenv').config()
import * as express from 'express';
import mongoose from 'mongoose';
import { getEnvirontmentVariables } from './environments/environment';
let app: express.Application = express();
const port = process.env.PORT || 5000 ;
app.listen(port, () => {
    console.log(`Server is running at port http://localhost:${port}`)
})

app.use((req, res, next) => {
    console.log("This is middleware")
    next();
})

app.get('/api/user/login', (req, res) => {
    res.status(200).send("success")
})

const InforDatabase = {
    Username: process.env.MONGODB_USERNAME,
    password: process.env.MONGODB_PASSWORD,
    Database_NAME: process.env.MONGODB_DB_NAME,
}

const LinkMongoDB = `mongodb+srv://${InforDatabase.Username}:${InforDatabase.password}@cluster0.20izq.mongodb.net/${InforDatabase.Database_NAME}?retryWrites=true&w=majority`
mongoose.connect(getEnvirontmentVariables().db_uri)
    .then(() => {
        console.log("Connected to mongodb.")
    })