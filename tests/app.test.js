// Importa o supertest para simular requisições HTTP nos testes
const request = require("supertest");
const app = require("../src/index");

// Agrupa todos os testes relacionados à API
describe("Testes da API", () => {
  // Testa se a rota principal retorna a mensagem correta
  test("GET / deve retornar mensagem de funcionamento", async () => {
    // Faz uma requisição GET na rota '/'
    const res = await request(app).get("/");
    // Verifica se o status HTTP é 200
    expect(res.statusCode).toBe(200);
    // Verifica se a mensagem é a esperada
    expect(res.body.mensagem).toBe("API funcionando!");
  });
  // Testa se a rota de soma é o resultado correto
  test("GET /soma deve somar dois números", async () => {
    // Faz uma requisição GET na rota '/soma' passando a=5 e b=3
    const res = await request(app).get("/soma?a=5&b=3");
    expect(res.statusCode).toBe(200);
    // Verifica se o resultado da soma é 8
    expect(res.body.resultado).toBe(8);
  });
});
