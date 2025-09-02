// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


/**
 * comando criado para permitir o acesso as páginas do front-end
 * sem a necessidade de realizar o login via interface gráfica.
 * O comando injeta os dados no localStorage do browser.
 * 
 * @author Charlles Santana
 * @param {string} usuario - nome do usuario conforme definido no cypress.env.json
 * @param {string} page - url da página a ser acessada 
 */
Cypress.Commands.add('visitPage', function(usuario, page){
    
  let token
 
  cy.readFile(`cypress/fixtures/respAuthLogin${Cypress.env(usuario).id}.json`).its('authorization').then((value) => { token = value }) 

  cy.visit( `${Cypress.env('urlbaseFront')}${page}`, {                
    onBeforeLoad: (browser) => {
      browser.localStorage.setItem('serverest/userEmail', Cypress.env(usuario).email);
      browser.localStorage.setItem('serverest/userNome', Cypress.env(usuario).nome);
      browser.localStorage.setItem('serverest/userToken', token);
    }
  });
});