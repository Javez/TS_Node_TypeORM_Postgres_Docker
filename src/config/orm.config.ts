import { DataSource } from 'typeorm';
import Post from '../model/post/post.model';
import validateEnv from '../utils/validateEnv';
import User from '../model/user/user.model';
import Address from '../model/address/address.model';

validateEnv.validateDatabaseEnv();

class Database {
    private static instance: DataSource;

    private constructor() {}

    public static getInstance(): DataSource {
        if (!Database.instance) {
            Database.instance = new DataSource({
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
        }
        return Database.instance;
    }
}

export default Database;
