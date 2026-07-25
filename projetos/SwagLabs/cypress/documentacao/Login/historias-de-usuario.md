Histórias de Usuário 

US-01 — Login com credenciais válidas

Como usuário, quero realizar login com usuário e senha válidos, para acessar a área de produtos da aplicação.

Critérios de aceite:

O sistema deve permitir login quando username e senha forem válidos.
Após login bem-sucedido, o usuário deve ser direcionado para a página de produtos.

US-02 — Validação de campos obrigatórios no login

Como usuário, quero ser informado quando deixar campos obrigatórios vazios, para saber quais dados preciso preencher.

Critérios de aceite:

Se o campo username estiver vazio, o sistema deve exibir a mensagem: Username is required.
Se username e senha estiverem vazios, o sistema deve exibir a mensagem: Username is required.
Se o campo senha estiver vazio e o username estiver preenchido, o sistema deve exibir a mensagem: Password is required.

US-03 — Login com credenciais inválidas

Como usuário, quero ser informado quando minhas credenciais estiverem incorretas, para saber que o login não foi realizado.

Critérios de aceite:

Se o username estiver correto e a senha estiver incorreta, o sistema deve exibir a mensagem: Username and password do not match any user in this service.
O sistema não deve permitir acesso à página de produtos quando as credenciais forem inválidas.

US-04 — Login com usuário bloqueado

Como usuário bloqueado, quero ser informado de que minha conta está bloqueada ao tentar realizar login, para compreender por que não consigo acessar o sistema.

Critérios de aceite
Ao informar as credenciais de um usuário bloqueado, o sistema deve impedir o login.

O sistema deve exibir a mensagem:

"Sorry, this user has been locked out."

O usuário não deve ser redirecionado para a página de produtos.
O usuário deve permanecer na tela de login.