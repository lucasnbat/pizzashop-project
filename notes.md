# Setup

- Tratamentos iniciais:
  - Eliminar dep. do eslint padrão;
  - Eliminar eslint config padrão;
  - Eliminar favicon;
- Instalação e configuração do shadcn/ui;
  - npm install -D tailwindcss postcss autoprefixer
  - npx tailwindcss init -p
  - (Esses comandos ascima geram o arquivo PostCSS e TailwindCSS)
  - ajustes de caminho com @:
    - para o ts entender:
      - Siga os passos de colar as opções de compilerOptions la do site oficial;
    - para o vite entender:
      - Instalar tipos do node: `npm i @types/node -D`
      - Edite o vite.config com a chave "resolve" que está no site oficial;
  - inicializar: npx shadcn-ui@latest init
    - New York: mais apertados, menos padding; default: mais padding;
    - Tom de cinza: zinc;
    - pasta para global css: src/global.css;
    - Where is your tailwind.config.js located: deixa o padrão;
    - onde vai ficar os componentes: @/components;
    - utilitarios: @/lib/utils;
    - react server components = só se você estiver usando nextjs;
    - sempre busque deixar variaveis css ativadas;
- components.json: configurações do shadcn/ui;
- global.css: configurações de variaveis css e etc;

# Início dos trabalhos

- `npx shadcn-ui@latest add button`
- Configurando eslint e prettier:
  - `npm i eslint @rocketseat/eslint-config -D`
  - `npm i -D prettier-plugin-tailwindcss`
    - depois cria prettier.config.js
      - cola o module.exports = {plugins: ['prettier-plugin-tailwindcss']}
- `npm i react-helmet-async`
  - Usamos isso (configuração no App.tsx) para fazer cabeçalho otimizado;
- foreground: contrario de background. use isso em componentes que
  você quer que respondam com cores inversas a cor do fundo;
- text-muted-foregorund: sempre temos a opção default x foreground
  das fontes, isso serve para caso vc sempre prefira a cor que da 
  contraste com o fundo (foreground) ao inves da default;
- input e label: `npx shadcn-ui@latest add input label`
- Para mudar as cores conforme o tema desejado, vá:
  - shadcn/ui > themes > seleciona o tema > copia > substitui a primeira
    @layerbase do global.css pela layerbase copiada, e pronto!

## Trabalhando com formulários e validações destes

- `npm i react-hook-form zod @hookform/resolvers`

## Toasts com sonner

- `npm i sonner`
- Só colocar o componente Toaster na raiz (App.tsx) e sair usando;