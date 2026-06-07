const express = require("express");
const cors = require("cors");
const livroRoutes = require("./routes/livroRoutes");

const app = express();


app.use(cors());              
app.use(express.json());      

app.get("/", (req, res) => {
  res.json({ mensagem: "API de Livros está funcionando! 📚" });
});

app.use("/livros", livroRoutes);

module.exports = app;
