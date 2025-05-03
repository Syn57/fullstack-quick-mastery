import { Association, DataTypes, Model, NonAttribute, Sequelize } from "sequelize";
import { CATEGORY_MODEL_NAME, CATEGORY_TABLE_NAME } from "../utils/DBConst.js";
import { CategoryDB } from "./type/CategoryDB.js";
import { ProductDB } from "./type/ProductDB.js";
import ProductModel from "./product.model.js";

class CategoryModel extends Model<CategoryDB> {
    
    public products?: ProductDB[]

    public static readonly associations: {
        products: Association<CategoryModel, ProductModel>;
    };

    static initModel(sequelize: Sequelize) {
        CategoryModel.init({   
            id: {
                type: DataTypes.STRING,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
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
            modelName: CATEGORY_MODEL_NAME,
            tableName: CATEGORY_TABLE_NAME,
        });
    }
}

export default CategoryModel ;
