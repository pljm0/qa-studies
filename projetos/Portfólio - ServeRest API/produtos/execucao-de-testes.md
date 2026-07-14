Execução de Testes

ID: API-CT001

Título: Listar produtos cadastrados. 
Ambiente: Postman / Windows 11
Executor: Pedro L. 
Resultado Obtido: Um objeto json foi retornado contendo um campo de quantidade de produtos cadastrados e uma lista de produtos cadastrados com o campos "nome", "preco", "descricao", "quantidade" e "_id".
Status Obtido: 200 OK
Status: Passou
BUG: N/A
Evidência: PRODUTOS_API-CT001_PASS_2026-07-13.png
Data: 2026-07-13

ID: API-CT002

Título: Validar filtro de produtos com preço igual a 0. 
Ambiente: Postman / Windows 11
Executor: Pedro L. 
Resultado Obtido: Um objeto json foi retornado contendo a mensagem "preco deve ser um número positivo".
Status Obtido: 400 Bad Request
Status: Passou
BUG: N/A
Evidência: PRODUTOS_API-CT002_PASS_2026-07-13.png
Data: 2026-07-13

ID: API-CT003

Título: Validar filtro de produtos com preço igual a 1. 
Ambiente: Postman / Windows 11
Executor: Pedro L. 
Resultado Obtido: Um objeto json foi retornado com uma lista de produtos com preço igual a 1.
Status Obtido: 200 OK
Status: Passou
BUG: N/A
Evidência: PRODUTOS_API-CT003_PASS_2026-07-13.png
Data: 2026-07-13

ID: API-CT004

Título: Validar filtro de produtos com preço igual a 2. 
Ambiente: Postman / Windows 11
Executor: Pedro L. 
Resultado Obtido: Um objeto json foi retornado com uma lista de produtos com preço igual a 2.
Status Obtido: 200 OK
Status: Passou
BUG: N/A
Evidência: PRODUTOS_API-CT004_PASS_2026-07-13.png
Data: 2026-07-13

ID: API-CT005

Título: Validar filtro de produtos por quantidade igual a 0.
Ambiente: Postman / Windows 11
Executor: Pedro L. 
Resultado Obtido: Um objeto json foi retornado com uma lista de todos os produtos inclusive com quantidade maiores.
Status Obtido: 200 OK
Status: Bloqueado
BUG: N/A
Evidência: PRODUTOS_API-CT005_BLOCK_2026-07-13.png
Data: 2026-07-13
Obs: Quantidade = 0 está recebendo um comportamento diferenciado, necessário conferir com a equipe de desenvolvimento.

ID: API-CT006

Título: Validar filtro de produtos por quantidade igual a 1.
Ambiente: Postman / Windows 11
Executor: Pedro L. 
Resultado Obtido: Um objeto json foi retornado com uma lista de produtos com quantidade igual a 1.
Status Obtido: 200 OK
Status: Passou
BUG: N/A
Evidência: PRODUTOS_API-CT006_PASS_2026-07-13.png
Data: 2026-07-13

ID: API-CT007

Título: Cadastrar um produto.
Ambiente: Postman / Windows 11
Executor: Pedro L. 
Resultado Obtido: Um objeto json foi retornado com uma mensagem "Cadastro realizado com sucesso" e um "_id" único.
Status Obtido: 200 OK
Status: Passou
BUG: N/A
Evidência: PRODUTOS_API-CT007_PASS_2026-07-13.png
Data: 2026-07-13

ID: API-CT008

Título: Validar cadastro de produtos com nome repetido.
Ambiente: Postman / Windows 11
Executor: Pedro L. 
Resultado Obtido: Um objeto json foi retornado com uma mensagem de erro "Já existe produto com esse nome".
Status Obtido: 400 Bad Request
Status: Passou
BUG: N/A
Evidência: PRODUTOS_API-CT008_PASS_2026-07-13.png
Data: 2026-07-13

ID: API-CT009

Título: Validar cadastro de produtos com token inválido ou expirado.
Ambiente: Postman / Windows 11
Executor: Pedro L. 
Resultado Obtido: Um objeto json foi retornado com uma mensagem de erro "Token de acesso ausente, inválido, expirado ou usuário do token não existe mais".
Status Obtido: 401 Unauthorized
Status: Passou
BUG: N/A
Evidência: PRODUTOS_API-CT009_PASS_2026-07-13.png
Data: 2026-07-13

ID: API-CT010

Título: Validar cadastro de produtos com usuário sem administrador.
Ambiente: Postman / Windows 11
Executor: Pedro L. 
Resultado Obtido: Um objeto json foi retornado com uma mensagem de erro "Rota exclusiva para administradores".
Status Obtido: 403 Forbidden
Status: Passou
BUG: N/A
Evidência: PRODUTOS_API-CT010_PASS_2026-07-13.png
Data: 2026-07-13

ID: API-CT011

Título: Buscar produto usando id.
Ambiente: Postman / Windows 11
Executor: Pedro L. 
Resultado Obtido: Um objeto json foi retornado com o produto buscado contendo os campos "nome", "preco", "descricao", "quantidade" e "_id".
Status Obtido: 200 OK
Status: Passou
BUG: N/A
Evidência: PRODUTOS_API-CT011_PASS_2026-07-13.png
Data: 2026-07-13

