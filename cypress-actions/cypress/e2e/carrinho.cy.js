describe('Saucedemo - Carrinho', () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com")
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()
    cy.url().should("contain", "inventory.html")
  })
  
    it('CT-001 - Validar adição de produto ao carrinho e atualização de contador.', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="remove-sauce-labs-backpack"]').should("have.text", "Remove").and("be.visible")
    cy.get('[data-test="shopping-cart-badge"]').should("have.text", "1").and("be.visible")
  })

    it('CT-002 - Validar remoção de produto ao carrinho e atualização de contador.', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should("have.text", "Add to cart").and("be.visible")
    cy.get('[data-test="shopping-cart-badge"]').should("not.exist")
  })

    it('CT-003 - Validar redirecionamento ao carrinho e exibição dos produtos adicionados.', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.url().should("contain", "cart.html")
    cy.get('[data-test="inventory-item"]').should("have.length", 2)
  })

    it('CT-004 - Validar o retorno a página de produtos ao continuar comprando.', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="continue-shopping"]').click()
    cy.url().should("contain", "inventory.html")
  })
    
})