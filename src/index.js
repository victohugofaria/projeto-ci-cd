// Importa o framework Express para criar a API
const express = require("express");
const app = express();
app.use(express.json());
// Rota principal (GET /)
app.get("/", (req, res) => {
  res.json({ mensagem: "API funcionando!" }); // Quando acessada, retorna uma mensagem confirmando que a API está funcionando
});
module.exports = app;
