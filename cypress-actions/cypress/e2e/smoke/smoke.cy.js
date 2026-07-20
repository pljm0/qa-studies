import CheckoutPage from '../../pages/CheckoutPage'
import CartPage from '../../pages/CartPage'
import InventoryPage from '../../pages/InventoryPage'

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

describe('Saucedemo - Smoke Tests', () => {
 
  it('Smoke - Validar fluxo principal', () => {
    cy.login(userData.standardUser)
    InventoryPage.validatePage()
    InventoryPage.validateProductList()
    CartPage.addProductToCart("sauce-labs-backpack")
    CartPage.validateProductAdded("sauce-labs-backpack")
    CartPage.validateCartCount(1)
    CartPage.goToCart()
    CartPage.validateCartPageItemsQuantity(1)
    CheckoutPage.goToCheckout()
    CheckoutPage.validateCheckoutPage()
    CheckoutPage.checkoutInfo(checkoutData.validCheckOut)
    CheckoutPage.goToCheckoutStepTwo()
    CheckoutPage.validateCheckoutStepTwoPage()
    CheckoutPage.validateSummaryPage()
    CheckoutPage.goToCheckoutFinish()
    CheckoutPage.validateCheckoutFinishPage()
  })
  
})