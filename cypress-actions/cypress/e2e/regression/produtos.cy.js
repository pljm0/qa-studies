import InventoryPage from '../../pages/InventoryPage'

describe('Saucedemo - Produtos', () => {
  let data;

  before(() => {
    cy.fixture("users").then((fixture) => {
      data = fixture
    })
  })

  beforeEach(() => {
    cy.login(data.standardUser)
    InventoryPage.validatePage()
  })

  it('CT-001 - Validar a exibição da listagem e componentes dos produtos.', () => {
    InventoryPage.validateProductList()
  }) 

  it('CT-003 - Validar a ordenação de produtos por nome em ordem alfabética crescente.', () => {
    InventoryPage.validateProductListAsc()
  }) 

  it('CT-004 - Validar a ordenação de produtos por nome em ordem alfabética decrescente.', () => {
    InventoryPage.validateProductListDesc()
  }) 

  it('CT-005 - Validar a ordenação de produtos por preço em ordem crescente.', () => {
    InventoryPage.validateProductListPriceAsc()
  })

  it('CT-006 - Validar a ordenação de produtos por preço em ordem decrescente.', () => {
    InventoryPage.validateProductListPriceDesc()
  })
})
