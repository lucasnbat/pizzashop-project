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

## Vitest

- `pnpm add -D vitest`
- seu `vite.config.ts` deve ficar assim:
  ```b
  // https://vitejs.dev/config/
  export default defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    test: {
      globals: true,
    }
  } as UserConfig & { // isso serve para reescrever a configuração vite para tipada
    test: InlineConfig
  })
  ```
- Adicione ao `tsconfig.json`:
  ```b
    "types":["vitest/globals"],
  ```
- Essas duas últimas configs destinam-se a tipar o vitest para usarmos as funções
  dele globalmente, sem necessidade de importar por arquivo;
- Usaremos a Testing Library para testar com elementos da DOM;
- Passos:
  - `pnpm i @testing-library/react @testing-library/dom -D`