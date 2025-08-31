
Cypress.Commands.add('getSession', function(usuario){

    cy.request('POST', `${Cypress.env('urlbaseAPI')}/login`, {
      email: Cypress.env(usuario).login,
      password: Cypress.env(usuario).senha,
    }).then((response) => {
      expect(response).property('status').to.equal(200)
      cy.writeFile(`cypress/fixtures/respAuthLogin${Cypress.env(usuario).id}.json`, response.body)
    })
});
