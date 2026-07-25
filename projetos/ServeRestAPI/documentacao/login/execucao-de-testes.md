Execução de Testes

ID: API-CT001

Título: Realizar login com dados válidos.  
Ambiente: Postman / Windows 11  
Executor: Pedro L.  
Resultado Obtido: Um objeto json foi retornado contendo a mensagem "Login realizado com sucesso" e um token de autorização.  
Status Obtido: 200 OK  
Status: Passou  
BUG: N/A  
Evidência: LOGIN_API-CT001_PASS_2026-07-08.png  
Data: 2026-07-08  

ID: API-CT002  

Título: Validar login com email inválido.  
Ambiente: Postman / Windows 11  
Executor: Pedro L.  
Resultado Obtido: Um objeto json foi retornado contendo a mensagem "Email e/ou senha inválidos".  
Status Obtido: 401 Unauthorized  
Status: Passou  
BUG: N/A  
Evidência: LOGIN_API-CT002_PASS_2026-07-08.png  
Data: 2026-07-08  
  
ID: API-CT003

Título: Validar login com senha inválida.  
Ambiente: Postman / Windows 11  
Executor: Pedro L.  
Resultado Obtido: Um objeto json foi retornado contendo a mensagem "Email e/ou senha inválidos".  
Status Obtido: 401 Unauthorized  
Status: Passou  
BUG: N/A  
Evidência: LOGIN_API-CT003_PASS_2026-07-08.png  
Data: 2026-07-08  

ID: API-CT004

Título: Validar acesso a endpoint protegido com token válido.  
Ambiente: Postman / Windows 11  
Executor: Pedro L.  
Resultado Obtido: API permitiu o acesso na requisição protegida de cadastro de produtos.  
Status Obtido: 400 Bad Request  
Status: Passou  
BUG: N/A  
Evidência: LOGIN_API-CT004_PASS_2026-07-08.png  
Data: 2026-07-08  

ID: API-CT005

Título: Validar acesso a endpoint protegido com token expirado.  
Ambiente: Postman / Windows 11  
Executor: Pedro L.  
Resultado Obtido: API recusou o acesso na requisição protegida de cadastro de produtos.  
Status Obtido: 401 Unauthorized  
Status: Passou  
BUG: N/A  
Evidência: LOGIN_API-CT005_PASS_2026-07-08.png  
Data: 2026-07-08  
