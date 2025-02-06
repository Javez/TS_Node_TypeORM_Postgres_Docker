import path from 'path';
import dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import Post from '../model/post/post.model';
import validateEnv from '../utils/validateEnv';
import User from '../model/user/user.model';
import Address from '../model/address/address.model';

dotenv.config({
    path: `${path.resolve(__dirname, `../../${process.env.NODE_ENV.trim()}.env`).trim()}`,
});

validateEnv();

const AppSource: DataSource = new DataSource({
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    synchronize: true,
    logging: true,
    entities: [Post, User, Address],
    subscribers: [],
    migrations: [],
});

export default AppSource;
