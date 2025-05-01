import { DataTypes, QueryInterface } from "sequelize";
import { CATEGORY_TABLE_NAME } from "../utils/DBConst.js";

export default {
    up: async (queryInterface: QueryInterface) => {
        await queryInterface.createTable(CATEGORY_TABLE_NAME, {
            id: {
                type: DataTypes.STRING,
                allowNull: false,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            createdAt: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: new Date(),
            },
            updatedAt: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: new Date(),
            },
            isActive: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        });
    },

    down: async (queryInterface: QueryInterface) => {
        await queryInterface.dropTable(CATEGORY_TABLE_NAME);
    }
};
