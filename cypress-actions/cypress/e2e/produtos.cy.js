describe('Saucedemo - Produtos', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()
  })

  it('CT-001 - Validar a exibição da listagem e componentes dos produtos.', () => {
    cy.url().should("include", "inventory.html")
    cy.get(".inventory_item").each((produto) => {
      cy.wrap(produto).find(".inventory_item_name").should("be.visible")
      cy.wrap(produto).find(".inventory_item_description").should("be.visible")
      cy.wrap(produto).find(".inventory_item_price").should("be.visible")
      cy.wrap(produto).find(".inventory_item_img").should("be.visible")
      cy.wrap(produto).find(".btn_inventory").should("be.visible")
    })
  }) 

})