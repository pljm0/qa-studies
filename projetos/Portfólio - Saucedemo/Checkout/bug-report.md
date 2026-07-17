Bug Report

ID: BUG-001  
Título: [Checkout] Campo "Last Name" não permite inserção de texto.  
Pré-condições: Usuário error_user autenticado e produto adicionado ao carrinho de compras.  

Passos:  

1. Acessar https://www.saucedemo.com/  
2. Digitar as credenciais de login. (username: error_user e password: secret_sauce)  
3. Clicar em Login  
4. Adicionar o produto "Sauce Labs Backpack" ao carrinho  
5. Clicar no ícone de carrinho  
6. Clicar no botão "Checkout"  
7. Preencher os campos:   
First Name: Teste  
Last Name: Teste  
Postal Code: 11111111  
8. Clicar em "Continue"  

Esperado: O sistema deve permitir o preenchimento dos campos "First Name", "Last Name" e "Postal Code". Após clicar em "Continue", o usuário deve ser redirecionado ao resumo da compra.  
Obtido: O campo "Last Name" não permite inserir texto. Mesmo com o campo vazio, ao clicar no botão "Continue", o sistema redireciona para a página de resumo de compra permitindo prosseguir sem o preenchimento de um campo obrigatório.    

Severidade: Alta  
Prioridade: Alta  
Ambiente: Navegador Chrome / Windows 11  
Evidência: CHECKOUT_CT-007_FAIL_2026-07-05.mkv  
