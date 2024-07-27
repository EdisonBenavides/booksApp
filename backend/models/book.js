//Importamos DataTypes de sequelize para definir los tipos de datos
const { DataTypes } = require("sequelize");
//Importa la configuración de la base de datos
const sequelize = require("../config/database");

//Definimos el modelo
const Book = sequelize.define(
  "Book",
  {
    tittle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    published_year: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: "books",
  }
);

//Exporta el modelo Book
module.exports = Book;