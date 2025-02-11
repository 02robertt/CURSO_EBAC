const { Faker, faker } = require('@faker-js/faker');

describe('Pré cadastro no site', () => {

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/my-account/')
  })

  it('Preencher os dados de registro e realizar o cadastro no site da ebac', () => {
    cy.get('#reg_email').type(faker.internet.email())
    cy.get('#reg_password').type('Showname10@')
    cy.get(':nth-child(4) > .button').click()
    
    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('#account_first_name').type(faker.name.firstName())
    cy.get('#account_last_name').type(faker.name.lastName())
    cy.get('.woocommerce-Button').click()
    cy.get('.woocommerce-message').should('contain', 'Detalhes')
  })
})