/// <reference types="cypress"/>

describe('criar agente AI', () => {
    before(() => {
      // Executa uma vez antes de todos os testes dentro do bloco describe
      cy.visit('https://platform.zaia.app/auth/login', { log: false });
      // Faça login aqui
    });
  
    beforeEach(() => {
      // Executa antes de cada teste, mas não recarrega a página
      cy.visit('https://platform.zaia.app/platform/my-agents/create', { log: false });
    });
  
    it.only('criar agente AI usando cypress', () => {
      cy.get('.h-[100dvh] > .flex-1 > :nth-child(2) > .inline-flex').click();
      cy.get('#botName').type('Hussein').should('have.value', 'Hussein');
      cy.get('.bg-gradient-to-l').click();
    });
  
  });
  