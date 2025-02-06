import 'reflect-metadata';
import PostController from './controllers/post/post.controller';
import Database from './config/orm.config';
import App from './app';
import { AddressController } from './controllers/address/address.controller';
import validateEnv from './utils/validateEnv';

validateEnv.validateAppEnv();

(async () => {
    const app = new App(
        [new PostController(), new AddressController()],
        Database.getInstance(),
        Number(process.env.PORT)
    );
    app.listen();
})();
