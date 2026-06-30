Casos de teste

ID: CT-001 Título: Efetuar login com username e senha válidos. Pré-Condição: Usuário cadastrado. Dados de teste: username: standard_user senha: secret_sauce Resultado esperado: O sistema deve permitir login e redirecionar para a página de produtos

ID: CT-002 Título: Exibir mensagem de erro ao deixar campo username vazio. Pré-Condição: Nenhuma. Dados de teste: senha: 123 Resultado esperado: O sistema deve exibir a mensagem de erro "Username is required."

ID: CT-003 Título: Exibir mensagem de erro ao deixar campo password vazio. Pré-Condição: Nenhuma. Dados de teste: username: teste Resultado esperado: O sistema deve exibir a mensagem de erro "Password is required."

ID: CT-004 Título: Exibir mensagem de erro ao deixar campo username e campo password vazio. Pré-Condição: Nenhuma. Dados de teste: username: "vazio" password: "vazio" Resultado esperado: O sistema deve exibir a mensagem de erro "Username is required."

ID: CT-005 Título: Exibir mensagem de erro ao inserir username válido e password inválida. Pré-Condição: Usuário cadastrado. Dados de teste: username: standard_user password: 123 Resultado esperado: O sistema deve exibir a mensagem de erro "Username and password do not match any user in this service." e permanecer na página de login.

ID: CT-006 Título: Exibir mensagem de erro ao tentar logar com conta bloqueada. Pré-Condição: Usuário cadastrado e bloqueado. Dados de teste: username: locked_out_user password: secret_sauce Resultado esperado: O sistema deve exibir a mensagem de erro "Sorry, this user has been locked out." e manter usuário na página de login.
