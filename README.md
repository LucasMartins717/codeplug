# Codeplug

• [Introdução](#introdução)  
• [Funcionalidades](#funcionalidades)  
• [Estrutura do Projeto](#estrutura-do-projeto)  
• [Tecnologias](#tecnologias)  
• [Instalação](#instalação)  
• [Licença](#licença)  



## Introdução

***Codeplug*** é uma aplicação desenvolvida para gerenciar e exibir posts organizados. Conta com uma interface administrativa para criar, modificar, deletar ou copiar posts, além de uma interface com diferentes temas (light/dark). O projeto é estruturado em três partes principais: Admin, Server e Client.
<br/>ㅤ<br/>
![gifDemonstração](client/public/images/showGif3.gif)



## Funcionalidades

**Admin** 🛠️: O painel administrativo permite autenticação via login padrão (“admin/admin”). Oferece funcionalidades de criação, modificação, exclusão e cópia de posts. Também realiza a geração de tokens JWT para autenticação segura.

**Server** 🌐: API backend que gerencia a autenticação e integração com o banco de dados PostgreSQL. Permite a configuração personalizada por meio de variáveis no arquivo `.env`.

**Client** 💻: Interface pública para exibição dos posts, com funcionalidades de filtro por tags, suporte a temas claro e escuro, e visualização detalhada de posts, incluindo título, imagem, descrição e links de download e código-fonte.



## Estrutura do Projeto

  **Admin** 📋: Painel de gerenciamento para criar e editar posts.

  **Server** ⚙️: Backend que conecta a aplicação ao banco de dados e gerencia as requisições.

  **Client** 🖱️: Interface do usuário para visualização dos posts.



## Tecnologias

![React](https://img.shields.io/badge/-React-282C34?style=flat&logo=react&logoColor=61DAFB)
Usado para desenvolver a interface de usuário de todas as partes do projeto (Admin, Client), garantindo modularidade e interatividade.  

![TypeScript](https://img.shields.io/badge/-TypeScript-282C34?style=flat&logo=typescript&logoColor=3178C6)
Implementado para o desenvolvimento de todas as lógicas client-side, fornecendo tipagem estática e maior robustez no código.  

![Styled Components](https://img.shields.io/badge/-Styled--Components-282C34?style=flat&logo=styled-components&logoColor=DB7093)
Utilizado para estilizar todas as páginas do projeto com uma abordagem modular e dinâmica.  

![CSS](https://img.shields.io/badge/-CSS-282C34?style=flat&logo=css3&logoColor=1572B6)
Empregado para definir o design básico das páginas, como margens, cores e estilos globais.  

![Node.js](https://img.shields.io/badge/-Node.js-282C34?style=flat&logo=node.js&logoColor=339933)
Usado para implementar o servidor backend que gerencia autenticação, armazenamento de dados e lógica do sistema.  

![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-282C34?style=flat&logo=postgresql&logoColor=4169E1)
Banco de dados relacional utilizado para armazenamento e gerenciamento eficiente dos dados do sistema.  



## Instalação

### • Banco de Dados
1. Certifique-se de que o PostgreSQL esteja instalado em sua máquina.  

2. Crie um banco de dados chamado `codeplug`.

3. Configure a tabela `posts` executando o seguinte comando:

   ```sql
   CREATE TABLE posts (
       id SERIAL PRIMARY KEY,
       title VARCHAR(40) NOT NULL,
       description TEXT NOT NULL,
       image_url TEXT NOT NULL,
       tags TEXT[] NOT NULL,
       created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT CURRENT_TIMESTAMP,
       download_link TEXT NOT NULL,
       source_link TEXT NOT NULL
   );
   ```

    ### Clonagem do Repositório

    1. Clone o repositório do projeto com o seguinte comando:
    ```
    git clone https://github.com/LucasMartins717/codeplug
    ```

   ### Configuração do Servidor

   1. Navegue até o diretório `server` e crie um arquivo `.env` com o seguinte conteúdo:

   ```
   PG_USERNAME=seuUsuario
   PG_PASSWORD=suaSenha
   PG_HOST=localhost
   PG_PORT=5432
   PG_DATABASE=nomeDB
   SECRET_KEY=SEU_SECRET_KEY
   ```
    • SECRET_KEY: Gere uma chave segura em [jwtsecret.com/generate.](https://jwtsecret.com/generate)

   2. Use o script `.bat` incluído no projeto ou inicie o servidor com `node --watch server.js`.


    ### Configuração do Admin e Client

    1. Instale as dependências em cada uma das pastas usando `npm install`.

   ### Iniciar o Projeto

   1. Inicie o projeto com o start-all.bat.
    
    2. Você tambem pode iniciar o servidor e o client separadamente:
   - Para iniciar o servidor, use:
   ```
   node --watch server.js
   ``` 

   - Para iniciar o admin e o client, use:
   ```
   npm run dev
   ```



## Licença

• Este projeto utiliza a Licença MIT. Para mais informações, consulte o arquivo [LICENSE](./LICENSE).
