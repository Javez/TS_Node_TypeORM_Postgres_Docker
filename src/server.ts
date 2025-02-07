import 'reflect-metadata';
import validateEnv from './utils/validateEnv';
import Database from './config/orm.config';
import App from './app';
import PostController from './controllers/post.controller';
import AddressController from './controllers/address.controller';
import AuthController from './controllers/auth.controller';

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
        [new PostController(), new AddressController(), new AuthController()],
        Number(process.env.PORT)
    );
    app.listen();
})();
