//Importación del sequelize
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("library", "postgres", "EdinhoQB", {
    host: "localhost",
    dialect: "postgres"
})

module.exports = sequelize;