# 🛒 Sistema de Pedidos (E-commerce Básico)

Este é um sistema de pedidos desenvolvido com **NestJS**, **PostgreSQL**, **Docker**, seguindo os princípios de **Clean Architecture** e utilizando **Swagger** para documentação da API.

---

## ✅ Funcionalidades

### 🔹 Módulo de Usuários

- Cadastro de usuários
- Listagem de usuários

### 🔹 Módulo de Produtos

- Cadastro de produtos com nome, descrição e preço
- Listagem de produtos

### 🔹 Módulo de Pedidos

- Criação de pedidos com múltiplos produtos
- Relacionamento com usuários
- Cálculo automático do valor total
- Listagem de pedidos com seus respectivos itens e usuários

---

## ⚙️ Tecnologias

- **NestJS**
- **PostgreSQL**
- **Docker + Docker Compose**
- **TypeORM**
- **Swagger**
- **Class-validator**

---

## 🚀 Como rodar o projeto

1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-projeto.git
cd seu-projeto
```

2. Suba os containers com Docker

```bash
docker-compose up --build
```

3. Acesse o Swagger

```bash
http://localhost:3000/api
```

---

🧪 Exemplos de Requisições
🔹 Criar Usuário

```bash
POST /users
{
  "name": "João",
  "email": "joao@email.com"
}
```

🔹 Criar Produto

```bash
POST /products
{
  "name": "Camiseta",
  "description": "Tamanho G",
  "price": 79.90
}
```

🔹 Criar Pedido

```bash
POST /orders
{
  "user_id": 1,
  "items": [
    { "product_id": 1, "quantity": 2 },
    { "product_id": 2, "quantity": 1 }
  ]
}
```

---

🧰 Endpoints principais (via Swagger)
POST /users - Criar usuário

GET /users - Listar usuários

POST /products - Criar produto

GET /products - Listar produtos

POST /orders - Criar pedido

GET /orders - Listar pedidos com itens e total
