//Importa la configuración de la base de datos
const sequelize = require("../config/database");
//Importa el modelo Book
const Book = require("./book");

const db = {
  sequelize,
  Book,
};

module.exports = db;