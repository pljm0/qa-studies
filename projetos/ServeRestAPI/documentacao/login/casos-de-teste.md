Casos de Teste 

ID: API-CT001  

Título: Realizar login com dados válidos.  
Método: POST  
Endpoint: {{baseUrl}}/login  
Pré-Condições: Usuário deve estar cadastrado no sistema.  
Status Esperado: 200 OK  
Resultado Esperado: Retornar um objeto json contendo a mensagem "Login realizado com sucesso" e um token de autorização.  

ID: API-CT002  

Título: Validar login com email inválido.  
Método: POST  
Endpoint: {{baseUrl}}/login  
Pré-Condições: Usuário deve estar cadastrado no sistema.  
Status Esperado: 401 Unauthorized  
Resultado Esperado: Retornar um objeto json contendo a mensagem "Email e/ou senha inválidos".  

ID: API-CT003  

Título: Validar login com senha inválida.  
Método: POST  
Endpoint: {{baseUrl}}/login  
Pré-Condições: Usuário deve estar cadastrado no sistema.  
Status Esperado: 401 Unauthorized  
Resultado Esperado: Retornar um objeto json contendo a mensagem "Email e/ou senha inválidos".  

ID: API-CT004  

Título: Validar acesso a endpoint protegido com token válido.  
Método: POST  
Endpoint: {{baseUrl}}/produtos  
Pré-Condições: Usuário deve estar logado e possuir um token de autenticação.  
Status Esperado: 200/400  
Resultado Esperado: API deve permitir o cadastro de produtos.  
Observação: Foi usado o endpoint POST /produtos apenas para validar o token de autenticação.  
  
ID: API-CT005  

Título: Validar acesso a endpoint protegido com token expirado.  
Método: POST  
Endpoint: {{baseUrl}}/produtos  
Pré-Condições: Usuário deve estar logado e possuir um token de autenticação.  
Status Esperado: 401 Unauthorized  
Resultado Esperado: Ao passar 10 minutos ou mais e o token ter expirado, API deve recusar o acesso para cadastro de produtos e retornar um objeto JSON com a mensagem: "Token de acesso ausente, inválido, expirado ou usuário do token não existe mais".  
Observação: Foi usado o endpoint POST /produtos apenas para validar o token de autenticação.  

