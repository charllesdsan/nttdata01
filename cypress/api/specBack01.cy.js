/* 
 * Autor: Charlles Santana
 * Projeto: TestCompany - NTTDATA
 * Data de criação: 01/09/2025
 * 
 * Script para atendimento do desafio para ingresso na empresa NTT-DATA. 
 * O teste realiza o cadastro de um novo usuário via endpoint e salva 
 * o resultado em um arquivo json (lastUserCreated).
 * 
 * Pre-requisitos
 * - N/A
 */

import { faker } from '@faker-js/faker';

describe('Test API 01 - Cadastrar novo usuario', {tags: '@priority_high'}, function() {

  const usuario = "usuario1"
  let sfaker

  function runfaker(){
    const obj = {
      nome: `cy-${faker.word.words(1)}`,
      numero: faker.string.numeric(3),
      email: `cy-${faker.internet.email()}`
    }
    return obj;
  }

  before( function(){
    cy.getSession(usuario)
    sfaker = runfaker()
  })

  it('Cadastrar usuario via endpoint', () => {

    let path = `${Cypress.env('urlbaseAPI')}/usuarios`
    let nomeFake = sfaker.nome
    let emailFake = sfaker.email

    cy.fixture(`respAuthLogin${Cypress.env(usuario).id}.json`).then((param) => {

      cy.request({ method: 'POST',
                   url: path, 
                   body: {
                      nome: nomeFake,
                      email: emailFake,
                      password: "123456",
                      administrador: "true"
                   },
                   headers:{
                      authorization: 'Bearer '+ param.token,
                   }
      }).then((response) => {
          cy.log(response.status)
          expect(response).property('status').to.equal(201)
          cy.writeFile(`cypress/fixtures/lastUserCreated.json`, response)
          cy.wait(1000)
      })
    })
  })

















})