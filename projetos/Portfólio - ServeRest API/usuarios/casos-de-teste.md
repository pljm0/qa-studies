Casos de Teste

ID: API-CT001 
Título: Listar usuários cadastrados. 
Método: GET 
Endpoint: {{baseUrl}}/usuarios 
Pré-Condições: Usuários devem estar cadastrados no sistema. 
Status Esperado: 200 OK 
Resultado Esperado: Retornar um objeto json contendo um campo de quantidade de usuários cadastrados e uma lista de usuários cadastrados com o campos "nome", "email", "password", "administrador" e "_id".

ID: API-CT002 
Título: Cadastrar um usuário. 
Método: POST 
Endpoint: {{baseUrl}}/usuarios 
Pré-Condições: Nenhuma. 
Status Esperado: 201 Created 
Resultado Esperado: Retornar um objeto json contendo um campo "message" com a mensagem "Cadastro realizado com sucesso" e um campo "_id" contendo um id único.

ID: API-CT003 
Título: Validar cadastro de usuário com email já cadastrado. 
Método: POST 
Endpoint: {{baseUrl}}/usuarios 
Pré-Condições: Nenhuma. 
Status Esperado: 400 Bad Request 
Resultado Esperado: Retornar um objeto json contendo um campo "message" com a mensagem "Este email já está sendo usado" e o cadastro deve ser recusado.

ID: API-CT004 
Título: Buscar um usuário por ID. 
Método: GET 
Endpoint: {{baseUrl}}/usuarios/{_id}
Pré-Condições: Usuário deve estar cadastrado no sistema. 
Status Esperado: 200 OK 
Resultado Esperado: Retornar um objeto json contendo o usuário buscado com os campos "nome", "email", "password", "administrador" e "_id".

ID: API-CT005 
Título: Validar busca de usuário com ID inválido. 
Método: GET 
Endpoint: {{baseUrl}}/usuarios/{_id}
Pré-Condições: Nenhuma. 
Status Esperado: 400 Bad Request 
Resultado Esperado: Retornar um objeto json contendo um campo "message" com a mensagem "Usuário não encontrado".

ID: API-CT006 
Título: Excluir um usuário através do ID. 
Método: DELETE 
Endpoint: {{baseUrl}}/usuarios/{_id}
Pré-Condições: Usuário deve estar cadastrado no sistema.  
Status Esperado: 200 OK
Resultado Esperado: Retornar um objeto json contendo um campo "message" com a mensagem "Registro excluído com sucesso".

ID: API-CT007 
Título: Validar a remoção de usuário através de um ID inválido. 
Método: DELETE 
Endpoint: {{baseUrl}}/usuarios/{_id}
Pré-Condições: Nenhuma. 
Status Esperado: 200 OK
Resultado Esperado: Retornar um objeto json contendo um campo "message" com a mensagem "Nenhum registro excluído".

ID: API-CT008 
Título: Validar a remoção de usuário com carrinho atribuído. 
Método: DELETE 
Endpoint: {{baseUrl}}/usuarios/{_id}
Pré-Condições: Deve haver um carrinho atribuído ao usuário. 
Status Esperado: 400 Bad Request
Resultado Esperado: Retornar um objeto json contendo um campo "message" com a mensagem "Não é permitido excluir usuário com carrinho cadastrado".

ID: API-CT009 
Título: Editar campos dos usuários. 
Método: PUT 
Endpoint: {{baseUrl}}/usuarios/{_id}
Pré-Condições: Usuário deve estar cadastrado no sistema.  
Status Esperado: 200 OK
Resultado Esperado: Retornar um objeto json contendo um campo "message" com a mensagem "Alterado com sucesso".

ID: API-CT0010 
Título: Ao tentar editar usuário inexistente, deve-se cadastrar o usuário. 
Método: PUT 
Endpoint: {{baseUrl}}/usuarios/{_id}
Pré-Condições: Nenhuma.  
Status Esperado: 201 Created
Resultado Esperado: Retornar um objeto json contendo um campo "message" com a mensagem "Cadastro realizado com sucesso" e um campo "_id" com um id único.

ID: API-CT011 
Título: Validar cadastro após editar usuário inexistente com um email já utilizado no sistema. 
Método: PUT 
Endpoint: {{baseUrl}}/usuarios/{_id}
Pré-Condições: Usuário com email já cadastrado.  
Status Esperado: 400 Bad Request
Resultado Esperado: Retornar um objeto json contendo um campo "message" com a mensagem "Este email já está sendo usado".