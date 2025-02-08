describe('Funcionalidade Login', () => {

  it('Deve fazer login com sucesso', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta')
    cy.get('#username').type('teste@teste.net')
    cy.get('#password').type('Katia@10!')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.page-title').should('contain', 'Minha conta')
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá')
  })

  it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => { 
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta')
    cy.get('#username').type('test@teste.net')
    cy.get('#password').type('Katia@10')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error > li').should('contain', 'Endereço')
  }) 


  it.only('Deve exibir uma mensagem de erro ao inserir senha inválida', () => { 
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta')
    cy.get('#username').type('teste@teste.net')
    cy.get('#password').type('Katia@10')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-error > li').should('contain', 'senha')
  }) 
  
})