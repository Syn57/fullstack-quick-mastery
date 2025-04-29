import process from "process";
import { DBConfig } from "../config/DBConfig.js";
import configJson from "../config/Database.js";
import { Sequelize }  from "sequelize";
import ProductModel from "./product.model.js";

const env = (process.env.NODE_ENV as keyof typeof configJson) || "development";
const config: DBConfig = configJson[env];

let sequelize: Sequelize;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable] as string, config as any);
} else {
    sequelize = new Sequelize(config.database ?? "", config.username ?? "", config.password ?? "", config as any);
}

/**
 * Note: Instead of looping the available model inside the directory,
 * I prefer to manually initialize the model one by one so the dev 
 * more aware with the model initittion and straightfoward.
 * Using this method can also minimize the abusive use of `any` type
 * which is the core of typscript.
 */
const loadModels = async () => {
    // Add and load database models here
    ProductModel.initModel(sequelize);
};  

export default function initilizeDatabase() {
    loadModels()
}
