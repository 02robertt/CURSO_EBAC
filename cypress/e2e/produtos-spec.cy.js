const { it } = require("@faker-js/faker");

describe('funcionalidade Página de produtos', () => {

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
  });

  it('Deve selecionar um produto da lista', () => {
    cy.get('[class="product-block grid"]')
      //.first()
      .contains('Ariel Roll Sleeve Sweatshirt')
      .click()
  })

  it.only('Deve adicionar o item ao carrinho', () => {
    cy.get('[class="product-block grid"]')
    .contains('Ariel Roll Sleeve Sweatshirt').click()
  }) 

})  