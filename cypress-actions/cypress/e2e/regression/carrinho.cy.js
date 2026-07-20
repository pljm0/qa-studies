import CartPage from '../../pages/CartPage'
import InventoryPage from '../../pages/InventoryPage'

describe('Saucedemo - Carrinho', () => {
  let data

  before(() => {
    cy.fixture("users").then((fixture) => {
      data = fixture
    })
  })

  beforeEach(() => {
    cy.login(data.standardUser)
    InventoryPage.validatePage()
  })
  
    it('CT-001 - Validar adição de produto ao carrinho e atualização de contador.', () => {
    CartPage.addProductToCart("sauce-labs-backpack")
    CartPage.validateProductAdded("sauce-labs-backpack")
    CartPage.validateCartCount(1)
  })

    it('CT-002 - Validar remoção de produto ao carrinho e atualização de contador.', () => {
    CartPage.addProductToCart("sauce-labs-backpack")
    CartPage.removeProductFromCart("sauce-labs-backpack")
    CartPage.validateRemovedProduct("sauce-labs-backpack")
    CartPage.validateEmptyCart()
  })

    it('CT-003 - Validar redirecionamento ao carrinho e exibição dos produtos adicionados.', () => {
    CartPage.addProductToCart("sauce-labs-backpack")
    CartPage.addProductToCart("sauce-labs-bike-light")
    CartPage.goToCart()
    CartPage.validateCartPageItemsQuantity(2)
  })

    it('CT-004 - Validar o retorno a página de produtos ao continuar comprando.', () => {
    CartPage.addProductToCart("sauce-labs-backpack")
    CartPage.goToCart()
    CartPage.validateContinueShopping()
    InventoryPage.validatePage()
  })
    
})