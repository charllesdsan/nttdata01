/* 
 * Autor: Charlles Santana
 * Projeto: TestCompany - NTTDATA
 * Data de criação: 01/09/2025
 * 
 * Script para atendimento do desafio para ingresso na empresa NTT-DATA. 
 * O teste realiza a chamada e2e da tela listarprodutos fazendo a exclusão
 * e verificação do produto selecionado.
 * 
 * Pre-requisitos
 * - N/A
 */

describe('Exclusão de Produtos', {tags: '@priority_high'}, function() {

  const usuario = "usuario1"
  let ultimoProduto

  before( function(){
    cy.getSession(usuario)
  })

  
  it('Excluir ultimo produto do grid', () => {

    cy.intercept('GET', '/produtos').as('getProdutos') 
      cy.visitPage( usuario, '/admin/listarprodutos')
    cy.wait('@getProdutos')

    //Salva o nome do produto a ser excluido
    cy.get('tbody > :nth-last-child(1) > :nth-child(1)').invoke('text').then((value) => {
      ultimoProduto = value.trim;
      cy.log('Nome do produto:', ultimoProduto);
    })
    //Efetua a exclusão
    cy.get(':nth-last-child(1) > :nth-child(6) > .row > .btn-danger').click()
    cy.wait(1000)
  })

  it('Verificar se produto não consta na listagem do grid após exclusão', () => {

    cy.intercept('GET', '/produtos').as('getProdutos') 
      cy.visitPage( usuario, '/admin/listarprodutos')
    cy.wait('@getProdutos')

    cy.log('ultimoProduto: ' + ultimoProduto)

    cy.get('tbody > tr > :nth-child(1)').then(($cells) => {
      // Extrai todos os textos da coluna Nome
      const texts = [...$cells].map(cell => cell.innerText.trim())

      cy.log('Valores da coluna:', JSON.stringify(texts))
      expect(texts).to.not.contain(ultimoProduto)
    })
  })
})