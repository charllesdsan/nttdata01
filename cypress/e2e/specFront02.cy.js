/* 
 * Autor: Charlles Santana
 * Projeto: TestCompany - NTTDATA
 * Data de criação: 01/09/2025
 * 
 * Script para atendimento do desafio para ingresso na empresa NTT-DATA. 
 * O teste realiza a chamada e2e da tela cadastrarprodutos e listarprodutos
 * fazendo a criação e verificação do produto cadastrado.
 * 
 * Pre-requisitos
 * - N/A
 */

import { faker } from '@faker-js/faker';

describe('Cadratro de Produtos', {tags: '@priority_high'}, function() {

  const usuario = "usuario1"
  let productCreate
  let sfaker

  function runfaker(){
    const obj = {
      nome: `cy-${faker.word.words(1)}`,
      descricao: `cy-${faker.word.words(10)}`,
      preco: faker.string.numeric(3),
      quantidade: faker.string.numeric(2),
      email: `cy-${faker.internet.email()}`
    }
    return obj;
  }

  before( function(){
    cy.getSession(usuario)
    sfaker = runfaker()
  })

  it('Cadastrar novo produto', () => {

    const filepath = 'cypress/fixtures/upload.png'

    cy.visitPage( usuario, '/admin/cadastrarprodutos')
    cy.wait(1000)

    productCreate = sfaker.nome
    cy.get('[data-testid="nome"]').type(sfaker.nome)
    cy.get('[data-testid="preco"]').type(sfaker.preco)
    cy.get('[data-testid="descricao"]').type(sfaker.descricao)
    cy.get('[data-testid="quantity"]').type(sfaker.quantidade)

    cy.get('input[type=file]').selectFile(filepath, { force: true })
    cy.wait(1000)

    cy.get('[data-testid="cadastarProdutos"]').click()
    cy.wait(2000)
  })

  it('Verificar se produto foi cadastrado', () => {

    cy.intercept('GET', '/produtos').as('getProdutos') 
      cy.visitPage( usuario, '/admin/listarprodutos')
    cy.wait('@getProdutos')

    cy.get('tbody > tr > :nth-child(1)').then(($cells) => {
      // Extrai todos os textos da coluna Nome
      const texts = [...$cells].map(cell => cell.innerText.trim())

      cy.log('Valores da coluna:', JSON.stringify(texts))
      expect(texts).to.include(productCreate)
    })
  })
})