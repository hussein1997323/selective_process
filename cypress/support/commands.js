Cypress.Commands.add('login', () => {
    cy.log(`Logging into ${Cypress.env('environment') ? Cypress.env('environment') : 'local'} environment`)
  
    if (Cypress.env('environment') === 'homolog') {
      Cypress.env('user', Cypress.env('homologUser'))
    } else if (Cypress.env('environment') === 'prod') {
      Cypress.env('user', Cypress.env('prodUser'))
    } else {
      Cypress.env('user', Cypress.env('localUser'))
    }
  
    cy.visit('/login')
  
    cy.get('[data-cy="emailField"]')
      .should('be.visible')
      .type(Cypress.env('user').email, { log: false })
    cy.get('[data-cy="passwordField"]')
      .should('be.visible')
      .type(Cypress.env('user').password, { log: false })
    cy.contains('button', 'Login')
      .should('be.visible')
      .click()
  })