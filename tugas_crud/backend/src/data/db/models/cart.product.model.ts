import { DataTypes, Model, Sequelize } from "sequelize";
import { CartProductDB } from "./type/CartProductDB.js";
import { CART_PRODUCT_MODEL_NAME, CART_PRODUCT_TABLE_NAME } from "../utils/DBConst.js";

class CartProductModel extends Model<CartProductDB> {

    static initModel(sequelize: Sequelize) {
        CartProductModel.init({   
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            productId: {
                type: DataTypes.UUID,
                allowNull: true,
            },
            cartId: {
                type: DataTypes.UUID,
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
            modelName: CART_PRODUCT_MODEL_NAME,
            tableName: CART_PRODUCT_TABLE_NAME,
        });
    }
}

export default CartProductModel;
