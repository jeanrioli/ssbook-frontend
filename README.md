# Prova Frontend

Esse projeto foi criado com [Create React App](https://github.com/facebook/create-react-app). Certifique-se de ter `Node` e `Npm` instalados.

## Como executar

No diretório do projeto, rode o comando:

### `npm install`

Após ter instalado as dependências, rode o comando:

### `npm start`

Acesse [http://localhost:3000](http://localhost:3000) no navegador para visualizar a aplicação.

## Decisões de projeto

- Optei por usar Typescript para melhor gerenciamento de tipos de componentes e de respostas de API;
- Optei por usar Styled Components para melhor organização de estilos e por ser otimizado para gerenciamento de variantes;
- Optei por criar um arquivo geral de temas para gerenciar cores e estilos de fontes;
- Optei por deixar alguns componentes como Header e Footer com tamanho fixo;
- Por falta de protótipo no Figma, optei por não tratar possíveis erros nas chamadas da api.
- Na tela do livro, optei por mostrar sempre todo o conteúdo da capa, mantendo a largura e deixando a altura responsiva.

## Premissas assumidas

- Por não haver detalhamento do comportamento da tela de livro no Figma, assumi que todos os componentes são estáticos;
- Por se tratar de uma plataforma, segui alguns parâmetros de HTML semântico, mas não me aprofundei a ponto de atender às regras de SEO, por exemplo;
- Assumi que as abas Meus livros e Emprestados referem-se a todo o conteúdo da página Início;
- Assumi que não era necessário tratamento de performance quanto ao número de chamadas executadas. Dessa forma, elas são executadas sempre que o componente é renderizado;
- Por não haver protótipo no Figma, assumi que não deveria tratar possíveis erros na chamada, bem como retorno de loading enquanto ela está sendo executada.
