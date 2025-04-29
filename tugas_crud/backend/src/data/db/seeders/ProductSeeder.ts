import { QueryInterface, Sequelize } from "sequelize";
import { PRODUCT_TABLE_NAME } from "../utils/DBConst.js";

export default {
    async up(queryInterface: QueryInterface, Sequelize: Sequelize) {
        let products = [
            {
                id: "1",
                name: "Product 1",
                price: 10.0,
                category: "Category 1",
                stock: 100,
            },
            {
                id: "2",
                name: "Product 2",
                price: 20.0,
                category: "Category 2",
                stock: 200,
            },
            {
                id: "3",
                name: "Product 3",
                price: 30.0,
                category: "Category 3",
                stock: 300,
            }
        ];

        await queryInterface.bulkInsert(PRODUCT_TABLE_NAME, products, {});
    },

    async down(queryInterface: QueryInterface, _: Sequelize) {
        await queryInterface.bulkDelete(PRODUCT_TABLE_NAME, {});
    },
};