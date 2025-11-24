# Projeto Web - Sistema de Gerenciamento

Sistema completo para gerenciamento de Livros, DVDs, CDs e Autores com API REST e MongoDB.

## Características

- **4 Entidades**: Livros, DVDs, CDs e Autores com relacionamentos
- **API REST** completa (CRUD)
- **MongoDB** como banco de dados
- **Autenticação JWT** simples
- **Métodos GET** públicos
- **Métodos POST, PUT, DELETE** requerem autenticação

## Instalação

1. Clone o repositório
2. Instale as dependências:
```
npm install
```

3. Configure o arquivo `.env` (copie de `.env.example`):
```
MONGODB_URI=mongodb://localhost:27017/projetoweb
PORT=3000
JWT_SECRET=seu_segredo_jwt
```

4. Certifique-se de que o MongoDB está rodando

5. Inicie o servidor:
```
npm start
```

Ou em modo desenvolvimento:
```
npm run dev
```

## Uso

- Acesse `http://localhost:3000` para a interface web
- A API está disponível em `http://localhost:3000/api`

### Endpoints da API

#### Autenticação
- `POST /api/auth/register` - Registrar novo usuário
- `POST /api/auth/login` - Fazer login

#### Autores
- `GET /api/autores` - Listar todos
- `GET /api/autores/:id` - Obter um autor
- `POST /api/autores` - Criar (requer autenticação)
- `PUT /api/autores/:id` - Atualizar (requer autenticação)
- `DELETE /api/autores/:id` - Deletar (requer autenticação)

#### Livros
- `GET /api/livros` - Listar todos
- `GET /api/livros/:id` - Obter um livro
- `POST /api/livros` - Criar (requer autenticação)
- `PUT /api/livros/:id` - Atualizar (requer autenticação)
- `DELETE /api/livros/:id` - Deletar (requer autenticação)

#### DVDs
- `GET /api/dvds` - Listar todos
- `GET /api/dvds/:id` - Obter um DVD
- `POST /api/dvds` - Criar (requer autenticação)
- `PUT /api/dvds/:id` - Atualizar (requer autenticação)
- `DELETE /api/dvds/:id` - Deletar (requer autenticação)

#### CDs
- `GET /api/cds` - Listar todos
- `GET /api/cds/:id` - Obter um CD
- `POST /api/cds` - Criar (requer autenticação)
- `PUT /api/cds/:id` - Atualizar (requer autenticação)
- `DELETE /api/cds/:id` - Deletar (requer autenticação)
