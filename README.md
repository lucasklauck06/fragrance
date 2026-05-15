# Projeto Fragrance Hub

Este projeto consiste em uma plataforma para fragrâncias e perfumes.

## Estrutura do Projeto

O projeto é dividido em duas partes principais:
1. **Frontend (React + Vite)**: Aplicativo interativo, estruturado e com design moderno.
2. **Backend (Node.js + Express + TypeScript)**: API para gerenciamento de perfis, autenticação de usuários (Login/Cadastro) utilizando Prisma com Supabase (PostgreSQL).

## Como Configurar e Rodar o Projeto

### 1. Configuração do Banco de Dados (Supabase)
O projeto utiliza o banco de dados Supabase (PostgreSQL).
Para configurar o backend, siga as etapas:

1. Acesse a pasta do backend:
   ```bash
   cd backend
   ```
2. Configure as variáveis de ambiente:
   Abra o arquivo `.env` localizado na pasta `backend` e substitua a URL da variável `DATABASE_URL` pela sua connection string do Supabase. Exemplo:
   ```env
   DATABASE_URL="postgresql://postgres:[SUA_SENHA]@aws-1-sa-east-1.pooler.supabase.com:5432/postgres"
   JWT_SECRET="super-secret-key-change-me"
   PORT=3000
   ```
   > [!IMPORTANT]
   > **Nota sobre o Supabase**: Para sincronizar o banco de dados (`npx prisma db push`), utilize a porta **5432** (conexão direta). A porta **6543** (pooler) pode causar travamentos durante a sincronização.
3. Instale as dependências do backend:
   ```bash
   npm install
   ```
4. Execute as Migrations do Prisma para criar as tabelas `User` no banco de dados:
   ```bash
   npx prisma db push
   ```

### 2. Rodando o Backend
Com as dependências instaladas e o banco configurado, inicie o servidor:
```bash
npx nodemon src/index.ts
```
O backend estará rodando na porta `3000`.

### 3. Rodando o Frontend
1. Em um novo terminal, abra a raiz do projeto (onde está o frontend):
   ```bash
   npm install
   ```
2. Inicie o ambiente de desenvolvimento do Vite:
   ```bash
   npm run dev
   ```
O frontend estará acessível no navegador (geralmente em `http://localhost:5173`). O contexto de autenticação do Frontend (`AuthContext.tsx`) já está configurado para fazer requisições para a porta `3000` do Backend.

---

### Funcionalidades Implementadas
- **Backend API**:
  - `POST /api/auth/register`: Cadastro de usuários.
  - `POST /api/auth/login`: Autenticação e geração do Token JWT.
  - `GET /api/auth/profile`: Visualizar dados do próprio usuário autenticado.
  - `PUT /api/auth/profile`: Atualizar dados do usuário.
- **Frontend**:
  - Telas de Login e Rotas Protegidas (Ex.: Área administrativa `/admin` só pode ser acessada por usuários autenticados via componente `<ProtectedRoute>`).
- **Banco de Dados**: Configurado para funcionar nativamente com Supabase via **Prisma ORM 6**.
