Execução de Testes

ID: API-CT001

Título: Listar carrinhos cadastrados.  
Ambiente: Postman / Windows 11   
Executor: Pedro L.   
Resultado Obtido: Um objeto json foi retornado contendo a quantidade de carrinhos cadastrados, os campos do carrinho "precoTotal", "quantidadeTotal, "idUsuario", "_id" e os produtos em cada carrinho contendo os campos "idProduto", "quantidade", "precoUnitario".  
Status Obtido: 200 OK   
Status: Passou   
BUG: N/A   
Evidência: CARRINHOS_API-CT001_PASS_2026-07-14.png   
Data: 2026-07-14  

ID: API-CT002

Título: Validar busca de carrinhos cadastrados por preço total igual a 0.  
Ambiente: Postman / Windows 11   
Executor: Pedro L.   
Resultado Obtido: Um objeto json foi retornado contendo uma mensagem de erro "precoTotal deve ser um número positivo".  
Status Obtido: 400 Bad Request  
Status: Passou   
BUG: N/A   
Evidência: CARRINHOS_API-CT002_PASS_2026-07-14.png   
Data: 2026-07-14  

ID: API-CT003

Título: Validar busca de carrinhos cadastrados por preço total igual a 1.  
Ambiente: Postman / Windows 11   
Executor: Pedro L.     
Resultado Obtido: Um objeto json foi retornado contendo uma lista de produtos com preço total igual a 1.  
Status Obtido: 200 OK  
Status: Passou   
BUG: N/A   
Evidência: CARRINHOS_API-CT003_PASS_2026-07-14.png   
Data: 2026-07-14  

ID: API-CT004

Título: Validar busca de carrinhos cadastrados por preço total igual a 2.  
Ambiente: Postman / Windows 11   
Executor: Pedro L.   
Resultado Obtido: Um objeto json foi retornado contendo uma lista de produtos com preço total igual a 2.  
Status Obtido: 200 OK  
Status: Passou   
BUG: N/A   
Evidência: CARRINHOS_API-CT004_PASS_2026-07-14.png   
Data: 2026-07-14  

ID: API-CT005

Título: Cadastrar carrinho ao usuário.  
Ambiente: Postman / Windows 11   
Executor: Pedro L.   
Resultado Obtido: Um objeto json foi retornado contendo uma mensagem "Cadastro realizado com sucesso" e um id único.  
Status Obtido: 201 Created  
Status: Passou   
BUG: N/A   
Evidência: CARRINHOS_API-CT005_PASS_2026-07-14.png   
Data: 2026-07-14  

ID: API-CT006

Título: Validar cadastro de carrinho com id de produto duplicado.  
Ambiente: Postman / Windows 11   
Executor: Pedro L.   
Resultado Obtido: Um objeto json foi retornado contendo uma mensagem de erro "Não é permitido possuir produto duplicado".  
Status Obtido: 400 Bad Request  
Status: Passou   
BUG: N/A   
Evidência: CARRINHOS_API-CT006_PASS_2026-07-14.png   
Data: 2026-07-14  

ID: API-CT007

Título: Validar cadastro de dois carrinhos ao mesmo usuário.  
Ambiente: Postman / Windows 11   
Executor: Pedro L.   
Resultado Obtido: Um objeto json foi retornado contendo uma mensagem de erro "Não é permitido ter mais de 1 carrinho".  
Status Obtido: 400 Bad Request    
Status: Passou   
BUG: N/A   
Evidência: CARRINHOS_API-CT007_PASS_2026-07-14.png   
Data: 2026-07-14  

ID: API-CT008

Título: Validar cadastro de carrinho com id de produto inválido.  
Ambiente: Postman / Windows 11   
Executor: Pedro L.   
Resultado Obtido: Um objeto json foi retornado contendo uma mensagem de erro "Produto não encontrado".  
Status Obtido: 400 Bad Request  
Status: Passou   
BUG: N/A     
Evidência: CARRINHOS_API-CT008_PASS_2026-07-14.png   
Data: 2026-07-14  

ID: API-CT009

Título: Validar cadastro de carrinho com produto sem estoque.  
Ambiente: Postman / Windows 11   
Executor: Pedro L.   
Resultado Obtido: Um objeto json foi retornado contendo uma mensagem de erro "Produto não possui quantidade suficiente".  
Status Obtido: 400 Bad Request  
Status: Passou   
BUG: N/A   
Evidência: CARRINHOS_API-CT009_PASS_2026-07-14.png   
Data: 2026-07-14  

ID: API-CT010

