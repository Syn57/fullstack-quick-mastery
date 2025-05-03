import { DataTypes, QueryInterface } from "sequelize";
import { CART_TABLE_NAME, PRODUCT_TABLE_NAME, USER_TABLE_NAME } from "../utils/DBConst.js";

export default {
    up: async (queryInterface: QueryInterface) => {
        await queryInterface.createTable(CART_TABLE_NAME, {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            userId: {
                type: DataTypes.UUID,
                allowNull: true,
                references: {
                    model: USER_TABLE_NAME,
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
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
            quantity: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            totalPrice: {
                type: DataTypes.INTEGER,
                allowNull: false,
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
        await queryInterface.dropTable(CART_TABLE_NAME);
    },
};
