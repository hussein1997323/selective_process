/// <reference types= "cypress"/>

describe('acessar pagin',()=>{
    beforeEach(()=>{
    cy.visit('https://platform.zaia.app/auth/login')
    })
    it('fazer login com sucesso', () =>{
        cy.get('.gap-3 > .flex > .inline-flex').click()
        cy.get('#identifier-field').type('husseinothman660@gmail.com')
        .should('have.value', 'husseinothman660@gmail.com')
        cy.get('.cl-formButtonPrimary').click()
        
    })

   
})