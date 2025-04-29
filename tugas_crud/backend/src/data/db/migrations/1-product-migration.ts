import { QueryInterface, DataTypes } from "sequelize";
import { PRODUCT_TABLE_NAME } from "../utils/DBConst.js";

//TODO: Learn flow of this file
export default {
    up: async (queryInterface: QueryInterface) => {
        await queryInterface.createTable(PRODUCT_TABLE_NAME, {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            price: {
                type: DataTypes.FLOAT,
                allowNull: true,
            },
            category: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            stock: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            isActive: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
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
        });
    },

    down: async (queryInterface: QueryInterface) => {
        await queryInterface.dropTable(PRODUCT_TABLE_NAME);
    },
};
