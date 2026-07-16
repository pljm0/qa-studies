Casos de Teste

ID: API-CT001

Título: Listar carrinhos cadastrados.  
Método: GET   
Endpoint: {{baseUrl}}/carrinhos   
Pré-Condições: Carrinho deve estar cadastrado no sistema.   
Status Esperado: 200 OK   
Resultado Esperado: Retornar um objeto json contendo a quantidade de carrinhos cadastrados, os campos do carrinho "precoTotal", "quantidadeTotal, "idUsuario", "_id" e os produtos em cada carrinho contendo os campos "idProduto", "quantidade", "precoUnitario".  

ID: API-CT002

Título: Validar busca de carrinhos cadastrados por preço total igual a 0.  
Método: GET   
Endpoint: {{baseUrl}}/carrinhos   
Pré-Condições: Carrinho deve estar cadastrado no sistema.   
Status Esperado: 400 Bad Request  
Resultado Esperado: Retornar um objeto json contendo uma mensagem de erro "precoTotal deve ser um número positivo".  

ID: API-CT003

Título: Validar busca de carrinhos cadastrados por preço total igual a 1.  
Método: GET   
Endpoint: {{baseUrl}}/carrinhos   
Pré-Condições: Carrinho deve estar cadastrado no sistema.   
Status Esperado: 200 OK  
Resultado Esperado: Retornar um objeto json contendo uma lista de produtos com preço total igual a 1.  

ID: API-CT004

Título: Validar busca de carrinhos cadastrados por preço total igual a 2.  
Método: GET   
Endpoint: {{baseUrl}}/carrinhos   
Pré-Condições: Carrinho deve estar cadastrado no sistema.     
Status Esperado: 200 OK  
Resultado Esperado: Retornar um objeto json contendo uma lista de produtos com preço total igual a 2.  

ID: API-CT005

Título: Cadastrar carrinho ao usuário.  
Método: POST   
Endpoint: {{baseUrl}}/carrinhos   
Pré-Condições: Usuário logado e autenticado.   
Status Esperado: 201 Created  
Resultado Esperado: Retornar um objeto json contendo uma mensagem "Cadastro realizado com sucesso" e um id único.  

ID: API-CT006

Título: Validar cadastro de carrinho com id de produto duplicado.  
Método: POST   
Endpoint: {{baseUrl}}/carrinhos   
Pré-Condições: Usuário logado e autenticado.   
Status Esperado: 400 Bad Request  
Resultado Esperado: Retornar um objeto json contendo uma mensagem de erro "Não é permitido possuir produto duplicado".  

ID: API-CT007

Título: Validar cadastro de dois carrinhos ao mesmo usuário.  
Método: POST   
Endpoint: {{baseUrl}}/carrinhos   
Pré-Condições: Usuário logado e autenticado.   
Status Esperado: 400 Bad Request  
Resultado Esperado: Retornar um objeto json contendo uma mensagem de erro "Não é permitido ter mais de 1 carrinho".  

ID: API-CT008

Título: Validar cadastro de carrinho com id de produto inválido.  
Método: POST   
Endpoint: {{baseUrl}}/carrinhos   
Pré-Condições: Usuário logado e autenticado.   
Status Esperado: 400 Bad Request  
Resultado Esperado: Retornar um objeto json contendo uma mensagem de erro "Produto não encontrado".  

ID: API-CT009

Título: Validar cadastro de carrinho com produto sem estoque.  
Método: POST   
Endpoint: {{baseUrl}}/carrinhos   
Pré-Condições: Usuário logado e autenticado.   
Status Esperado: 400 Bad Request  
Resultado Esperado: Retornar um objeto json contendo uma mensagem de erro "Produto não possui quantidade suficiente".  

ID: API-CT010

Título: Validar cadastro de carrinho com token inválido.  
Método: POST   
Endpoint: {{baseUrl}}/carrinhos   
Pré-Condições: Usuário logado e token inválido.   
Status Esperado: 401 Unauthorized  
Resultado Esperado: Retornar um objeto json contendo uma mensagem de erro "Token de acesso ausente, inválido, expirado ou usuário do token não existe mais".  

ID: API-CT011

Título: Buscar carrinho por id.  
Método: GET   
Endpoint: {{baseUrl}}/carrinhos/{_id}   
Pré-Condições: Carrinho deve estar cadastrado no sistema.  
Status Esperado: 200 OK    
Resultado Esperado: Retornar um objeto json contendo os campos do carrinho "precoTotal", "quantidadeTotal, "idUsuario", "_id" e os produtos no carrinho contendo os campos "idProduto", "quantidade", "precoUnitario".  

ID: API-CT012

Título: Buscar carrinho por id inválido.  
Método: GET   
Endpoint: {{baseUrl}}/carrinhos/{_id}   
Pré-Condições: Possuir um id inválido.   
Status Esperado: 400 Bad Request  
Resultado Esperado: Retornar um objeto json contendo uma mensagem de erro "Carrinho não encontrado".  
  
ID: API-CT013

Título: Excluir um carrinho ao concluir uma compra.  
Método: DELETE   
Endpoint: {{baseUrl}}/carrinhos/concluir-compra   
Pré-Condições: Usuário logado e autenticado.   
Status Esperado: 200 OK  
Resultado Esperado: Retornar um objeto json contendo uma mensagem "Registro excluído com sucesso".  

ID: API-CT014

Título: Validar exclusão de carrinho a um usuário sem carrinho cadastrado (compra concluída).  
Método: DELETE   
Endpoint: {{baseUrl}}/carrinhos/concluir-compra   
Pré-Condições: Usuário logado e autenticado.   
Status Esperado: 400 Bad Request  
Resultado Esperado: Retornar um objeto json contendo uma mensagem de erro "Não foi encontrado carrinho para esse usuário".  

ID: API-CT015

Título: Excluir um carrinho ao concluir compra usando um token inválido.  
Método: DELETE   
Endpoint: {{baseUrl}}/carrinhos/concluir-compra  
Pré-Condições: Usuário logado e token inválido.   
Status Esperado: 401 Unauthorized  
Resultado Esperado: Retornar um objeto json contendo uma mensagem de erro "Token de acesso ausente, inválido, expirado ou usuário do token não existe mais".  

ID: API-CT016

Título: Excluir um carrinho ao cancelar uma compra.  
Método: DELETE   
Endpoint: {{baseUrl}}/carrinhos/cancelar-compra   
Pré-Condições: Usuário logado e autenticado.   
Status Esperado: 200 OK  
Resultado Esperado: Retornar um objeto json contendo uma mensagem "Registro excluído com sucesso. Estoque dos produtos reabastecido".  

ID: API-CT017

Título: Validar exclusão de carrinho a um usuário sem carrinho cadastrado (compra cancelada).  
Método: DELETE   
Endpoint: {{baseUrl}}/carrinhos/cancelar-compra   
Pré-Condições: Usuário logado e autenticado.   
Status Esperado: 400 Bad Request  
Resultado Esperado: Retornar um objeto json contendo uma mensagem de erro "Não foi encontrado carrinho para esse usuário".  

ID: API-CT018

Título: Excluir um carrinho ao cancelar compra usando um token inválido.  
Método: DELETE   
Endpoint: {{baseUrl}}/carrinhos/cancelar-compra  
Pré-Condições: Usuário logado e token inválido.   
Status Esperado: 401 Unauthorized  
Resultado Esperado: Retornar um objeto json contendo uma mensagem de erro "Token de acesso ausente, inválido, expirado ou usuário do token não existe mais".  
