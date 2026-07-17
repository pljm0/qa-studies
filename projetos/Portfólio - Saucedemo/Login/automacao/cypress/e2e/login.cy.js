import LoginPage from '../pages/LoginPage'
import InventoryPage from '../pages/InventoryPage'

describe('Saucedemo - Login', () => {
  let data;

  before(() => {
    cy.fixture("users").then((fixture) => {
      data = fixture;
    })
  })
 
  beforeEach(() => {
    LoginPage.visit()
    LoginPage.validatePage()
  })

  it('CT-001 - Efetuar login com username e senha válidos.', () => {
    cy.login(data.standardUser)
    InventoryPage.validatePage()
  })
  
  it('CT-002 - Exibir mensagem de erro ao deixar campo username vazio.', () => {
    LoginPage.fillPassword(data.standardUser.password)
    LoginPage.clickLogin()
    LoginPage.validateErrorMessage("Username is required")
  })

    it('CT-003 - Exibir mensagem de erro ao deixar campo password vazio.', () => {
    LoginPage.fillUsername(data.standardUser.username)
    LoginPage.clickLogin()
    LoginPage.validateErrorMessage("Password is required")
  })

    it('CT-004 - Exibir mensagem de erro ao deixar campo username e campo password vazio.', () => {
    LoginPage.clickLogin()
    LoginPage.validateErrorMessage("Username is required")
  })

    it('CT-005 - Exibir mensagem de erro ao inserir username válido e password inválida.', () => {
    LoginPage.fillUsername(data.standardUser.username)
    LoginPage.fillPassword(data.invalidUser.password)
    LoginPage.clickLogin()
    LoginPage.validateErrorMessage("Username and password do not match any user in this service")
  })

    it('CT-006 - Exibir mensagem de erro ao tentar logar com conta bloqueada.', () => {
    cy.login(data.lockedOutUser)
    LoginPage.validateErrorMessage("Sorry, this user has been locked out.")
  })

})
