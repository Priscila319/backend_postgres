# 📚 Backend — CRUD de Livros

API REST para gerenciamento de livros, desenvolvida com Node.js, Express e PostgreSQL.

---

## Tecnologias

- Node.js (>=18)
- Express 5
- PostgreSQL
- UUID

---

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado na máquina
- Um banco de dados PostgreSQL (local ou via [Render](https://render.com))

---

## Instalação

```bash
# Clone o repositório
git clone https://github.com/Priscila319/backend_postgres.git
cd backend_postgres

# Instale as dependências
npm install
```

---

## Configuração

Crie um arquivo `.env` na raiz do projeto com a seguinte variável:

```env
DATABASE_URL=postgresql://usuario:senha@host:porta/nomebanco
NODE_ENV=development
```

> Para produção no Render, essas variáveis são configuradas no painel do serviço.

---

## Execução

```bash
# Iniciar o servidor
npm start
```

O servidor irá rodar em `http://localhost:3000` e criará a tabela `livros` automaticamente se ela não existir.

---

## Rotas disponíveis

| Método | Rota           | Descrição                  |
|--------|----------------|----------------------------|
| GET    | `/livros`      | Lista todos os livros      |
| GET    | `/livros/:id`  | Busca um livro pelo ID     |
| POST   | `/livros`      | Cria um novo livro         |
| PUT    | `/livros/:id`  | Atualiza um livro pelo ID  |
| DELETE | `/livros/:id`  | Remove um livro pelo ID    |

### Exemplo de corpo para POST/PUT

```json
{
  "titulo": "Dom Casmurro",
  "autor": "Machado de Assis",
  "ano": 1899,
  "genero": "Romance"
}
```
