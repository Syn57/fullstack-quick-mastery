import { Model, DataTypes, Sequelize } from "sequelize";
import { PRODUCT_MODEL_NAME, PRODUCT_TABLE_NAME } from "../utils/DBConst.js";
import { ProductDB } from "src/data/db/models/ProductDB.js";

class ProductModel extends Model<ProductDB> {
    static initModel(sequelize: Sequelize) {
        ProductModel.init(
            {   
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
                    allowNull: true,
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
                },
                updatedAt: {
                    type: DataTypes.DATE,
                    allowNull: false,
                }
            },
            {
                sequelize,
                modelName: PRODUCT_MODEL_NAME,
                tableName: PRODUCT_TABLE_NAME,
            }
        );
    }
}

export default ProductModel ;
