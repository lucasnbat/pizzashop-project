# Anotações

## React Query

- `pnpm i @tanstack/react-query`
- Cria cache de navegador para compartilhar entre as reqs
  - Havendo chamada de uma requisição por um outro componenete,
    se ela já foi feita, ele usa o cache
- crie o arquivo react-query instanciando o client (/lib/react-query.ts)
- `pnpm dlx shadcn-ui@latest add skeleton`: para efeitos de carregamento

## Tipos de estado no react

- Local state (estado dentro de componentes, ex: useState())
- Global State (estados acessados por varios componentes, ex: Redux)
- HTTP State (estado dos dados retornadnos das req HTTP, ex: dados que ficam no useQuery())
  - Fazemos isso com onSucess dentro do useMutation
  - Essa função onSucess recebe:
    - data = dados retornados
    - variables = variaveis usadas (no update, no delete, etc, o que vc mandou na req)
    - context = outros dados

## Paginação

- O pageIndex em `pagination.tsx` representa o indice do array
- Quando estamos em `orders.tsx`, principalmente na função `handlePaginate`,
  estamos basicamente tratando pageIndex como o numero cru que aparece para
  o usuário (para o usuário 1, para os computadores, 0);