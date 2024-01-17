/// <reference types="Cypress"/>


describe('Teste de Autenticação', () => {
    it.only('Deve realizar o login com sucesso', () => {
      cy.visit('https://platform.zaia.app');
  
      // Substitua os seletores e inputs pelos reais da página
      cy.get('[seletor-do-input-usuario]').type('seu-usuario');
      cy.get('[seletor-do-input-senha]').type('sua-senha');
      cy.get('[seletor-do-botao-login]').click();
  
      // Verifique se a autenticação foi bem-sucedida
      cy.url().should('include', '/dashboard');
    });
  
    it('Deve exibir mensagem de erro para login inválido', () => {
      cy.visit('https://platform.zaia.app');
  
      // Substitua os seletores e inputs pelos reais da página
      cy.get('[seletor-do-input-usuario]').type('usuario-invalido');
      cy.get('[seletor-do-input-senha]').type('senha-invalida');
      cy.get('[seletor-do-botao-login]').click();
  
      // Verifique se a mensagem de erro é exibida
      cy.get('[seletor-da-mensagem-de-erro]').should('be.visible');
    });
  });
  