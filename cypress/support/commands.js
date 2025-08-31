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


Cypress.Commands.add('visitPage', function(usuario, page){
    
  let token
 
  cy.readFile(`cypress/fixtures/respAuthLogin${Cypress.env(usuario).id}.json`).its('authorization').then((value) => { token = value }) 

  cy.visit( `${Cypress.env('urlbaseFront')}${page}`, {                
    onBeforeLoad: (browser) => {
      browser.localStorage.setItem('serverest/userEmail', Cypress.env(usuario).login);
      browser.localStorage.setItem('serverest/userNome', Cypress.env(usuario).nome);
      browser.localStorage.setItem('serverest/userToken', token);
    }
  });
});