//Importamos Express
const express = require("express");
//Importamos las rutas de bookRoutes
const bookRoutes = require("./routes/bookRoutes");
const bodyParser = require("body-parser");
//Importa la configuración de la base de datos
const sequelize = require("./config/database");

//Instancia de Express
const app = express();
app.use(bodyParser.json());
//Monta las rutas del bookRoutes con el prefijo /api
app.use("/api", bookRoutes);

sequelize
  //Sincroniza los modelos con la base de datos
  .sync()
  .then(() => {
    //Inicia el servidor en el puerto 3000
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database", error);
  });












  /*app.get("/books", (req, res) => {
  try {
    res.send(readData());
  } catch (error) {
    console.log(error);
    res.send("ERROR REVISE LA CONSOLA");
  }
});
app.get("/books/:id", (req, res) => {
  const data = readData();
  const id = parseInt(req.params.id);
  const book = data.books.find((book) => book.id === id);
  res.json(book);
});

app.post("/books", (req, res) => {
  const data = readData();
  const body = req.body;
  console.log(body);
  const newBook = {
    id: data.books.length + 1,
    ...body,
  };
  data.books.push(newBook);
  writeData(data);
  res.send(newBook);
});

app.put("/books/:id", (req, res) => {
  const data = readData();
  const body = req.body;
  const id = parseInt(req.params.id);
  const bookIndex = data.books.findIndex((book) => (book.id = id));
  data.books[bookIndex] = {
    ...data.books[bookIndex],
    ...body,
  };
  writeData(data);
  res.json({ message: "Book updated successfully" });
});

app.delete("/books/:id", (req, res) => {
  const data = readData();
  const id = parseInt(req.params.id);
  const bookIndex = data.books.findIndex((book) => book.id === id);
  data.books.splice(bookIndex, 1);
  writeData(data);
  res.json({ message: "Book deleted successfully" });
});

const readData = () => {
  try {
    const data = fs.readFileSync("./books.json");
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
};

const writeData = (data) => {
  try {
    fs.writeFileSync("./books.json", JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};*/
