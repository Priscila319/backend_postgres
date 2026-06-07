const express = require("express");
const router = express.Router();
const livroController = require("../controllers/livroController");

// As Routes definem QUAIS URLs existem e QUAL função do controller cada uma chama.
// Isso separa a definição das rotas da lógica de negócio.

// Rota: GET  /livros        → lista todos
// Rota: POST /livros        → cria novo
router.get("/", livroController.listar);
router.post("/", livroController.criar);

// Rota: GET    /livros/:id  → busca por ID
// Rota: PUT    /livros/:id  → atualiza por ID
// Rota: DELETE /livros/:id  → deleta por ID
router.get("/:id", livroController.buscarPorId);
router.put("/:id", livroController.atualizar);
router.delete("/:id", livroController.deletar);

module.exports = router;
