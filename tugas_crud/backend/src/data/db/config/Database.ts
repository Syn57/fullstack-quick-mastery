import dotenv from "dotenv";
import { DBConfig } from "./DBConfig";
dotenv.config();

const config: Record<string, DBConfig> = {
    development: {
        use_env_variable: process.env.DB_URL_DEVELOPMENT,
        username: process.env.DB_USERNAME_DEVELOPMENT ?? "root",
        password: process.env.DB_PASSWORD_DEVELOPMENT ?? "root",
        database: process.env.DB_DATABASE_DEVELOPMENT ?? "database_development",
        host: process.env.DB_HOST_DEVELOPMENT ?? "127.0.0.1",
        dialect: process.env.DB_DIALECT_DEVELOPMENT ?? "mysql",
        dialectOptions: {
            connectTimeout: 30000,
        },
        pool: {
            max: 10,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
        logging: console.log,
    },
};

export default config;
