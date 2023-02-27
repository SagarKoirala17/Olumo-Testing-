Cypress.Commands.add('CheckSpanishFlag',()=>{
    cy.get('[value="es"]').should('be.visible').should('have.text','es')
})