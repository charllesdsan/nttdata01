

/**
 * Projeto: TestCompany - NTTDATA
 * Comando customizado para realizar o login via API
 * e salvar o token de acesso em um arquivo json.
 * O token será utilizado em outros scripts para
 * autenticação via endpoint.
 * 
 * Autor: Charlles Santana
 * Data de criação: 01/09/2025
 */
Cypress.Commands.add('getSession', function(usuario){

    cy.request('POST', `${Cypress.env('urlbaseAPI')}/login`, {
      email: Cypress.env(usuario).email,
      password: Cypress.env(usuario).senha,
    }).then((response) => {
      expect(response).property('status').to.equal(200)
      cy.writeFile(`cypress/fixtures/respAuthLogin${Cypress.env(usuario).id}.json`, response.body)
    })
});
