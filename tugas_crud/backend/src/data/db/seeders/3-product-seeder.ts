import { QueryInterface } from "sequelize";
import { PRODUCT_TABLE_NAME } from "../utils/DBConst.js";
import productSeed from "./raw/productSeed.json" with { type: "json" };

export default {
    up: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkInsert(PRODUCT_TABLE_NAME, productSeed, {});
    },

    down: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkDelete(PRODUCT_TABLE_NAME, {});
    },
};
