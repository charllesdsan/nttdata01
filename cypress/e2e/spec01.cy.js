
describe('template spec', () => {

  const usuario = "usuario1"

  before( function(){
    cy.getSession(usuario)
  })

  it('teste de acesso', () => {
    cy.visitPage(usuario, '/admin/listarusuarios')
    cy.wait(2000)
  })

})