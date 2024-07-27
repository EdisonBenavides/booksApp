//Importa el modelo desde models
const { Book } = require("../models");

//Función para obtener todos los libros de la base de datos
exports.getAllBooks = async (req, res) => {
  try {
    //findAll recupera todos los registros de la tabla books
    const books = await Book.findAll();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Función para obtener la información de un libro por el id
exports.getById = async (req, res) => {
  try {
    //Extraemos el id, parámetro de la url
    const { id } = req.params;
    //findByPK recupera datos en base a un id específico
    const books = await Book.findByPk(id);
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};