ID: API-CT012

Título: Buscar produto usando id inválido.
Ambiente: Postman / Windows 11
Executor: Pedro L. 
Resultado Obtido: Um objeto json foi retornado com uma mensagem "Produto não encontrado".
Status Obtido: 400 Bad Request
Status: Passou
BUG: N/A
Evidência: PRODUTOS_API-CT012_PASS_2026-07-13.png
Data: 2026-07-13

ID: API-CT013

Título: Excluir um produto.
Ambiente: Postman / Windows 11
Executor: Pedro L. 
Resultado Obtido: Um objeto json foi retornado com uma mensagem "Registro excluído com sucesso".
Status Obtido: 200 OK
Status: Passou
BUG: N/A
Evidência: PRODUTOS_API-CT013_PASS_2026-07-13.png
Data: 2026-07-13

ID: API-CT014

Título: Excluir um produto usando id inválido.
Ambiente: Postman / Windows 11
Executor: Pedro L. 
Resultado Obtido: Um objeto json foi retornado com uma mensagem "Nenhum registro excluído".
Status Obtido: 400 Bad Request
Status: Passou
BUG: N/A
Evidência: PRODUTOS_API-CT014_PASS_2026-07-13.png
Data: 2026-07-13

ID: API-CT015

Título: Validar exclusão de produto que faz parte de um carrinho.
Ambiente: Postman / Windows 11
Executor: Pedro L. 
Resultado Obtido: Um objeto json foi retornado com uma mensagem "Não é permitido excluir produto que faz parte de carrinho" e um campo "idCarrinho" contendo os ids dos carrinhos no qual o produto está incluído.
Status Obtido: 400 Bad Request
Status: Passou
BUG: N/A
Evidência: PRODUTOS_API-CT015_PASS_2026-07-13.png
Data: 2026-07-13

ID: API-CT016

Título: Validar exclusão de produtos com token inválido ou expirado.
Ambiente: Postman / Windows 11
Executor: Pedro L. 
Resultado Obtido: Um objeto json foi retornado com uma mensagem de erro "Token de acesso ausente, inválido, expirado ou usuário do token não existe mais".
Status Obtido: 401 Unauthorized
Status: Passou
BUG: N/A
Evidência: PRODUTOS_API-CT016_PASS_2026-07-13.png
Data: 2026-07-13

ID: API-CT017

Título: Validar exclusão de produtos com usuário sem administrador.
Ambiente: Postman / Windows 11
Executor: Pedro L. 
Resultado Obtido: Um objeto json foi retornado com uma mensagem de erro "Rota exclusiva para administradores".
Status Obtido: 403 Forbidden
Status: Passou
BUG: N/A
Evidência: PRODUTOS_API-CT017_PASS_2026-07-13.png
Data: 2026-07-13

ID: API-CT018

Título: Editar informações de um produto.
Ambiente: Postman / Windows 11
Executor: Pedro L. 
Resultado Obtido: Um objeto json foi retornado com uma mensagem de erro "Registro alterado com sucesso".
Status Obtido: 200 OK
Status: Passou
BUG: N/A
Evidência: PRODUTOS_API-CT018_PASS_2026-07-13.png
Data: 2026-07-13

ID: API-CT019

Título: Validar cadastro de produto ao tentar editar um produto com id inexistente.
Ambiente: Postman / Windows 11
Executor: Pedro L. 
Resultado Obtido: Um objeto json foi retornado com uma mensagem "Cadastro realizado com sucesso" e um id único.
Status Obtido: 201 Created
Status: Passou
BUG: N/A
Evidência: PRODUTOS_API-CT019_PASS_2026-07-13.png
Data: 2026-07-13

ID: API-CT020

Título: Validar cadastro de produto utilizando nome repetido.
Ambiente: Postman / Windows 11
Executor: Pedro L. 
Resultado Obtido: Um objeto json foi retornado com uma mensagem de erro "Já existe produto com esse nome".
Status Obtido: 400 Bad Request
Status: Passou
BUG: N/A
Evidência: PRODUTOS_API-CT020_PASS_2026-07-13.png
Data: 2026-07-13

ID: API-CT021

Título: Validar edição de produtos com token inválido ou expirado.
Ambiente: Postman / Windows 11
Executor: Pedro L. 
Resultado Obtido: Um objeto json foi retornado com uma mensagem de erro "Token de acesso ausente, inválido, expirado ou usuário do token não existe mais".
Status Obtido: 401 Unauthorized
Status: Passou
BUG: N/A
Evidência: PRODUTOS_API-CT021_PASS_2026-07-13.png
Data: 2026-07-13

ID: API-CT022

Título: Validar edição de produtos com usuário sem administrador.
Ambiente: Postman / Windows 11
Executor: Pedro L. 
Resultado Obtido: Um objeto json foi retornado com uma mensagem de erro "Rota exclusiva para administradores".
Status Obtido: 403 Forbidden
Status: Passou
BUG: N/A
Evidência: PRODUTOS_API-CT022_PASS_2026-07-13.png
Data: 2026-07-13

