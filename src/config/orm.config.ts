import { DataSource } from 'typeorm';
import validateEnv from '../utils/validateEnv';

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
                password: String(process.env.POSTGRES_PASSWORD),
                database: process.env.POSTGRES_DB,
                synchronize:
                    String(process.env.NODE_ENV).trim() !== 'prod'
                        ? true
                        : false, //disable on prod
                logging: false,
                entities: [__dirname + '/../**/*.model{.ts,.js}'],
                migrations: [__dirname + '/../**/migrations/*{.ts,.js}'],
                subscribers: [],
            });
        }
        return Database.instance;
    }
}

export default Database.getInstance();

export { Database };
