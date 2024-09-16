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
  - `pnpm i @testing-library/jest-dom`
    - funcionalidades extras para fazer testes na DOM (docs html)
      - ex: função `toBeVisible()`
  - Depois de instalar jest-dom, você cria o arquivo test/setup.ts na raiz e escreve:
    - ```b
      import '@testing-library/jest-dom/vitest'
      ```
    - depois, no `vite.config.ts`:
      
      ```b
       test: {
        globals: true,
        setupFiles: ['./test/setup.ts'] //adiciona isso
      }
      ```
- jsdom: implementação de DOM usando JS puro para simular um DOC para dizer se
  gerou ou não interface. 
  - Tem um mais recente: happy-dom
    - ` pnpm i -D  happy-dom`
    - depois, em `vite.config.ts`:
      
      ```b
        test: {
          globals: true,
          setupFiles: ['./test/setup.ts'],
          environment: 'happy-dom', //adiciona isso
        }
      ```
- ainda em `tsconfig.json`:
  - ```b
      "include": [
        "src", "test"
      ],
    ```
- `pnpm i -D @testing-library/user-event` : lidar com eventos disparados por user

## Mocking

* Ex. de ferramentas:    
  
  * Mocking Service Working (MSW);
  
  * MirageJS;

* Mocking Service Worker atua como um pequeno servidor que vai recebendo e respondendo requisições como o seu backend, simulando ele;

* ```shell
  pnpm install msw -D
  ```

* ```shell
  pnpm msw init public
  # isso vai fazer public/ser o repositorio do worker. 
  # se public não existir, crie
  ```

* `mockServiceWorker.js` é o arquivo do server de mocking;
  
  * Ele fica vigiando as reqs, procura se há algum mock arquivo backend para responder e envia a resposta se esse último existe;

* script para configurar no package:

* ```shell
  "dev:test":"vite --port 50789 --mode test", 
  
  # isso permite você rodar a aplicação em modo teste
  # "mode" é como se fosse uma var .env, mas em vite (vite não usa ts)
  # selecionamos uma porta que não corra risco de conflito
  ```

* Configure os arquivos `/api/mocks/index.ts` e adicione a variável ambiente em `.env`

* Lembre também de usar o `enableMSW().then()` ao redor da sua aplicação em `main.tsx`. Mais detalhes no repositório;