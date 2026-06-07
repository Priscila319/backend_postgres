const { pool } = require("../database");
const { v4: uuidv4 } = require("uuid");

async function findAll() {
  const result = await pool.query('SELECT * FROM livros ORDER BY "criadoEm" DESC');
  return result.rows;
}

async function findById(id) {
  const result = await pool.query("SELECT * FROM livros WHERE id = $1", [id]);
  return result.rows[0] || null;
}

async function create({ titulo, autor, ano, genero }) {
  const result = await pool.query(
    `INSERT INTO livros (id, titulo, autor, ano, genero)
     VALUES ($1, $2, $3, $4, $5)
     RETURNING *`,
    [uuidv4(), titulo, autor, ano || null, genero || null]
  );
  return result.rows[0];
}

async function update(id, { titulo, autor, ano, genero }) {
  const result = await pool.query(
    `UPDATE livros
     SET titulo = $1, autor = $2, ano = $3, genero = $4, "atualizadoEm" = NOW()
     WHERE id = $5
     RETURNING *`,
    [titulo, autor, ano || null, genero || null, id]
  );
  return result.rows[0] || null;
}

async function remove(id) {
  const result = await pool.query("DELETE FROM livros WHERE id = $1 RETURNING id", [id]);
  return result.rowCount > 0;
}

module.exports = { findAll, findById, create, update, remove };
