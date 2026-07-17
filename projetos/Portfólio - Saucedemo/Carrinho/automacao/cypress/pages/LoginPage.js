class LoginPage {

visit() {
    cy.visit("/")
}

fillUsername(username) {
    cy.get('[data-test="username"]').type(username)
}

fillPassword(password) {
    cy.get('[data-test="password"]').type(password)
}

clickLogin() {
    cy.get('[data-test="login-button"]').click()
}

validateErrorMessage(message) {
    cy.get('[data-test="error"]').should("be.visible").and("contain", message)
}

validatePage() {
    cy.get(".login_logo").should("be.visible").and("have.text", "Swag Labs")
}

login(user) {
    this.fillUsername(user.username)
    this.fillPassword(user.password)
    this.clickLogin()
}

}

export default new LoginPage()