import LoginPage from '../pages/LoginPage'
import InventoryPage from '../pages/InventoryPage'

describe('Saucedemo - Login', () => {
  let data;

  before(() => {
    cy.fixture("usuarios").then((fixture) => {
      data = fixture;
    })
  })
 
  beforeEach(() => {
    LoginPage.visit()
    LoginPage.validatePage()
  })

  it('CT-001 - Efetuar login com username e senha válidos.', () => {
    LoginPage.login(data.standardUser)
    InventoryPage.validatePage()
  })
  
  it('CT-002 - Exibir mensagem de erro ao deixar campo username vazio.', () => {
    LoginPage.fillPassword(data.standardUser.password)
    LoginPage.clickLogin()
    LoginPage.validateErrorMessage(data.messages.usernameRequired)
  })

    it('CT-003 - Exibir mensagem de erro ao deixar campo password vazio.', () => {
    LoginPage.fillUsername(data.standardUser.username)
    LoginPage.clickLogin()
    LoginPage.validateErrorMessage(data.messages.passwordRequired)
  })

    it('CT-004 - Exibir mensagem de erro ao deixar campo username e campo password vazio.', () => {
    LoginPage.clickLogin()
    LoginPage.validateErrorMessage(data.messages.usernameRequired)
  })

    it('CT-005 - Exibir mensagem de erro ao inserir username válido e password inválida.', () => {
    LoginPage.fillUsername(data.standardUser.username)
    LoginPage.fillPassword(data.invalidUser.password)
    LoginPage.clickLogin()
    LoginPage.validateErrorMessage(data.messages.invalidCredentials)
  })

    it('CT-006 - Exibir mensagem de erro ao tentar logar com conta bloqueada.', () => {
    cy.login(data.lockedOutUser)
    LoginPage.validateErrorMessage(data.messages.lockedUser)
  })

})
