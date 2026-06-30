Casos de Teste API:

ID: API-CT01
Título: Consultar todos os clientes quando existem clientes cadastrados
Objetivo: Verificar se o endpoint GET /clientes retorna uma lista de clientes cadastrados.
Método: GET
Endpoint: {{baseUrl}}/clientes
Pré-Condições: Deve haver pelo menos um cliente cadastrado no sistema.
Status Esperado: 200
Resultado Esperado: Retornar uma lista json contendo todos os clientes cadastrados e cada cliente deve possuir os campos id, nome, idade e risco.

ID: API-CT02
Título: Consultar todos os clientes quando não existem clientes cadastrados
Objetivo: Verificar se o endpoint GET /clientes retorna uma lista vazia.
Método: GET
Endpoint: {{baseUrl}}/clientes
Pré-Condições: Não deve haver nenhum cliente cadastrado no sistema.
Status Esperado: 200
Resultado Esperando: Deve retornar uma lista JSON vazia.

ID: API-CT03
Título: Cadastrar cliente com ID já existente
Objetivo: Verificar que o sistema não permite o cadastro de um cliente utilizando um ID já existente.
Método: POST
Endpoint: {{baseUrl}}/cliente
Pré-Condições: Usar um ID já existente no sistema durante o cadastro de um novo cliente.
Status Esperado: 400/409	
Resultado Esperando: O sistema deve proibir o cadastro de um cliente com ID já existente.

ID: API-CT01
Resultado Obtido: 
- Status Code 200.
- Retornada uma lista JSON contendo todos os clientes cadastrados.
- Todos os clientes possuem os campos id, nome, idade e risco.
Status: PASSOU

ID: API-CT02
Resultado Obtido: 
- Status Code 200.
- Retornada uma lista JSON vazia.
Status: PASSOU

ID: API-CT03
Resultado Obtido:
- Status Code 201
- O sistema atualizou o cliente já existente com outros dados
Status: FALHOU

