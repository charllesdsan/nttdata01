/* 
 * Autor: Charlles Santana
 * Projeto: TestCompany - NTTDATA
 * Data de criação: 01/09/2025
 * 
 * Script para atendimento do desafio para ingresso na empresa NTT-DATA. 
 * O teste faz uso do ID o usuário salvo no arquivo lastUserCreated.json
 * e realiza a exclusao do registro via endpoint.
 * 
 * Pre-requisitos
 * - N/A
 */


describe('Test API 03 - Remover usuario', {tags: '@priority_high'}, function() {

  const usuario = "usuario1"

  before( function(){
    cy.getSession(usuario)
  })

  it('Remover usuario via endpoint', () => {

    cy.readFile(`cypress/fixtures/lastUserCreated.json`).its('body._id').then( idUser => {

      let path = `${Cypress.env('urlbaseAPI')}/usuarios/`+idUser

      cy.fixture(`respAuthLogin${Cypress.env(usuario).id}.json`).then((param) => {

        cy.request({ method: 'DELETE',
                    url: path,
                    headers:{
                        authorization: 'Bearer '+ param.authorization,
                    }
        }).then((response) => {
          expect(response).property('status').to.equal(200)
        });
      })
    })

  })















})