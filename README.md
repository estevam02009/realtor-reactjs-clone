# Projeto de Site de Imobiliária

Bem-vindo ao projeto do site de imobiliária! Este projeto utiliza React.js para o frontend e Firestore para o backend. Abaixo você encontrará informações sobre o projeto, como configurá-lo e usá-lo.

## Índice

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
- [Uso](#uso)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Visão Geral

Este projeto é um site de imobiliária que permite aos usuários procurar por imóveis, ver detalhes das propriedades, e entrar em contato com corretores. O site é responsivo e oferece uma experiência de usuário amigável.

## Funcionalidades

- Pesquisa de imóveis por localização, preço, e outros critérios
- Visualização de detalhes dos imóveis
- Contato com corretores via formulário de contato
- Autenticação de usuários
- Cadastro e login de usuários

## Tecnologias Utilizadas

- **Frontend**: [React.js](https://reactjs.org/)
- **Backend**: [Firestore](https://firebase.google.com/products/firestore)
- **Outras**:
  - React Router
  - Firebase Authentication
  - Firebase Hosting

## Instalação

### Pré-requisitos

- Node.js
- npm ou yarn
- Conta no Firebase

### Passo a Passo

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio

2. Instale as dependências
    ```bash
    npm install
    # ou
    yarn install

3. Configure o Firebase
    . Crie um projeto no Firebase Console
    . Adicione um aplicativo web ao projeto
    . Copie as configurações do Firebase para um arquivo `.env` na raiz do projeto

    REACT_APP_FIREBASE_API_KEY=YOUR_API_KEY
    REACT_APP_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
    REACT_APP_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
    REACT_APP_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
    REACT_APP_FIREBASE_APP_ID=YOUR_APP_ID

4. Inicie o projeto
    ```bash
        npm start
        # ou
        yarn start

    
# Uso
    Depois de iniciar o projeto, você pode acessá-lo em http://localhost:3000. Use a interface para procurar imóveis, visualizar detalhes e entrar em contato com corretores.

# Estrutura de Pastas
    /

# Contribuição
    Contribuições são bem-vindas! Se você tiver sugestões de melhorias, por favor, abra uma issue ou envie um pull request.






