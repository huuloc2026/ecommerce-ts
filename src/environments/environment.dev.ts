import { Environment } from "./environment";

const InforDatabase = {
    Username: process.env.MONGODB_USERNAME,
    password: process.env.MONGODB_PASSWORD,
    Database_NAME: process.env.MONGODB_DB_NAME,
}
export const DevEnvironment:Environment  = {
    db_uri: `mongodb+srv://${InforDatabase.Username}:${InforDatabase.password}@cluster0.20izq.mongodb.net/${InforDatabase.Database_NAME}?retryWrites=true&w=majority`,
};