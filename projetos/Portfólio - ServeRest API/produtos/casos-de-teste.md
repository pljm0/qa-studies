Casos de Teste

ID: API-CT001 

Título: Listar produtos cadastrados. 
Método: GET 
Endpoint: {{baseUrl}}/produtos 
Pré-Condições: Produtos devem estar cadastrados no sistema. 
Status Esperado: 200 OK 
Resultado Esperado: Retornar um objeto json contendo um campo de quantidade de produtos cadastrados e uma lista de produtos cadastrados com o campos "nome", "preco", "descricao", "quantidade" e "_id".

ID: API-CT002 

Título: Validar filtro de produtos com preço igual a 0. 
Método: GET 
Endpoint: {{baseUrl}}/produtos 
Pré-Condições: Produtos devem estar cadastrados no sistema. 
Status Esperado: 400 Bad Request 
Resultado Esperado: Retornar um objeto json contendo a mensagem "preco deve ser um número positivo".

ID: API-CT003 

Título: Validar filtro de produtos com preço igual a 1. 
Método: GET 
Endpoint: {{baseUrl}}/produtos 
Pré-Condições: Produtos devem estar cadastrados no sistema. 
Status Esperado: 200 OK 
Resultado Esperado: Retornar um objeto json com uma lista de produtos com preço igual a 1.

ID: API-CT004

Título: Validar filtro de produtos com preço igual a 2.
Método: GET 
Endpoint: {{baseUrl}}/produtos 
Pré-Condições: Produtos devem estar cadastrados no sistema. 
Status Esperado: 200 OK 
Resultado Esperado: Retornar um objeto json com uma lista de produtos com preço igual a 2.

ID: API-CT005

Título: Validar filtro de produtos por quantidade igual a 0.
Método: GET 
Endpoint: {{baseUrl}}/produtos 
Pré-Condições: Produtos devem estar cadastrados no sistema. 
Status Esperado: 200 OK 
Resultado Esperado: Retornar um objeto json com uma lista de produtos com quantidade igual a 0.

ID: API-CT006

Título: Validar filtro de produtos por quantidade igual a 1.
Método: GET 
Endpoint: {{baseUrl}}/produtos 
Pré-Condições: Produtos devem estar cadastrados no sistema. 
Status Esperado: 200 OK 
Resultado Esperado: Retornar um objeto json com uma lista de produtos com quantidade igual a 1.

ID: API-CT007

Título: Cadastrar um produto.
Método: POST 
Endpoint: {{baseUrl}}/produtos 
Pré-Condições: Token de login válido e ser administrador. 
Status Esperado: 201 Created 
Resultado Esperado: Retornar um objeto json com uma mensagem "Cadastro realizado com sucesso" e um "_id" único.

ID: API-CT008

Título: Validar cadastro de produtos com nome repetido.
Método: POST 
Endpoint: {{baseUrl}}/produtos 
Pré-Condições: Token de login válido e ser administrador. 
Status Esperado: 400 Bad Request
Resultado Esperado: Retornar um objeto json com uma mensagem de erro "Já existe produto com esse nome".

ID: API-CT009

Título: Validar cadastro de produtos com token inválido ou expirado.
Método: POST 
Endpoint: {{baseUrl}}/produtos 
Pré-Condições: Possuir um token de autenticação inválido.
Status Esperado: 401 Unauthorized
Resultado Esperado: Retornar um objeto json com uma mensagem de erro "Token de acesso ausente, inválido, expirado ou usuário do token não existe mais".

ID: API-CT010

Título: Validar cadastro de produtos com usuário sem administrador.
Método: POST 
Endpoint: {{baseUrl}}/produtos 
Pré-Condições: Fazer login e autenticar com um usuário sem administrador.
Status Esperado: 403 Forbidden
Resultado Esperado: Retornar um objeto json com uma mensagem de erro "Rota exclusiva para administradores".

ID: API-CT011

Título: Buscar produto usando id.
Método: GET 
Endpoint: {{baseUrl}}/produtos/{_id} 
Pré-Condições: Ter um produto cadastrado.
Status Esperado: 200 OK
Resultado Esperado: Retornar um objeto json com o produto buscado contendo os campos "nome", "preco", "descricao", "quantidade" e "_id".

ID: API-CT012

