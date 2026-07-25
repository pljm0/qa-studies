Casos de Teste

ID: CT-001  
Título: Validar início do processo de checkout.  
Pré-Condição: Usuário autenticado e produtos adicionados ao carrinho.  
Dados de teste: Produto "Sauce Labs Backpack"  
Resultado esperado: Ao clicar no botão "Checkout", a página deve ser redirecionada para a página de informações do cliente.  

ID: CT-002  
Título: Validar o prosseguimento do checkout com dados válidos.  
Pré-Condição: Usuário autenticado e produtos adicionados ao carrinho.  
Dados de teste: Produto "Sauce Labs Backpack"   
First Name: Teste  
Last Name: Teste  
Postal Code: 11111111  
Resultado esperado: Ao preencher os campos "First Name", "Last Name" e "Postal Code" e clicar no botão "Continue", página deve ser redirecionada para o resumo da compra.  

ID: CT-003  
Título: Validar mensagem de erro no campo obrigatório "First Name".  
Pré-Condição: Usuário autenticado e produtos adicionados ao carrinho.  
Dados de teste: Produto "Sauce Labs Backpack"  
First Name: "vazio"  
Last Name: Teste  
Postal Code: 11111111  
Resultado esperado: A mensagem "Error: First Name is required" deve ser exibida.  

ID: CT-004  
Título: Validar mensagem de erro no campo obrigatório "Last Name".  
Pré-Condição: Usuário autenticado e produtos adicionados ao carrinho.  
Dados de teste: Produto "Sauce Labs Backpack"  
First Name: Teste  
Last Name: "vazio"  
Postal Code: 11111111  
Resultado esperado: A mensagem "Error: Last Name is required" deve ser exibida.  

ID: CT-005  
Título: Validar mensagem de erro no campo obrigatório "Postal Code".  
Pré-Condição: Usuário autenticado e produtos adicionados ao carrinho.  
First Name: Teste  
Last Name: Teste  
Postal Code: "vazio"  
Dados de teste: Produto "Sauce Labs Backpack"  
Resultado esperado: A mensagem "Error: Postal Code is required" deve ser exibida.  

ID: CT-006  
Título: Validar exibição do resumo da compra.  
Pré-Condição: Usuário autenticado e produtos adicionados ao carrinho.  
Dados de teste: Produto "Sauce Labs Backpack"  
Resultado esperado: Deve ser exibido os produtos selecionados, os campos "Item Total", "Tax" e "Total" e os botões "Finish" e "Cancel".  

ID: CT-007  
Título: Validar a finalização de compra.  
Pré-Condição: Usuário autenticado e produtos adicionados ao carrinho.  
Dados de teste: Produto "Sauce Labs Backpack"  
Resultado esperado: Após clicar no botão "Finish", a compra será concluída, irá ser exibida uma mensagem de confirmação da compra e o botão "Back Home" também deve ser exibido.  

ID: CT-008  
Título: Validar comportamento do checkout com usuário error_user.  
Pré-Condição: Usuário error_user autenticado e produtos adicionados ao carrinho.  
Dados de teste: Produto "Sauce Labs Backpack"  
First Name: Teste  
Last Name: Teste  
Postal Code: 11111111  
Resultado esperado: Os campos de informações do cliente devem ser preenchidos e então seguir pelo processo de checkout.  
