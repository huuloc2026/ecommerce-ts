import * as express from 'express';
import mongoose from 'mongoose';
import { getEnvirontmentVariables } from './environments/environment';
import UserRouter from './routers/UserRouter';


export class Server {
    public app: express.Application = express();
    constructor() {
        this.setConfigs()
        this.setRoutes()
        
    }
    setConfigs() {
        this.connectMongoDB(); 
    }
    connectMongoDB() { 
        mongoose.connect(getEnvirontmentVariables().db_uri)
    .then(() => {
        console.log("Connected to mongodb.")
    })
    }
    setRoutes(){
        this.app.use('/api/user', UserRouter);

    }
    // userRoutes(){
    //     this.app.use('/api/user',UserRouter)

    // }
}