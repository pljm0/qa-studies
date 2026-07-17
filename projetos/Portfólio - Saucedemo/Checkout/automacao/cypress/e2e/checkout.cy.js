import CheckoutPage from '../pages/CheckoutPage'
import CartPage from '../pages/CartPage'

let userData
let checkoutData

  before(() => {
    cy.fixture("users").then((fixture) => {
      userData = fixture;

    cy.fixture("checkout").then((fixture) => {
      checkoutData = fixture;
    
    })
  })
})

describe('Saucedemo - Checkout (standard_user)', () => {

  beforeEach(() => {
    cy.login(userData.standardUser)
    CartPage.addProductToCart("sauce-labs-backpack")
    CartPage.goToCart()
    CheckoutPage.goToCheckout()
  })
  
  it('CT-001 - Validar início do processo de checkout', () => {
     CheckoutPage.validateCheckoutPage()
  })
  
  it('CT-002 - Validar o prosseguimento do checkout com dados válidos.', () => {
    CheckoutPage.checkoutInfo(checkoutData.validCheckOut)
    CheckoutPage.goToCheckoutStepTwo()
    CheckoutPage.validateCheckoutStepTwoPage()
  })

  it('CT-003 - Validar mensagem de erro no campo obrigatório "First Name".', () => {
    CheckoutPage.fillLastName(checkoutData.validCheckOut.lastName)
    CheckoutPage.fillPostalCode(checkoutData.validCheckOut.postalCode)
    CheckoutPage.goToCheckoutStepTwo()
    CheckoutPage.validateError("First Name is required")
  })

  it('CT-004 - Validar mensagem de erro no campo obrigatório "Last Name".', () => {
    CheckoutPage.fillFirstName(checkoutData.validCheckOut.firstName)
    CheckoutPage.fillPostalCode(checkoutData.validCheckOut.postalCode)
    CheckoutPage.goToCheckoutStepTwo()
    CheckoutPage.validateError("Last Name is required")
  })

  it('CT-005 - Validar mensagem de erro no campo obrigatório "Postal Code".', () => {
    CheckoutPage.fillFirstName(checkoutData.validCheckOut.firstName)
    CheckoutPage.fillLastName(checkoutData.validCheckOut.lastName)
    CheckoutPage.goToCheckoutStepTwo()
    CheckoutPage.validateError("Postal Code is required")
  })

  it('CT-006 - Validar exibição do resumo da compra.', () => {
    CheckoutPage.checkoutInfo(checkoutData.validCheckOut)
    CheckoutPage.goToCheckoutStepTwo()
    CheckoutPage.validateSummaryPage()
  })

  it('CT-007 - Validar a finalização de compra.', () => {
    CheckoutPage.checkoutInfo(checkoutData.validCheckOut)
    CheckoutPage.goToCheckoutStepTwo()
    CheckoutPage.goToCheckoutFinish()
    CheckoutPage.validateCheckoutFinishPage()
  })

})

describe('Saucedemo - Checkout (error_user)', () => {

  it('CT-008 - Validar comportamento do checkout com usuário error_user.', () => {
    cy.login(userData.errorUser)
    CartPage.addProductToCart("sauce-labs-backpack")
    CartPage.goToCart()
    CheckoutPage.goToCheckout()
    CheckoutPage.fillFirstName(checkoutData.validCheckOut.firstName)
    CheckoutPage.fillPostalCode(checkoutData.validCheckOut.postalCode)
    CheckoutPage.goToCheckoutStepTwo()
    CheckoutPage.validateCheckoutStepTwoPage()
  })

})