class CartPage {

goToCart() {
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get(".title").should("be.visible").and("have.text", "Your Cart")
}

addProductToCart(productId) {
cy.get(`[data-test="add-to-cart-${productId}"]`).click()
}

removeProductFromCart(productId) {
cy.get(`[data-test="remove-${productId}"]`).click()
}

validateProductAdded(productId) {
     cy.get(`[data-test="remove-${productId}"]`).should("have.text", "Remove").and("be.visible")
}

validateRemovedProduct(productId) {
     cy.get(`[data-test="add-to-cart-${productId}"]`).should("have.text", "Add to cart").and("be.visible")

}

validateCartCount(count) {
    cy.get('[data-test="shopping-cart-badge"]').should("have.text", count).and("be.visible")
}

validateEmptyCart() {
    cy.get('[data-test="shopping-cart-badge"]').should("not.exist")
}

validateCartPageItemsQuantity(count) {
    cy.get('[data-test="inventory-item"]').should("have.length", count)
}

validateContinueShopping() {
     cy.get('[data-test="continue-shopping"]').click()
}

}
export default new CartPage()