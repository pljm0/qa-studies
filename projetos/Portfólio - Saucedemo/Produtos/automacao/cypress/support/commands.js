import LoginPage from "../pages/LoginPage"

Cypress.Commands.add("login", (user) => {
    LoginPage.visit()
    LoginPage.login(user)
})