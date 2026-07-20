# 🧪 ServeRestAPI

Projeto de automação de testes de API desenvolvido utilizando **Postman** e **Newman**, com foco na validação funcional dos principais endpoints da API **ServeRest**.

O projeto contempla a criação e execução de **Smoke Tests** e **Regression Tests**, geração de relatórios HTML e integração contínua utilizando **GitHub Actions**.

---

## 📖 Sobre o Projeto

A **ServeRest** é uma API REST utilizada para estudos e prática de testes de software.

Este projeto tem como objetivo demonstrar conhecimentos em:

- Testes de API
- Criação de Collections no Postman
- Automação com Newman
- Organização de suítes de testes
- Integração Contínua (CI)
- Geração de relatórios

---

## 🎯 Objetivos

- Validar os principais endpoints da API;
- Automatizar cenários positivos e negativos;
- Separar os testes em Smoke e Regression;
- Executar testes via Newman;
- Gerar relatórios HTML automaticamente;
- Automatizar a execução utilizando GitHub Actions.

---

## 🛠️ Tecnologias Utilizadas

- Postman
- Newman
- Node.js
- GitHub Actions
- HTML Extra Reporter

---

## 📁 Estrutura do Projeto

```text
ServeRestAPI/
│
├── postman/
│   ├── ServeRestAPI-Smoke.postman_collection.json
│   ├── ServeRestAPI-Regression.postman_collection.json
│   └── ServeRest.postman_environment.json
│
├── package.json
├── package-lock.json
└── README.md
```

---

## ✅ Cobertura dos Testes

Os testes contemplam os principais recursos disponibilizados pela API.

### Usuários

- Cadastro de usuário
- Consulta de usuário
- Validação de dados
- Cenários negativos

### Login

- Login válido
- Login inválido
- Validação de autenticação

### Produtos

- Cadastro de produto
- Consulta de produtos
- Validação de respostas

### Validações

- Status Code
- Tempo de resposta
- Estrutura do JSON
- Conteúdo da resposta
- Mensagens de erro

---

# 🔥 Smoke Tests

A suíte de Smoke Tests valida rapidamente as funcionalidades críticas da API, garantindo que ela esteja operacional após uma nova alteração.

### Funcionalidades

- Cadastro de usuário
- Login
- Consulta de usuário
- Cadastro de produto
- Consulta de produto

### Executar

```bash
npm run smoke
```

Ou diretamente pelo Newman:

```bash
npx newman run postman/ServeRestAPI-Smoke.postman_collection.json \
-e postman/ServeRest.postman_environment.json
```

---

# 🔄 Regression Tests

A suíte de Regressão possui uma cobertura funcional mais completa.

Inclui:

- Cenários positivos;
- Cenários negativos;
- Validação de Status Code;
- Validação de payload;
- Validação de regras de negócio;
- Validação de mensagens de erro.
- Execução automática diária às **02:00** da manhã por meio de um workflow agendado no GitHub Actions (`schedule`), garantindo a validação contínua da API.

### Executar

```bash
npm run regression
```

Ou diretamente pelo Newman:

```bash
npx newman run postman/ServeRestAPI-Regression.postman_collection.json \
-e postman/ServeRest.postman_environment.json
```

---

# ▶️ Como Executar o Projeto

## 1. Clone o repositório

```bash
git clone https://github.com/pljm0/qa-studies.git
```

## 2. Acesse a pasta do projeto

```bash
cd Projetos/ServeRestAPI
```

## 3. Instale as dependências

```bash
npm install
```

## 4. Execute os Smoke Tests

```bash
npm run smoke
```

## 5. Execute os Regression Tests

```bash
npm run regression
```

---

# 📊 Relatórios

Após cada execução utilizando o Newman, é gerado automaticamente um relatório HTML contendo:

- Cenários executados;
- Testes aprovados;
- Testes reprovados;
- Tempo de execução;
- Requests;
- Responses;
- Assertions.

---

# 📚 Boas Práticas Aplicadas

- Organização das Collections;
- Separação entre Smoke e Regression;
- Utilização de Environment;
- Uso de variáveis;
- Assertions automatizadas;
- Relatórios HTML;
- Integração Contínua com GitHub Actions.

---

# 🚀 Melhorias Futuras

- Testes de autenticação JWT;
- Execução em múltiplos ambientes;
- Massa de dados dinâmica;
- Testes de Performance com JMeter;
- Integração com Docker.

---

## 👨‍💻 Autor

**Pedro Lourenço**
