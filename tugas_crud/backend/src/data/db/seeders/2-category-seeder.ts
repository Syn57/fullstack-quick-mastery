import { QueryInterface } from "sequelize";
import { CATEGORY_TABLE_NAME } from "../utils/DBConst.js";
import categorySeed from "./raw/categorySeed.json" with { type: "json" };

export default {
    up: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkInsert(CATEGORY_TABLE_NAME, categorySeed, {});
    },

    down: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkDelete(CATEGORY_TABLE_NAME, {});
    },
};
