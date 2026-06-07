const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
});

// Cria a tabela se não existir
async function initDb() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS livros (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      titulo VARCHAR(255) NOT NULL,
      autor VARCHAR(255) NOT NULL,
      ano INTEGER,
      genero VARCHAR(100),
      "criadoEm" TIMESTAMPTZ DEFAULT NOW(),
      "atualizadoEm" TIMESTAMPTZ
    )
  `);
  console.log("✅ Tabela 'livros' pronta.");
}

module.exports = { pool, initDb };
