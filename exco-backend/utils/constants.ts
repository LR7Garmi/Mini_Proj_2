import { DBConfig } from "./shared";

export const dbConfig : DBConfig = {
    url: process.env.DB_URI as string,
    dbName: process.env.DB_NAME as string,
    collectionNames: ['users', 'ques', 'ans'],
    dbOptions: {}
};