Título: Validar cadastro de carrinho com token inválido.  
Ambiente: Postman / Windows 11   
Executor: Pedro L.   
Resultado Obtido: Um objeto json foi retornado contendo uma mensagem de erro "Token de acesso ausente, inválido, expirado ou usuário do token não existe mais".  
Status Obtido: 401 Unauthorized  
Status: Passou   
BUG: N/A   
Evidência: CARRINHOS_API-CT010_PASS_2026-07-14.png   
Data: 2026-07-14  

ID: API-CT011

Título: Buscar carrinho por id.  
Ambiente: Postman / Windows 11   
Executor: Pedro L.   
Resultado Obtido: Um objeto json foi retornado contendo os campos do carrinho "precoTotal", "quantidadeTotal, "idUsuario", "_id" e os produtos no carrinho contendo os campos "idProduto", "quantidade", "precoUnitario".  
Status Obtido: 200 OK  
Status: Passou   
BUG: N/A   
Evidência: CARRINHOS_API-CT011_PASS_2026-07-14.png   
Data: 2026-07-14  

ID: API-CT012

Título: Buscar carrinho por id inválido.  
Ambiente: Postman / Windows 11   
Executor: Pedro L.   
Resultado Obtido: Um objeto json foi retornado contendo uma mensagem de erro "Carrinho não encontrado".  
Status Obtido: 400 Bad Request  
Status: Passou 
BUG: N/A   
Evidência: CARRINHOS_API-CT012_PASS_2026-07-14.png   
Data: 2026-07-14  

ID: API-CT013

Título: Excluir um carrinho ao concluir uma compra.  
Ambiente: Postman / Windows 11   
Executor: Pedro L.   
Resultado Obtido: Um objeto json foi retornado contendo uma mensagem "Registro excluído com sucesso".  
Status Obtido: 200 OK  
Status: Passou   
BUG: N/A     
Evidência: CARRINHOS_API-CT013_PASS_2026-07-14.png   
Data: 2026-07-14  

ID: API-CT014

Título: Validar exclusão de carrinho a um usuário sem carrinho cadastrado (compra concluída).  
Ambiente: Postman / Windows 11   
Executor: Pedro L.   
Resultado Obtido: Um objeto json foi retornado contendo uma mensagem de erro "Não foi encontrado carrinho para esse usuário".  
Status Obtido: 400 Bad Request  
Status: Passou   
BUG: N/A   
Evidência: CARRINHOS_API-CT014_PASS_2026-07-14.png   
Data: 2026-07-14  

ID: API-CT015

Título: Excluir um carrinho ao concluir compra usando um token inválido.  
Ambiente: Postman / Windows 11   
Executor: Pedro L.   
Resultado Obtido: Um objeto json foi retornado contendo uma mensagem de erro "Token de acesso ausente, inválido, expirado ou usuário do token não existe mais".  
Status Obtido: 401 Unauthorized  
Status: Passou   
BUG: N/A   
Evidência: CARRINHOS_API-CT015_PASS_2026-07-14.png     
Data: 2026-07-14  

ID: API-CT016

Título: Excluir um carrinho ao cancelar uma compra.  
Ambiente: Postman / Windows 11   
Executor: Pedro L.   
Resultado Obtido: Um objeto json contendo uma mensagem "Registro excluído com sucesso. Estoque dos produtos reabastecido".  
Status Obtido: 200 OK  
Status: Passou   
BUG: N/A   
Evidência: CARRINHOS_API-CT016_PASS_2026-07-14.png   
Data: 2026-07-14  

ID: API-CT017

Título: Validar exclusão de carrinho a um usuário sem carrinho cadastrado (compra cancelada).  
Ambiente: Postman / Windows 11   
Executor: Pedro L.   
Resultado Obtido: Retornar um objeto json contendo uma mensagem de erro "Não foi encontrado carrinho para esse usuário".  
Status Obtido: 400 Bad Request  
Status: Passou   
BUG: N/A   
Evidência: CARRINHOS_API-CT017_PASS_2026-07-14.png   
Data: 2026-07-14  

ID: API-CT018

Título: Validar exclusão de carrinho a um usuário sem carrinho cadastrado (compra cancelada).  
Ambiente: Postman / Windows 11   
Executor: Pedro L.   
Resultado Obtido: Retornar um objeto json contendo uma mensagem de erro "Token de acesso ausente, inválido, expirado ou usuário do token não existe mais".  
Status Obtido: 401 Unauthorized  
Status: Passou   
BUG: N/A   
Evidência: CARRINHOS_API-CT018_PASS_2026-07-14.png   
Data: 2026-07-14  
