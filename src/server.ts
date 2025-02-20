import 'reflect-metadata';
import validateEnv from './utils/validateEnv';
import datasource from './config/orm.config';
import App from './app';
import PostController from './controllers/post.controller';
import AddressController from './controllers/address.controller';
import AuthController from './controllers/auth.controller';
import CategoryController from './controllers/category.controller';

validateEnv.validateAppEnv();

(async () => {
    try {
        await datasource.initialize();
    } catch (error) {
        console.log('Error while connecting to the database', error);
        return error;
    }
    const app = new App(
        [
            new AuthController(),
            new PostController(),
            new AddressController(),
            new CategoryController(),
        ],
        Number(process.env.PORT)
    );
    app.listen();
})();
