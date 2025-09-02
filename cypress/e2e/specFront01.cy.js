/* 
 * Autor: Charlles Santana
 * Projeto: TestCompany - NTTDATA
 * Data de criação: 01/09/2025
 * 
 * Foi observado que o usuario diariamente é excluído. 
 * Dessa forma, este script facilita sua criação para o inicio dos testes,
 * pois a existencia do 'usuario1' é obrigatória para a execução dos demais scripts.
 */

describe('Parametrização inicial', {tags: '@priority_low'}, function() {

  const usuario = "usuario1"

  it('Cadastrar usuario1', () => {

    cy.visit('https://front.serverest.dev/cadastrarusuarios')
    cy.wait(1000)

    cy.get('[data-testid="nome"]').type(Cypress.env(usuario).nome)
    cy.get('[data-testid="email"]').type(Cypress.env(usuario).email)
    cy.get('[data-testid="password"]').type(Cypress.env(usuario).senha)
    cy.get('[data-testid="checkbox"]').check()
    cy.get('[data-testid="cadastrar"]').click()
    cy.wait(1000)
  })
})