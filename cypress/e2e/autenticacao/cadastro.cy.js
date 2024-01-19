/// <reference types ="cypress"/>

describe('', () =>{
    beforeEach(() =>{
        cy.visit('https://platform.zaia.app/auth/login')
    })
    it('criar cadastro no site', () =>{
        cy.visit('https://platform.zaia.app/auth/onboarding')

        cy.get(':nth-child(3) > .inline-flex').type("hussein").should('have.value', 'hussein');
        cy.get(':nth-child(4) > .flex > .px-4').type('(11) 96465-2494').should('have.value', '(11) 96465-2494');
        cy.get(':nth-child(5) > .inline-flex').type('https://www.youtube.com/watch?v=4KLl38KaT3c&t=22s').should('have.value', 'https://www.youtube.com/watch?v=4KLl38KaT3c&t=22s');
        cy.get(':nth-child(6) > .inline-flex > .bg-transparent').select('Financeiro').should('have.value', 'Financeiro');
        cy.get(':nth-child(7) > .flex-1 > :nth-child(2)').click();
        cy.get('.bg-gradient-to-l').click()
    })

    it('fazer login com sucesso',() =>{
        cy.get('.gap-3 > .flex > .inline-flex').click()
        
    })



})