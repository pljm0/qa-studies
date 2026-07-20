class CheckoutPage {

goToCheckout() {
    cy.get('[data-test="checkout"]').click()
}

goToCheckoutStepTwo() {
    cy.get('[data-test="continue"]').click()
}

goToCheckoutFinish() {
    cy.get('[data-test="finish"]').click()
    cy.get('[data-test="back-to-products"]').should("be.visible")
}

validateCheckoutPage() {
    cy.get(".title").should("be.visible").and("have.text", "Checkout: Your Information")
}

validateCheckoutStepTwoPage() {
    cy.get(".title").should("be.visible").and("have.text", "Checkout: Overview")
}

validateCheckoutFinishPage() {
    cy.get(".title").should("be.visible").and("have.text", "Checkout: Complete!")
}

fillFirstName(firstName) {
    cy.get('[data-test="firstName"]').type(firstName)
}

fillLastName(lastName) {
    cy.get('[data-test="lastName"]').type(lastName)
}

fillPostalCode(postalCode) {
    cy.get('[data-test="postalCode"]').type(postalCode)
}

validateCartSummary() {
    cy.get('[data-test="cart-list"]').should("be.visible")
}

validatePriceSummary() {
    cy.get('[data-test="subtotal-label"]').should("be.visible")
    cy.get('[data-test="tax-label"]').should("be.visible")
    cy.get('[data-test="total-label"]').should("be.visible")
}

validateCheckoutButtons() {
    cy.get('[data-test="cancel"]').should("be.visible")
    cy.get('[data-test="finish"]').should("be.visible")
}

validateError(message) {
    cy.get('.error-message-container').should("contain", message).and("be.visible")
}

checkoutInfo(checkoutData) {
    this.fillFirstName(checkoutData.firstName)
    this.fillLastName(checkoutData.lastName)
    this.fillPostalCode(checkoutData.postalCode)
}

validateSummaryPage() {
    this.validateCheckoutStepTwoPage()
    this.validateCartSummary()
    this.validatePriceSummary()
    this.validateCheckoutButtons()
}

}

export default new CheckoutPage()