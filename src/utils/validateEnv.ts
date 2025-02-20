import path from 'path';
import dotenv from 'dotenv';
import { cleanEnv, str, num, email } from 'envalid';

const envName = process.env.NODE_ENV;

if (!envName) throw new Error('\nNo env file name provided\n');

dotenv.config({
    path: `${path.resolve(__dirname, `../../${String(envName).trim()}.env`)}`,
});

const validateAppEnv = () => {
    cleanEnv(process.env, {
        JWT_SECRET: str(),
        PORT: num(),
    });
};

const validateDatabaseEnv = () => {
    cleanEnv(process.env, {
        POSTGRES_HOST: str(),
        POSTGRES_USER: str(),
        POSTGRES_PORT: num(),
        POSTGRES_PASSWORD: str(),
        POSTGRES_DB: str(),
        PGADMIN_DEFAULT_EMAIL: email(),
        PGADMIN_DEFAULT_PASSWORD: str(),
    });
};

export default { validateDatabaseEnv, validateAppEnv };
