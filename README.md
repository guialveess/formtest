# Dynamic Forms

Dynamic Forms é uma aplicação web para criação e resposta de formulários dinâmicos com múltiplos tipos de perguntas e lógica condicional. Desenvolvido com Next.js, TypeScript, TailwindCSS e Prisma.

## Instalação

Clone o projeto e instale as dependências usando Yarn ou NPM:

```bash
git clone https://github.com/guialveess/formtest
cd formtest
yarn install
# ou
npm install
```

## Configuração

Crie um arquivo `.env` com base no exemplo:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/formtest"
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

Inicie o banco de dados local com Docker:

```bash
docker-compose up -d
```

Execute as migrations e seeds:

```bash
npx prisma migrate dev
npx prisma db seed
```

## Execução

Rode o servidor de desenvolvimento:

```bash
yarn dev
# ou
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## Scripts Úteis

```bash
# Iniciar projeto em dev
yarn dev

# Build de produção
yarn build

# Lint e Prettier
yarn lint
yarn format

# Prisma Studio
npx prisma studio
```

## Tecnologias

- Next.js (App Router)
- TypeScript
- TailwindCSS + ShadCN UI
- Prisma + PostgreSQL
- React Hook Form + Zod
- dnd-kit

## Contribuição

Pull requests são bem-vindos. Para mudanças maiores, abra uma issue primeiro para discutir o que você gostaria de modificar.

Por favor, atualize os testes conforme apropriado.

## Licença

[MIT](https://choosealicense.com/licenses/mit/)
