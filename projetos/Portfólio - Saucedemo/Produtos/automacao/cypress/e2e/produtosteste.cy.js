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
      const listaTela = [];

      $itens.each((index, item) => {
        listaTela.push(item.innerText);
      });

    const listaOrdenada = [...listaTela].sort();

    expect(listaTela).to.deep.equal(listaOrdenada);
    });

  }) 

  it('CT-004 - Validar a ordenação de produtos por nome em ordem alfabética decrescente.', () => {
    cy.get('[data-test="product-sort-container"]').select("za")
    cy.get(".inventory_item_name").then(($itens) => {
      const listaTela = [];

      $itens.each((index, item) => {
        listaTela.push(item.innerText);
      });

    const listaOrdenada = [...listaTela].sort().reverse();

    expect(listaTela).to.deep.equal(listaOrdenada);
    });

  }) 

  it('CT-005 - Validar a ordenação de produtos por preço em ordem crescente.', () => {
    cy.get('[data-test="product-sort-container"]').select("lohi")
    cy.get(".inventory_item_price").then(($itens) => {
      const listaTela = [];

      $itens.each((index, item) => {
        listaTela.push(item.innerText.replace("$", ""));
      });

      const listaOrdenada = [...listaTela].sort((a, b) => (a - b));

      expect(listaTela).to.deep.equal(listaOrdenada);
    });
  });

  it('CT-006 - Validar a ordenação de produtos por preço em ordem decrescente.', () => {
    cy.get('[data-test="product-sort-container"]').select("hilo")
    cy.get(".inventory_item_price").then(($itens) => {
      const listaTela = [];

      $itens.each((index, item) => {
        listaTela.push(item.innerText.replace("$", ""));   
      });

      const listaOrdenada = [...listaTela].sort((a, b) => (b - a));

      expect(listaTela).to.deep.equal(listaOrdenada);
    })
  })

});