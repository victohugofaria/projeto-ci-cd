// Importa o framework Express para criar a API
const express = require("express");
const app = express();
app.use(express.json());
// Rota principal (GET /)
app.get("/", (req, res) => {
  res.json({ mensagem: "API funcionando!" }); // Quando acessada, retorna uma mensagem confirmando que a API está funcionando
});

// Rota de soma (GET /soma?a=5&b=3)
// Recebe dois números como parâmetros na URL e retorna a soma deles
app.get("/soma", (req, res) => {
  // Pega os valores 'a' e 'b' e converte para número
  const { a, b } = req.query;
  const resultado = Number(a) + Number(b);
  res.json({ resultado });
});

module.exports = app;
