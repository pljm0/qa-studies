# 🛒 SwagLabs - Web Test Automation

Projeto de automação de testes Web desenvolvido utilizando **Cypress**, aplicando boas práticas de automação como **Page Object Model (POM)**, **Custom Commands**, **Fixtures**, **Smoke Tests**, **Regression Tests** e integração contínua com **GitHub Actions**.

O projeto automatiza os principais fluxos da aplicação **SauceDemo**, validando funcionalidades críticas de ponta a ponta.

---

# 📖 Sobre o Projeto

O **SauceDemo** é uma aplicação web utilizada para estudos e prática de automação de testes.

Este projeto foi desenvolvido com o objetivo de aplicar conceitos utilizados em projetos reais de QA, como:

- Testes End-to-End (E2E);
- Organização utilizando Page Object Model;
- Separação entre ações e validações;
- Reutilização de código através de Custom Commands;
- Organização das massas de teste com Fixtures;
- Execução automatizada em CI.

---

# 🎯 Objetivos

- Automatizar os principais fluxos da aplicação;
- Validar cenários positivos e negativos;
- Separar Smoke Tests e Regression Tests;
- Aplicar boas práticas de automação;
- Integrar a execução ao GitHub Actions;
- Gerar evidências automaticamente.

---

# 🛠️ Tecnologias Utilizadas

- Cypress
- JavaScript
- Node.js
- GitHub Actions
- Mochawesome
- Page Object Model (POM)

---

# 📁 Estrutura do Projeto

```text
SwagLabs/
│
├── cypress/
│   ├── e2e/
│   │   ├── smoke/
│   │   └── regression/
│   │
│   ├── fixtures/
│   ├── pages/
│   └── support/
│
├── cypress.config.js
├── package.json
├── package-lock.json
└── README.md
```

---

# 🏗️ Arquitetura

O projeto foi organizado seguindo o padrão **Page Object Model (POM)**.

Cada página possui responsabilidades bem definidas:

- Actions
- Validations
- Navigation

Também foram utilizados:

- Fixtures para massas de teste;
- Custom Commands para funcionalidades reutilizáveis;
- Separação entre Smoke e Regression;
- Estrutura modular para facilitar manutenção.

---

# ✅ Cobertura dos Testes

Os testes automatizam funcionalidades essenciais da aplicação.

### Login

- Login válido;
- Login inválido;
- Usuário bloqueado;
- Usuário com erro;
- Campos obrigatórios.

### Produtos

- Validação da listagem;
- Ordenação por nome;
- Ordenação por preço;
- Informações dos produtos.

### Carrinho

- Adicionar produto;
- Adicionar múltiplos produtos;
- Remover produto;
- Validação do contador.

### Checkout

- Preenchimento dos dados;
- Campos obrigatórios;
- Resumo da compra;
- Finalização da compra.

---

# 🔥 Smoke Tests

A suíte de Smoke Tests valida rapidamente se as funcionalidades críticas da aplicação continuam operando corretamente.

### Fluxo validado

- Login;
- Visualização dos produtos;
- Adição ao carrinho;
- Checkout;
- Finalização da compra;
- Logout.

### Executar

```bash
npm run test:smoke
```

---

# 🔄 Regression Tests

A suíte de Regression Tests possui cobertura funcional completa da aplicação.

Inclui:

- Cenários positivos;
- Cenários negativos;
- Regras de negócio;
- Validação de mensagens;
- Ordenações;
- Fluxo completo de compra;
- Reprodução de bugs conhecidos.

### Executar

```bash
npm run test:regression
```

---

# ▶️ Como Executar

## 1. Clone o repositório

```bash
git clone https://github.com/pljm0/qa-studies.git
```

## 2. Acesse o projeto

```bash
cd Projetos/SwagLabs
```

## 3. Instale as dependências

```bash
npm install
```

## 4. Abrir o Cypress

```bash
npm run cy:open
```

## 5. Executar todos os testes

```bash
npm run test:all
```

## 6. Executar apenas os Smoke Tests

```bash
npm run test:smoke
```

## 7. Executar apenas os Regression Tests

```bash
npm run test:regression
```

---

# 📊 Relatórios

Após a execução dos testes são geradas evidências contendo:

- Cenários executados;
- Status dos testes;
- Tempo de execução;
- Screenshots (quando aplicável);
- Vídeos (quando habilitado).

---

# ⚙️ Integração Contínua

O projeto utiliza **GitHub Actions** para automatizar a execução dos testes.

O workflow realiza automaticamente:

- Checkout do projeto;
- Instalação das dependências;
- Execução dos testes;
- Geração de relatórios;
- Upload dos artefatos.

---

# 📚 Boas Práticas Aplicadas

- Page Object Model (POM);
- Custom Commands;
- Fixtures;
- Organização por responsabilidades;
- Smoke Tests;
- Regression Tests;
- Código reutilizável;
- Integração Contínua.

---

# 👨‍💻 Autor

**Pedro Lourenço**
