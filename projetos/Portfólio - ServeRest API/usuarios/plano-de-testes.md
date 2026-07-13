Plano de Testes

Projeto: ServeRest API - Usuários
Sprint/Release: Sprint 1
Endpoints incluídos:
GET /usuarios
GET /usuarios/{\_id}
POST /usuários
POST /login
PUT /usuarios/{\_id}
DELETE /usuarios/{\_id}

Riscos principais: Indisponibilidade da API, falhas na autenticação e alteração dos requisitos durante os testes.

Escopo de teste: Validação dos endpoints de usuários, listagem, cadastro, consulta por ID, atualização, exclusão de usuários e códigos HTTP.

Fora do escopo: Endpoints de produtos, carrinhos e login.

Abordagem: Testes funcionais baseados em requisitos da documentação da API, utilizando Particionamento em Classes de Equivalência (ECP) e testes exploratórios.

Ambiente e dados: Postman, dados de teste válidos e inválidos para validação de endpoints.

Critérios de entrada: Documentação da API disponível, ambiente de teste acessível, endpoints disponíveis, Postman configurado e dados de teste definidos.

Critérios de saída: Todos os casos de teste planejados executados, resultados registrados, bugs documentados quando identificados e evidências anexadas.

Estimativa: 30 minutos

Dependências: Disponibilidade da API, dos endpoints e do ambiente de testes.

