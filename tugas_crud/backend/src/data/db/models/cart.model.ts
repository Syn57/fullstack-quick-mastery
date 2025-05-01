import { DataTypes, Model, Sequelize } from "sequelize";
import { CART_MODEL_NAME, CART_TABLE_NAME } from "../utils/DBConst.js";
import { CartDB } from "./type/CartDB.js";

class CartModel extends Model<CartDB> {

    static initModel(sequelize: Sequelize) {
        CartModel.init({   
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            productId: {
                type: DataTypes.UUIDV4,
                allowNull: true,
            },
            userId: {
                type: DataTypes.UUIDV4,
                allowNull: true,
            },
            quantity: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            totalPrice: {
                type: DataTypes.BIGINT,
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
            modelName: CART_MODEL_NAME,
            tableName: CART_TABLE_NAME,
        });
    }
}

export default CartModel;
