import { IClient } from "../interfaces";

export function excludeFields<IClient, Field extends keyof IClient>(client: IClient, fields:Field[]):Omit<IClient, Field> {
    for(let key of fields){
        delete client[key]
    }
    return client
}