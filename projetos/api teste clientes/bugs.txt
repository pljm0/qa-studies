Bug Report

ID: BUG-01
Título: POST /cliente atualiza cliente existente ao utilizar um ID já cadastrado.
Pré-condições: Usar um ID já existente no sistema durante o cadastro de um novo cliente.
Passos para reproduzir:
1. Utilizar o POST /cliente 
2. Entrar no body da requisição
3. Cadastrar um cliente com os campos nome, idade e ID, no qual o ID é o mesmo que um cliente já cadastrado
4. Enviar requisição.
Resultado esperado: O sistema deve proibir o cadastro de um cliente com ID já existente.
Resultado obtido: 
- Status Code 201
- O sistema atualizou o cliente já existente com outros dados
Frequência: Sempre
Ambiente: API
Severidade: Alta
Prioridade: Alta
Evidência: 

Usuário já cadastrado:

    "3712": {
        "nome": "Mickey",
        "idade": 43,
        "id": 3712,
        "risco": 0
    }

POST:

   {
        "nome": "Pateta",
        "idade": 43,
        "id": 3712,
    }

Resultado:

    "3712": {
        "nome": "Pateta",
        "idade": 43,
        "id": 3712,
        "risco": 0
    }

Caso relacionado: API-CT03