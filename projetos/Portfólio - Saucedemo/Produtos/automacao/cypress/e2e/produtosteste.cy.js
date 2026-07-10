describe('Saucedemo - Produtos', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()
    cy.url().should("include", "inventory.html")
  })

  it('CT-001 - Validar a exibição da listagem e componentes dos produtos.', () => {
    cy.get(".inventory_item").each((produto) => {
      cy.wrap(produto).find(".inventory_item_name").should("be.visible")
      cy.wrap(produto).find(".inventory_item_description").should("be.visible")
      cy.wrap(produto).find(".inventory_item_price").should("be.visible")
      cy.wrap(produto).find(".inventory_item_img").should("be.visible")
      cy.wrap(produto).find(".btn_inventory").should("be.visible")
    })
  }) 

  it('CT-003 - Validar a ordenação de produtos por nome em ordem alfabética crescente.', () => {
    cy.get(".inventory_item_name").then(($itens) => {
    const listaTela = []
    const listaOrdenada = []

    $itens.each((index, item) => {

      listaTela.push(item.innerText)
      listaOrdenada.push(item.innerText)

    })

    listaOrdenada.sort()

    expect(listaTela).to.deep.equal(listaOrdenada)
    })

  }) 

})