Cypress.Commmands.add('Check the Polls and Announcement button',()=>{
    cy.get('.olumo-item-list > .active').should('be.visible').should('have.text','Polls')
    cy.get('[href="/announcements"]').should('be.visible').should('have.text','Announcements')
})
Cypress.Commands.add('Check the main container',()=>{
    cy.get('.content-head').should('be.visible').should('have.text','Recent Survey Questions')
       
})