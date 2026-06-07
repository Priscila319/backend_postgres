const livroModel = require("../models/livroModel");

async function listar(req, res) {
  try {
    const livros = await livroModel.findAll();
    return res.status(200).json(livros);
  } catch (err) {
    return res.status(500).json({ mensagem: "Erro ao listar livros.", erro: err.message });
  }
}

async function buscarPorId(req, res) {
  try {
    const { id } = req.params;
    const livro = await livroModel.findById(id);
    if (!livro) return res.status(404).json({ mensagem: "Livro não encontrado." });
    return res.status(200).json(livro);
  } catch (err) {
    return res.status(500).json({ mensagem: "Erro ao buscar livro.", erro: err.message });
  }
}

async function criar(req, res) {
  try {
    const { titulo, autor, ano, genero } = req.body;
    if (!titulo || !autor)
      return res.status(400).json({ mensagem: "Título e autor são obrigatórios." });
    const novoLivro = await livroModel.create({ titulo, autor, ano, genero });
    return res.status(201).json(novoLivro);
  } catch (err) {
    return res.status(500).json({ mensagem: "Erro ao criar livro.", erro: err.message });
  }
}

async function atualizar(req, res) {
  try {
    const { id } = req.params;
    const { titulo, autor, ano, genero } = req.body;
    if (!titulo || !autor)
      return res.status(400).json({ mensagem: "Título e autor são obrigatórios." });
    const livroAtualizado = await livroModel.update(id, { titulo, autor, ano, genero });
    if (!livroAtualizado) return res.status(404).json({ mensagem: "Livro não encontrado." });
    return res.status(200).json(livroAtualizado);
  } catch (err) {
    return res.status(500).json({ mensagem: "Erro ao atualizar livro.", erro: err.message });
  }
}

async function deletar(req, res) {
  try {
    const { id } = req.params;
    const removido = await livroModel.remove(id);
    if (!removido) return res.status(404).json({ mensagem: "Livro não encontrado." });
    return res.status(200).json({ mensagem: "Livro removido com sucesso." });
  } catch (err) {
    return res.status(500).json({ mensagem: "Erro ao deletar livro.", erro: err.message });
  }
}

module.exports = { listar, buscarPorId, criar, atualizar, deletar };
