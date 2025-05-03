import { QueryInterface } from "sequelize";
import { CART_PRODUCT_TABLE_NAME } from "../utils/DBConst.js";
import cartProductSeed from "./raw/cartProductSeed.json" with { type: "json" };

export default {
    up: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkInsert(CART_PRODUCT_TABLE_NAME, cartProductSeed, {});
    },

    down: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkDelete(CART_PRODUCT_TABLE_NAME, {});
    },
};
