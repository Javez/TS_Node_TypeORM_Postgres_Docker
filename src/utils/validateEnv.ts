import { cleanEnv, str, num, email } from 'envalid';

const validateEnv = () => {
    cleanEnv(process.env, {
        POSTGRES_HOST: str(),
        POSTGRES_USER: str(),
        POSTGRES_PORT: num(),
        POSTGRES_PASSWORD: str(),
        POSTGRES_DB: str(),
        PGADMIN_DEFAULT_EMAIL: email(),
        PGADMIN_DEFAULT_PASSWORD: str(),
        PORT: num(),
    });
};

export default validateEnv;
