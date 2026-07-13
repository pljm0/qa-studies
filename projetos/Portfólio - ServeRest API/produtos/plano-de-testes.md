Plano de Testes

Projeto: ServeRest API - Produtos
Sprint/Release: Sprint 1
Endpoints incluídos:
GET /produtos
GET /produtos/{_id}
POST /produtos
PUT /produtos/{_id}
DELETE /produtos/{_id}

Riscos principais: Indisponibilidade da API, falhas na autenticação e alteração dos requisitos durante os testes.

Escopo de teste: Validação dos endpoints de produtos, listagem de produtos, cadastro de produtos, consulta por ID de produtos, atualização de produtos, exclusão de produtos e códigos HTTP.

Fora do escopo: Endpoints de usuário, carrinhos e login.

Abordagem: Testes funcionais baseados em requisitos da documentação da API, utilizando Particionamento em Classes de Equivalência (ECP), Análise do Valor Limite (BVA) e testes exploratórios.

Ambiente e dados: Postman, dados de teste válidos e inválidos para validação de endpoints.

Critérios de entrada: Documentação da API disponível, ambiente de teste acessível, endpoints disponíveis, Postman configurado e dados de teste definidos.

Critérios de saída: Todos os casos de teste planejados executados, resultados registrados, bugs documentados quando identificados e evidências anexadas.

Estimativa: 1 hora

Dependências: Disponibilidade da API, dos endpoints e do ambiente de testes.