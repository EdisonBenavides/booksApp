//Importamos Express
const express = require("express");
//Importa router desde Express para definir las rutas
const router = express.Router();
//Importamos el controlador bookController
const bookController = require("../controllers/bookController");

//Define una ruta que ejecuta la función getAllBooks del controlador
router.get("/books", bookController.getAllBooks);
//Define una ruta que ejecuta la función getById del controlador
router.get("/books/:id", bookController.getById);

module.exports = router;