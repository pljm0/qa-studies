Plano de Testes

Projeto: ServeRest API - Carrinhos 
Sprint/Release: Sprint 1 
Endpoints incluídos: 
GET /carrinhos
GET /carrinhos/{_id} 
POST /carrinhos  
DELETE /carrinhos/concluir-compra
DELETE /carrinhos/cancelar-compra

Riscos principais: Indisponibilidade da API, falhas na autenticação e alteração dos requisitos durante os testes.

Escopo de teste: Validação dos endpoints de carrinhos, listagem de carrinhos, cadastro de carrinhos, consulta por ID de carrinhos, exclusão de carrinhos e retomada de produtos ao estoque e códigos HTTP.

Fora do escopo: Endpoints de usuário, produtos e login.

Abordagem: Testes funcionais baseados em requisitos da documentação da API, utilizando Particionamento em Classes de Equivalência (ECP), Análise do Valor Limite (BVA) e testes exploratórios.

Ambiente e dados: Postman, dados de teste válidos e inválidos para validação de endpoints.

Critérios de entrada: Documentação da API disponível, ambiente de teste acessível, endpoints disponíveis, Postman configurado e dados de teste definidos.

Critérios de saída: Todos os casos de teste planejados executados, resultados registrados, bugs documentados quando identificados e evidências anexadas.

Estimativa: 1 hora

Dependências: Disponibilidade da API, dos endpoints e do ambiente de testes.