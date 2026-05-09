// Importa a aplicação configurada no index.js
const app = require("./index");

// Define a porta do servidor
const PORT = process.env.PORT || 3000; // Se não houver porta do ambiente, usa a porta 3000 como padrão local

// Inicia o servidor e fica "escutando" por requisições na porta definida
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
