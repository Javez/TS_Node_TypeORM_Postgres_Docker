import 'reflect-metadata';
import PostController from './controllers/post/post.controller';
import Database from './config/orm.config';
import App from './app';
import { AddressController } from './controllers/address/address.controller';
import validateEnv from './utils/validateEnv';

validateEnv.validateAppEnv();

(async () => {
    try {
        const datasource = Database.getInstance();
        await datasource.initialize();
    } catch (error) {
        console.log('Error while connecting to the database', error);
        return error;
    }
    const app = new App(
        [new PostController(), new AddressController()],
        Number(process.env.PORT)
    );
    app.listen();
})();
