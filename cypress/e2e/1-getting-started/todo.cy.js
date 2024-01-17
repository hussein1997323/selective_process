/// <reference types="Cypress"/>


describe('Teste de Autenticação', () => {

  it.only('Deve realizar o login com sucesso', () => {
 
    cy.visit('https://platform.zaia.app');
    cy.get('.gap-3 > .flex > .inline-flex').click()
    
  });


});