Título: Buscar produto usando id inválido.
Método: GET 
Endpoint: {{baseUrl}}/produtos/{_id} 
Pré-Condições: Possuir um id inválido.
Status Esperado: 400 Bad Request
Resultado Esperado: Retornar um objeto json com uma mensagem "Produto não encontrado".

ID: API-CT013

Título: Excluir um produto.
Método: DELETE 
Endpoint: {{baseUrl}}/produtos/{_id} 
Pré-Condições: Fazer login e autenticar com um usuário administrador.
Status Esperado: 200 OK
Resultado Esperado: Retornar um objeto json com uma mensagem "Registro excluído com sucesso".

ID: API-CT014

Título: Excluir um produto usando id inválido.
Método: DELETE 
Endpoint: {{baseUrl}}/produtos/{_id} 
Pré-Condições: Fazer login, autenticar com um usuário administrador e possuir um id inválido.
Status Esperado: 200 OK
Resultado Esperado: Retornar um objeto json com uma mensagem "Nenhum registro excluído".

ID: API-CT015

Título: Validar exclusão de produto que faz parte de um carrinho.
Método: DELETE 
Endpoint: {{baseUrl}}/produtos/{_id} 
Pré-Condições: Fazer login e autenticar com um usuário administrador.
Status Esperado: 400 Bad Request
Resultado Esperado: Retornar um objeto json com uma mensagem "Não é permitido excluir produto que faz parte de carrinho" e um campo "idCarrinho" contendo os ids dos carrinhos no qual o produto está incluído.

ID: API-CT016

Título: Validar exclusão de produtos com token inválido ou expirado.
Método: DELETE 
Endpoint: {{baseUrl}}/produtos/{_id} 
Pré-Condições: Possuir um token de autenticação inválido.
Status Esperado: 401 Unauthorized
Resultado Esperado: Retornar um objeto json com uma mensagem de erro "Token de acesso ausente, inválido, expirado ou usuário do token não existe mais".

ID: API-CT017

Título: Validar exclusão de produtos com usuário sem administrador.
Método: DELETE 
Endpoint: {{baseUrl}}/produtos/{_id}
Pré-Condições: Fazer login e autenticar com um usuário sem administrador.
Status Esperado: 403 Forbidden
Resultado Esperado: Retornar um objeto json com uma mensagem de erro "Rota exclusiva para administradores".

ID: API-CT018

Título: Editar informações de um produto.
Método: PUT 
Endpoint: {{baseUrl}}/produtos/{_id}
Pré-Condições: Fazer login e autenticar com um usuário administrador.
Status Esperado: 200 OK
Resultado Esperado: Retornar um objeto json com uma mensagem de erro "Registro alterado com sucesso".

ID: API-CT019

Título: Validar cadastro de produto ao tentar editar um produto com id inexistente.
Método: PUT 
Endpoint: {{baseUrl}}/produtos/{_id}
Pré-Condições: Fazer login e autenticar com um usuário administrador.
Status Esperado: 201 Created
Resultado Esperado: Retornar um objeto json com uma mensagem "Cadastro realizado com sucesso" e um id único.

ID: API-CT020

Título: Validar cadastro de produto utilizando nome repetido ao tentar editar.
Método: PUT 
Endpoint: {{baseUrl}}/produtos/{_id}
Pré-Condições: Fazer login e autenticar com um usuário administrador.
Status Esperado: 400 Bad Request
Resultado Esperado: Retornar um objeto json com uma mensagem de erro "Já existe produto com esse nome".

ID: API-CT021

Título: Validar edição de produtos com token inválido ou expirado.
Método: PUT 
Endpoint: {{baseUrl}}/produtos/{_id} 
Pré-Condições: Possuir um token de autenticação inválido.
Status Esperado: 401 Unauthorized
Resultado Esperado: Retornar um objeto json com uma mensagem de erro "Token de acesso ausente, inválido, expirado ou usuário do token não existe mais".

ID: API-CT022

Título: Validar edição de produtos com usuário sem administrador.
Método: PUT 
Endpoint: {{baseUrl}}/produtos/{_id}
Pré-Condições: Fazer login e autenticar com um usuário sem administrador.
Status Esperado: 403 Forbidden
Resultado Esperado: Retornar um objeto json com uma mensagem de erro "Rota exclusiva para administradores".


