import { DataTypes, Model, Sequelize } from "sequelize";
import { USER_MODEL_NAME, USER_TABLE_NAME } from "../utils/DBConst.js";
import { UserDB } from "./type/UserDB.js";

class UserModel extends Model<UserDB>  {

    static initModel(sequelize: Sequelize) {
        UserModel.init({   
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            email: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            contact: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            image: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            isActive: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
            createdAt: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            updatedAt: {
                type: DataTypes.DATE,
                allowNull: false,
            }
        },
        {
            sequelize,
            modelName: USER_MODEL_NAME,
            tableName: USER_TABLE_NAME,
        });
    }
}

export default UserModel;
