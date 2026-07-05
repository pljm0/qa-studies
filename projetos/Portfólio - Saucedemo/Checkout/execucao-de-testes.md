Execução de Testes

ID: CT-001  
Título: Validar início do processo de checkout.  
Ambiente: Chrome / Windows 11  
Executor: Pedro L.  
Resultado Obtido: Após clicar no botão "Checkout", a página foi redirecionada para preencher informações de compra.  
Status: Passou  
BUG: N/A  
Evidência: CHECKOUT_CT-001_PASS_2026-07-05.mkv  
Data: 2026-07-05  

ID: CT-002  
Título: Validar o prosseguimento do checkout com dados válidos.  
Ambiente: Chrome / Windows 11  
Executor: Pedro L.  
Resultado Obtido: Após preencher os campos de "First Name", "Last Name", "Postal Code", e clicar no botão "Continue", foi redirecionado para o resumo da compra.  
Status: Passou  
BUG: N/A  
Evidência: CHECKOUT_CT-002_PASS_2026-07-05.mkv  
Data: 2026-07-05  

ID: CT-003  
Título: Validar mensagem de erro no campo obrigatório "First Name".  
Ambiente: Chrome / Windows 11  
Executor: Pedro L.  
Resultado Obtido: A mensagem "Error: First Name is required" foi exibida.  
Status: Passou  
BUG: N/A  
Evidência: CHECKOUT_CT-003_PASS_2026-07-05.png  
Data: 2026-07-05  

ID: CT-004  
Título: Validar mensagem de erro no campo obrigatório "Last Name".  
Ambiente: Chrome / Windows 11  
Executor: Pedro L.  
Resultado Obtido: A mensagem "Error: Last Name is required" foi exibida.  
Status: Passou  
BUG: N/A  
Evidência: CHECKOUT_CT-004_PASS_2026-07-05.png  
Data: 2026-07-05  

ID: CT-005  
Título: Validar mensagem de erro no campo obrigatório "Postal Code".  
Ambiente: Chrome / Windows 11  
Executor: Pedro L.  
Resultado Obtido: A mensagem "Error: Postal Code is required" foi exibida.  
Status: Passou  
BUG: N/A  
Evidência: CHECKOUT_CT-005_PASS_2026-07-05.png  
Data: 2026-07-05  

ID: CT-006  
Título: Validar a finalização de compra.  
Ambiente: Chrome / Windows 11  
Executor: Pedro L.  
Resultado Obtido: A mensagem "Error: Postal Code is required" foi exibida.  
Status: Passou  
BUG: N/A  
Evidência: CHECKOUT_CT-006_PASS_2026-07-05.mkv  
Data: 2026-07-05  

ID: CT-007  
Título: Validar comportamento do checkout com usuário error_user.  
Ambiente: Chrome / Windows 11  
Executor: Pedro L.  
Resultado Obtido: O campo "Last Name" não permite inserir texto. Mesmo com o campo vazio, ao clicar no botão "Continue", o sistema redireciona para a página de resumo de compra. Em seguida, ao clicar no botão "Finish", nenhuma ação é concluída.  
Status: Falhou  
BUG: BUG-001  
Evidência: CHECKOUT_CT-008_FAIL_2026-07-05.mkv  
Data: 2026-07-05  
