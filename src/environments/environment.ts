
import { DevEnvironment } from "./environment.dev";
import { ProdEnvironment } from "./environment.prod";

export interface Environment {
    db_uri: string,
}

export function getEnvirontmentVariables() {
    if (process.env.NODE_ENV === 'production'){
        return ProdEnvironment
    }
    return DevEnvironment
}