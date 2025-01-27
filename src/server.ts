import 'dotenv/config';
import 'reflect-metadata';
import App from './app';
import AppSource from './config/orm.config';
import PostController from './controllers/post/post.controller';
import validateEnv from './utils/validateEnv';

validateEnv();

(async () => {
    try {
       await AppSource.initialize();
    } catch (error) {
        console.log('Error while connecting to the database', error);
        return error;
    }
    const app = new App([new PostController()]);
    app.listen();
})();
