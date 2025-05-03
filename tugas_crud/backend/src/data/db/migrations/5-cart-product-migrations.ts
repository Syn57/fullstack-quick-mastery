import { DataTypes, QueryInterface } from "sequelize";
import { CART_PRODUCT_TABLE_NAME, CART_TABLE_NAME, PRODUCT_TABLE_NAME } from "../utils/DBConst.js";

export default {
    up: async (queryInterface: QueryInterface) => {
        await queryInterface.createTable(CART_PRODUCT_TABLE_NAME, {
            id: {
                type: DataTypes.STRING,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            productId: {
                type: DataTypes.UUID,
                allowNull: true,
                references: {
                    model: PRODUCT_TABLE_NAME,
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            cartId: {
                type: DataTypes.UUID,
                allowNull: true,
                references: {
                    model: CART_TABLE_NAME,
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
        await queryInterface.dropTable(CART_PRODUCT_TABLE_NAME);
    },
};
