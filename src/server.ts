import 'reflect-metadata';
import PostController from './controllers/post/post.controller';
import AppSource from './config/orm.config';
import App from './app';

const app = new App(
    [new PostController()],
    AppSource,
    Number(process.env.PORT)
);
app.listen();