describe('Saucedemo - Checkout (standard_user)', () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com")
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()
    cy.url().should("contain", "inventory.html")
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()
  })
  
  it('CT-001 - Validar início do processo de checkout', () => {
    cy.url().should("contain", "checkout-step-one.html")
  })
  
  it('CT-002 - Validar o prosseguimento do checkout com dados válidos.', () => {
    cy.get('[data-test="firstName"]').type("Teste")
    cy.get('[data-test="lastName"]').type("Teste")
    cy.get('[data-test="postalCode"]').type("11111111")
    cy.get('[data-test="continue"]').click()
    cy.url().should("contain", "checkout-step-two.html")
  })

  it('CT-003 - Validar mensagem de erro no campo obrigatório "First Name".', () => {
    cy.get('[data-test="lastName"]').type("Teste")
    cy.get('[data-test="postalCode"]').type("11111111")
    cy.get('[data-test="continue"]').click()
    cy.get('.error-message-container').should("contain", "First Name is required").and("be.visible")
  })

  it('CT-004 - Validar mensagem de erro no campo obrigatório "Last Name".', () => {
    cy.get('[data-test="firstName"]').type("Teste")
    cy.get('[data-test="postalCode"]').type("11111111")
    cy.get('[data-test="continue"]').click()
    cy.get('.error-message-container').should("contain", "Last Name is required").and("be.visible")
  })

  it('CT-005 - Validar mensagem de erro no campo obrigatório "Postal Code".', () => {
    cy.get('[data-test="firstName"]').type("Teste")
    cy.get('[data-test="lastName"]').type("Teste")
    cy.get('[data-test="continue"]').click()
    cy.get('.error-message-container').should("contain", "Postal Code is required").and("be.visible")
  })

  it('CT-006 - Validar mensagem de erro no campo obrigatório "Postal Code".', () => {
    cy.get('[data-test="firstName"]').type("Teste")
    cy.get('[data-test="lastName"]').type("Teste")
    cy.get('[data-test="postalCode"]').type("11111111")
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="cart-list"]').should("be.visible")
    cy.get('[data-test="subtotal-label"]').should("be.visible")
    cy.get('[data-test="tax-label"]').should("be.visible")
    cy.get('[data-test="total-label"]').should("be.visible")
    cy.get('[data-test="cancel"]').should("be.visible")
    cy.get('[data-test="finish"]').should("be.visible")
  })

  it('CT-007 - Validar a finalização de compra.', () => {
    cy.get('[data-test="firstName"]').type("Teste")
    cy.get('[data-test="lastName"]').type("Teste")
    cy.get('[data-test="postalCode"]').type("11111111")
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="finish"]').click()
    cy.get('[data-test="complete-header"]').should("have.text", "Thank you for your order!").and("be.visible")
    cy.get('[data-test="back-to-products"]').should("be.visible")
  })

})

describe('Saucedemo - Checkout (error_user)', () => {

  it('CT-008 - Validar comportamento do checkout com usuário error_user.', () => {
    cy.visit("https://www.saucedemo.com")
    cy.get('[data-test="username"]').type("error_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()
    cy.url().should("contain", "inventory.html")
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type("Teste")
    cy.get('[data-test="lastName"]').type("Teste")
    cy.get('[data-test="postalCode"]').type("11111111")
    cy.get('[data-test="continue"]').click()
  })

})