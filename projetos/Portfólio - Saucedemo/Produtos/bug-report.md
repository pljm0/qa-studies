Bug Report

ID: BUG-001
Título: [Produtos] Título e descrição de produtos exibem chamadas de função indevidamente.
Pré-condições: Usuário cadastrado e logado.

Passos: 
1. Acessar https://www.saucedemo.com/
2. Digitar as credenciais de login. (username: standard_user e password: secret_sauce)
3. Clicar em Login

Esperado: O sistema deve exibir corretamente o nome e a descrição correspondente de cada produto.
Obtido: Produto exibindo "carry.allTheThings()" na descrição e outro produto exibindo "Test.allTheThings()" no título.

Severidade: Médio
Prioridade: Médio
Ambiente: Navegador Chrome / Windows 11
Evidência: PRODUTOS_BUG-001_2026-07-01

ID: BUG-002
Título: [Produtos] Imagens dos produtos sendo exibidas incorretamente.
Pré-condições: Usuário cadastrado e logado.

Passos: 
1. Acessar https://www.saucedemo.com/
2. Digitar as credenciais de login. (username: problem_user e password: secret_sauce)
3. Clicar em Login

Esperado: O sistema deve exibir corretamente a imagem de cada produto correspondente.
Obtido: Produtos exibindo a mesma imagem.

Severidade: Médio
Prioridade: Alta
Ambiente: Navegador Chrome / Windows 11
Evidência: PRODUTOS_BUG-002_2026-07-01