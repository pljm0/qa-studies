class InventoryPage {

validatePage() {
    cy.get(".title").should("be.visible").and("have.text", "Products")
}





}

export default new InventoryPage()