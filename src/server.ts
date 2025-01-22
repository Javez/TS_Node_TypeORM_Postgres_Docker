import 'dotenv/config';
import 'reflect-metadata';
//import { createConnection } from 'typeorm';
import App from './app';
import config from './config/orm.config';
import PostController from './controllers/post/post.controller';
import validateEnv from './utils/validateEnv';

validateEnv();

(async () => {
    try {
       // await createConnection(config);
    } catch (error) {
        console.log('Error while connecting to the database', error);
        return error;
    }
    const app = new App([]);
    app.listen();
})();
