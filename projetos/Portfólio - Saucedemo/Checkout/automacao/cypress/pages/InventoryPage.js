class InventoryPage {

validatePage() {
    cy.get(".title").should("be.visible").and("have.text", "Products")
}

validateProductList() {
    cy.get(".inventory_item").each(($product) => {
      cy.wrap($product).within (() => {
      cy.get(".inventory_item_name").should("be.visible")
      cy.get(".inventory_item_desc").should("be.visible")
      cy.get(".inventory_item_price").should("be.visible")
      cy.get(".inventory_item_img").should("be.visible")
      cy.get(".btn_inventory").should("be.visible")
    })
    })
}

validateProductListAsc() {
    cy.get('[data-test="product-sort-container"]').select("az")
    cy.get(".inventory_item_name").then(($items) => {
      const displayedPrices = [];

      $items.each((index, item) => {
        displayedPrices.push(item.innerText);
      });

    const sortedPrices = [...displayedPrices].sort();

    expect(displayedPrices).to.deep.equal(sortedPrices);
    });
}

validateProductListDesc() {
    cy.get('[data-test="product-sort-container"]').select("za")
    cy.get(".inventory_item_name").then(($items) => {
      const displayedNames = [];

      $items.each((index, item) => {
        displayedNames.push(item.innerText);
      });

    const sortedNames = [...displayedNames].sort().reverse();

    expect(displayedNames).to.deep.equal(sortedNames);
    });
}

validateProductListPriceAsc() {
    cy.get('[data-test="product-sort-container"]').select("lohi")
    cy.get(".inventory_item_price").then(($items) => {
      const displayedPrices = [];

      $items.each((index, item) => {
        displayedPrices.push(item.innerText.replace("$", ""));
      });

      const sortedPrices = [...displayedPrices].sort((a, b) => (a - b));

      expect(displayedPrices).to.deep.equal(sortedPrices);
    });
}

validateProductListPriceDesc() {
    cy.get('[data-test="product-sort-container"]').select("hilo")
    cy.get(".inventory_item_price").then(($items) => {
      const displayedPrices = [];

      $items.each((index, item) => {
        displayedPrices.push(item.innerText.replace("$", ""));   
      });

      const sortedPrices = [...displayedPrices].sort((a, b) => (b - a));

      expect(displayedPrices).to.deep.equal(sortedPrices);
    })
  }
}

export default new InventoryPage()