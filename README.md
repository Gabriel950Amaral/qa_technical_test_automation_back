# CYPRESS TEST QA MELHOR ENVIO
-----------------------


Repositório com exemplos de testes automatizados para API Rest utilizando os frameworks e lib:
- cypress
- mocha

Os testes evoluíram bastante.
Hoje precisamos ter testes mais rápidos, fáceis e confiáveis para qualquer coisa que seja executada em um navegador ou por serviços.

> O **Cypress** veio para realizar esses testes rápidos, fáceis e confiáveis: [CONHECER CYPRESS](https://github.com/cypress-io/cypress)

**Nota:** Incluída a lib **Mocha** para uma estrutura de teste (JS) simples, flexível e divertida.
[CONHECER MOCHA](https://github.com/mochajs/mocha)

-----------------------


## Tabela de contexto

> Índice `README`.

  - [Pré Requisitos](#pré-requisitos)
  - [Configuração](#configuração)
  - [Instalação](#instalação)
  - [Como Testar](#como-testar)
  - [Reporte](#report)
  - [Suporte](#suporte)


-----------------------

### Pré Requisitos

- [node e npm](https://nodejs.org/en/)
- [vscode ou outra IDE](https://code.visualstudio.com/download)
- [cypress](https://www.cypress.io/)

-----------------------

### Configuração

- Criar um arquivo na raiz do projeto chamado _cypress.env.json_ e incluir os seguintes dados:

```json
{
    "EMAIL": "email@valido.com",
    "PASSWORD": "senha_valida"
}
```

**Nota Importante:** Isso foi feito para simular uma possível _"não exposição"_ para o tratamento quanto a dados sensíveis. Porém, coloquei os dados no README para facilitar a todos.

O arquivo **_cypress.env.json_** neste projeto, encontra-se no _.gitignore_. Logo, faz-se necessário cria-lo assim que baixar. Há um arquivo chamado **_.cypress.env.example_** ilustrando o local e como o arquivo precisa ser preenchido.


-----------------------

### Instalação

> Clonar projeto

- Clonar este repositório usando _ssh_ ou _https_.

> exemplo:

```js
$ git clone https://github.com/Gabriel950Amaral/test_back_final_melhor_envio
```


> Dicas

- Utilize o seu _package-lock.json_ para versionar as dependências do seu projeto.


-----------------------

### Como testar

> Para instalar as dependências do repositório:

```js
$ npx ci
```

> Para rodas os testes:

```js
$ npx test
```

> Para rodar os testes no modo interativo do cypress:

```js
$ npx run cy:open
```

> Para rodar os testes no modo headless do cypress:

```js
$ npx run cy:run
```

-----------------------

### Reporte

> Para gerar relatórios depois dos testes localmente:

```js
$ npm run allure:report
```

> Para gerar um histórico de relatórios depois dos testes localmente:

```js
$ npm run allure:history
```

> Para limpar os relatórios dos testes localmente:

```js
$ npm run allure:clear
```

-----------------------

-----------------------


### Suporte

- Linkedin: <a href="https://www.linkedin.com/in/gabriel-a-60ba8922a/" target="_blank">**Gabriel Amaral**</a>

- E-mail: **gabrielgta.com@gmail.com**


-----------------------

