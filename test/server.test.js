import request from "supertest";
import app from "./../src/index";

//const request = supertest('http://localhost:8000');


test('Servidor na porta 3000', async () => {
    const resposta = await request(app).get('/');
    expect(resposta.status).toBe(200);
});