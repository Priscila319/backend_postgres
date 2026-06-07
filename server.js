const app = require("./src/app");
const { initDb } = require("./src/database");

const PORT = process.env.PORT || 3000;

initDb().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Servidor rodando na porta ${PORT}`);
    console.log(`📚 Rotas disponíveis:`);
    console.log(`   GET    /livros`);
    console.log(`   GET    /livros/:id`);
    console.log(`   POST   /livros`);
    console.log(`   PUT    /livros/:id`);
    console.log(`   DELETE /livros/:id`);
  });
}).catch(err => {
  console.error("❌ Erro ao conectar no banco:", err.message);
  process.exit(1);
});
