import { QueryInterface } from "sequelize";
import { CART_TABLE_NAME } from "../utils/DBConst.js";
import cartSeed from "./raw/cartSeed.json" with { type: "json" };

export default {
    up: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkInsert(CART_TABLE_NAME, cartSeed, {});
    },

    down: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkDelete(CART_TABLE_NAME, {});
    },
};