/* 
 * Autor: Charlles Santana
 * Projeto: TestCompany - NTTDATA
 * Data de criação: 01/09/2025
 * 
 * Script para atendimento do desafio para ingresso na empresa NTT-DATA. 
 * O teste realiza uma requisição do tipo GET ao endpoint /usuários e 
 * salva o resultado em um arquivo json (listaUsuarios).
 * 
 * Pre-requisitos
 * - N/A
 */


describe('Test API 02 - Listar e armazenar lista de usuarios', {tags: '@priority_high'}, function() {

  const usuario = "usuario1"

  before( function(){
    cy.getSession(usuario)
  })

  it('Listar usuarios via endpoint e armazenar o resultado em arquivo', () => {

    let path = `${Cypress.env('urlbaseAPI')}/usuarios`
  
    cy.fixture(`respAuthLogin${Cypress.env(usuario).id}.json`).then((param) => {

      cy.request({ method: 'GET',
                   url: path,
                   headers:{
                      authorization: 'Bearer '+ param.authorization,
                   }
      }).then((response) => {
        cy.writeFile(`cypress/fixtures/listaUsuarios.json`, response)
      });
    })
  })

















})