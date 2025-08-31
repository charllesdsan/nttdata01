
describe('template spec', () => {

  const usuario = "usuario1"

  before( function(){
    cy.getSession(usuario)
  })

  it('passes', () => {
    //cy.visit('https://example.cypress.io')
    cy.log('Teste de API - Serverest - NTTDATA')
  })

})