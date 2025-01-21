import { cleanEnv, str, num, bool } from 'envalid';

const validateEnv = () => {
    if (process.env.NODE_ENV === 'local') {
        cleanEnv(process.env, {
            PORT: num(),
        });
    } else if (process.env.NODE_ENV === 'dev') {
        cleanEnv(process.env, {
            POSTGRES_PORT: num(),
            POSTGRES_USER: str(),
            POSTGRES_PASSWORD: str(),
            POSTGRES_DB: str(),
            PORT: num(),
        });
    }
};

export default validateEnv;
