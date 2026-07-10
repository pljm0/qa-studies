Execução de Testes

ID: API-CT001 

Título: Listar usuários cadastrados.  
Ambiente: Postman / Windows 11 
Executor: Pedro L. 
Resultado Obtido: Um objeto json foi retornado contendo um campo de quantidade de usuários cadastrados e uma lista de usuários cadastrados com o campos "nome", "email", "password", "administrador" e "_id". 
Status Obtido: 200 OK 
Status: Passou 
BUG: N/A 
Evidência: USUARIOS_API-CT001_PASS_2026-07-10.png 
Data: 2026-07-10

ID: API-CT002

Título: Cadastrar um usuário. 
Ambiente: Postman / Windows 11 
Executor: Pedro L. 
Resultado Obtido: Um objeto json foi retornado contendo um campo "message" com a mensagem "Cadastro realizado com sucesso" e um campo "_id" contendo um id único.
Status Obtido: 201 Created 
Status: Passou 
BUG: N/A 
Evidência: USUARIOS_API-CT002_PASS_2026-07-10.png 
Data: 2026-07-10

ID: API-CT003

Título: Validar cadastro de usuário com email já cadastrado.
Ambiente: Postman / Windows 11 
Executor: Pedro L. 
Resultado Obtido: Um objeto json foi retornado contendo um campo "message" com a mensagem "Este email já está sendo usado" e o cadastro deve ser recusado.
Status Obtido: 400 Bad Request
Status: Passou 
BUG: N/A 
Evidência: USUARIOS_API-CT003_PASS_2026-07-10.png 
Data: 2026-07-10

ID: API-CT004

Título: Buscar um usuário por ID.
Ambiente: Postman / Windows 11 
Executor: Pedro L. 
Resultado Obtido: Um objeto json foi retornado contendo o usuário buscado com os campos "nome", "email", "password", "administrador" e "_id".
Status Obtido: 200 OK
Status: Passou 
BUG: N/A 
Evidência: USUARIOS_API-CT004_PASS_2026-07-10.png 
Data: 2026-07-10

ID: API-CT005

Título: Validar busca de usuário com ID inválido. 
Ambiente: Postman / Windows 11 
Executor: Pedro L. 
Resultado Obtido: Um objeto json foi retornado contendo um campo "message" com a mensagem "Usuário não encontrado".
Status Obtido: 400 Bad Request
Status: Passou 
BUG: N/A 
Evidência: USUARIOS_API-CT005_PASS_2026-07-10.png 
Data: 2026-07-10

ID: API-CT006

Título: Excluir um usuário através do ID. 
Ambiente: Postman / Windows 11 
Executor: Pedro L. 
Resultado Obtido: Um objeto json foi retornado contendo um campo "message" com a mensagem "Registro excluído com sucesso".
Status Obtido: 200 OK
Status: Passou 
BUG: N/A 
Evidência: USUARIOS_API-CT006_PASS_2026-07-10.png 
Data: 2026-07-10

ID: API-CT007

Título: Validar a remoção de usuário através de um ID inválido. 
Ambiente: Postman / Windows 11 
Executor: Pedro L. 
Resultado Obtido: Retornar um objeto json contendo um campo "message" com a mensagem "Nenhum registro excluído".
Status Obtido: 200 OK
Status: Passou 
BUG: N/A 
Evidência: USUARIOS_API-CT007_PASS_2026-07-10.png 
Data: 2026-07-10

ID: API-CT008

Título: Editar campos dos usuários. 
Ambiente: Postman / Windows 11 
Executor: Pedro L. 
Resultado Obtido: Um objeto json foi retornado contendo um campo "message" com a mensagem "Alterado com sucesso".
Status Obtido: 200 OK
Status: Passou 
BUG: N/A 
Evidência: USUARIOS_API-CT008_PASS_2026-07-10.png 
Data: 2026-07-10

ID: API-CT009

Título: Ao tentar editar usuário inexistente, deve-se cadastrar o usuário. 
Ambiente: Postman / Windows 11 
Executor: Pedro L. 
Resultado Obtido: Um objeto json foi retornado contendo um campo "message" com a mensagem "Cadastro realizado com sucesso" e um campo "_id" com um id único.
Status Obtido: 201 Created
Status: Passou 
BUG: N/A 
Evidência: USUARIOS_API-CT009_PASS_2026-07-10.png 
Data: 2026-07-10

ID: API-CT010

Título: Validar cadastro após editar usuário inexistente com um email já utilizado no sistema. 
Ambiente: Postman / Windows 11 
Executor: Pedro L. 
Resultado Obtido: Um objeto json foi retornado contendo um campo "message" com a mensagem "Este email já está sendo usado".
Status Obtido: 400 Bad Request
Status: Passou 
BUG: N/A 
Evidência: USUARIOS_API-CT010_PASS_2026-07-10.png 
Data: 2026-07-10