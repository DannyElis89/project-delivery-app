# Bem vindos ao projeto App de Delivery!

<summary>
  <strong>👨‍💻 O que foi desenvolvido</strong>
</summary><br>

Este projeto foi desenvolvido em equipe com a finalidade de criar uma plataforma de entrega de comidas e bebidas, integrando tanto o back-end quanto o front-end.

Além do aspecto técnico, um dos objetivos centrais foi aprimorar nossas habilidades interpessoais e colaborativas, visando um desenvolvimento integral. 🍺

<details>
<summary><strong>👨‍💻 Desenvolvedores</strong></summary><br>

[Danny Elis Simioni](https://github.com/DannyElis89) (Back-end)<br>
[Douglas Toledo](https://github.com/duskimm) (Front-end)<br>
[Henrique Gouvea](https://github.com/Henrique-Gouvea) (Front-end)<br>
[Henrique Nascimento](https://github.com/HenriqueNasciment0) (Back-end)<br>
</details>

<details>
<summary>
  <strong>👨‍💻 Linguagens de programação e framewors</strong>
</summary><br>

- <i>Linguagem de programação:</i> o projeto utiliza a linguagem de programação JavaScript, tanto no lado do cliente (com o uso de bibliotecas como React) quanto no lado do servidor (com o uso do Node.js).

- <i>Frameworks:</i> o projeto faz uso de vários frameworks, incluindo o React Native para a criação da interface do usuário e o Express.js para a criação da API do servidor.

- <i>Banco de dados:</i> o projeto utiliza o banco de dados MongoDB para armazenar informações sobre os usuários, pedidos e restaurantes.

- <i>Autenticação:</i> o projeto utiliza o JWT (JSON Web Tokens) para autenticar usuários e proteger rotas no servidor.

- <i>Outras tecnologias:</i> o projeto também utiliza outras tecnologias, como o Google Maps API para a exibição de mapas e localização de restaurantes, além do Stripe API para processamento de pagamentos.


Cada uma dessas tecnologias é essencial para o funcionamento do aplicativo de entrega de comida, e todas são fundamentais para garantir que os usuários possam fazer pedidos, rastrear sua comida e realizar pagamentos de forma segura e eficiente.
</details>

<details>
  <summary>
    <strong>👷 Estruturação do projeto</strong>
  </summary><br>

  Para facilitar o entendimento, podemos dividir a aplicação em **4 fluxos principais**, **uma validação de status entre cliente e pessoa vendedora** e **cobertura de testes (`front-end` e `back-end`)**:

  - **Fluxo Comum** que compreende:
    - (1) Tela de Login;
    - (2) Tela de Registro.

  - **Fluxo do Cliente** que compreende: :
    - (3) Tela de Produtos;
    - (4) Tela de Checkout;
    - (5) Tela de Pedidos;
    - (6) Tela de Detalhes do Pedido.

  - **Fluxo da Pessoa Vendedora** que compreende:
    - (7) Tela de Pedidos;
    - (8) Tela de Detalhes/Controle do Pedido.

  - **Validação do Status do Pedido** que compreende:
    - (9) Teste de status;

  - **Fluxo da Pessoa Administradora** que compreende:
    - (10) Tela de gerenciamento de usuários.

  - **Testes da aplicação** que compreende:
    - (11) Testes de cobertura.

  - ⚠️ **Importante** ⚠️: a tela de login é capaz de direcionar para a tela principal de cada pessoa usuária, sendo as páginas:
    - Do cliente: `/customer/products`,
    - Da pessoa vendedora:  `/seller/orders`,
    - Da pessoa administradora: `/admin/manage`

</details>
