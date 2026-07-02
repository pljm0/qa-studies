describe('Saucedemo - Login', () => {
  
  it('CT-001 - Efetuar login com username e senha válidos.', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()

    cy.url().should("include", "inventory.html")
  })
  
  it('CT-002 - Exibir mensagem de erro ao deixar campo username vazio.', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="error"]').should("contain", "Username is required")
  })

    it('CT-003 - Exibir mensagem de erro ao deixar campo password vazio.', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="error"]').should("contain", "Password is required")
  })

    it('CT-004 - Exibir mensagem de erro ao deixar campo username e campo password vazio.', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="error"]').should("contain", "Username is required")
  })

    it('CT-005 - Exibir mensagem de erro ao inserir username válido e password inválida.', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("123")
    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="error"]').should("contain", "Username and password do not match any user in this service")
  })

    it('CT-006 - Exibir mensagem de erro ao tentar logar com conta bloqueada.', () => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').type("locked_out_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()

    cy.get('[data-test="error"]').should("contain", "Sorry, this user has been locked out.")
  })

})
