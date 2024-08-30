# Anotações

## React Query

- `pnpm i @tanstack/react-query`
- Cria cache de navegador para compartilhar entre as reqs
  - Havendo chamada de uma requisição por um outro componenete,
    se ela já foi feita, ele usa o cache
- crie o arquivo react-query instanciando o client (/lib/react-query.ts)
- `pnpm dlx shadcn-ui@latest add skeleton`: para efeitos de carregamento