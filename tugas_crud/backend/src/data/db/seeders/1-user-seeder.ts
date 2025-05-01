import { QueryInterface } from "sequelize";
import { USER_TABLE_NAME } from "../utils/DBConst.js";
import userSeed from "./raw/userSeed.json" with { type: "json" };

export default {
    up: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkInsert(USER_TABLE_NAME, userSeed, {});
    },

    down: async (queryInterface: QueryInterface) => {
        await queryInterface.bulkDelete(USER_TABLE_NAME, {});
    },
};
