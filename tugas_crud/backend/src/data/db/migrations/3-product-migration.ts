import { QueryInterface, DataTypes } from "sequelize";
import { CATEGORY_TABLE_NAME, PRODUCT_TABLE_NAME } from "../utils/DBConst.js";

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
            stock: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            image: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            categoryId: {
                type: DataTypes.STRING,
                allowNull: true,
                references: {
                    model: CATEGORY_TABLE_NAME,
                        key: 'id'
                    },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
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
