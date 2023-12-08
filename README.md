
# Projeto PCF com React e Fluent UI

Este projeto contém alguns componentes personalizados para o Power Apps, criados com o Power Apps Component Framework (PCF) e o Fluent UI React v9. Os componentes são baseados nos controles de formulário do Fluent UI, como Input, Button, Checkbox, etc.

## Pré-requisitos

Para usar este projeto, você precisa ter instalado o seguinte:

- Visual Studio Code
- Microsoft Power Platform CLI
- Node.js
- React
- Fluent UI React v9

## Como criar um componente PCF com React e Fluent UI

Siga estes passos para criar um componente PCF com React e Fluent UI:

1. Abra o Visual Studio Code e crie uma nova pasta para o seu projeto.
2. Abra um terminal e navegue até a pasta do seu projeto.
3. Execute o seguinte comando para inicializar o projeto PCF com React:

```bash
pac pcf init -n NomeDoComponente -ns NomeDoNamespace -t field -fw react -npm
```

4. Isso irá criar os arquivos necessários para o seu componente, como index.ts, ControlManifest.Input.xml, NomeDoComponente.tsx, etc. Também irá instalar as dependências do projeto, incluindo o React e o Fluent UI React v9.
5. Abra o arquivo NomeDoComponente.tsx e comece a escrever o código do seu componente, usando os componentes do Fluent UI. Você pode consultar a documentação oficial do Fluent UI¹ para ver exemplos de código e propriedades dos componentes.
6. Abra o arquivo ControlManifest.Input.xml e defina os parâmetros de entrada e saída do seu componente, como o tipo de dados, o nome, a descrição, etc.
7. Abra o arquivo index.ts e conecte o seu componente React com o PCF, usando a classe ReactFrameworkWrapper. Você pode ver um exemplo de como fazer isso neste artigo².
8. Salve os seus arquivos e execute o seguinte comando para testar o seu componente no navegador:

```bash
npm start
```

9. Isso irá abrir uma janela do navegador com o seu componente renderizado em um campo de teste. Você pode alterar os valores dos parâmetros de entrada e saída e ver como o seu componente se comporta.
10. Quando estiver satisfeito com o seu componente, execute o seguinte comando para construir o pacote do seu componente:

```bash
npm run build
```

11. Isso irá gerar um arquivo zip na pasta out\controls, que contém o seu componente PCF pronto para ser implantado no Power Apps.

## Como implantar e usar o seu componente PCF no Power Apps

Siga estes passos para implantar e usar o seu componente PCF no Power Apps:

1. Abra o Power Apps Maker Portal e crie uma nova solução ou abra uma solução existente.
2. Clique em Adicionar existente e selecione Componente de código.
3. Clique em Procurar e selecione o arquivo zip do seu componente PCF, que você gerou no passo anterior.
4. Clique em Adicionar e aguarde até que o seu componente seja adicionado à solução.
5. Clique no seu componente na lista de componentes da solução e edite as propriedades do seu componente, como o nome, a descrição, o ícone, etc.
6. Salve a sua solução e publique-a.
7. Abra um aplicativo de modelo ou uma página personalizada no Power Apps e adicione o seu componente PCF a um formulário ou a uma tela.
8. Configure as propriedades do seu componente PCF, como o campo de dados vinculado, os parâmetros de entrada e saída, etc.
9. Salve e publique o seu aplicativo ou página e teste o seu componente PCF em ação.

