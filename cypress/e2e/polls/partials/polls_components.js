Cypress.Commands.add('clickThePollsButton',()=>{
    cy.get('[data-tooltip="Polls"] > .text > .name').should('have.text','Polls').click()
})
Cypress.Commands.add('checkThePollsAndAnnouncementButton',()=>{
    cy.get('.olumo-item-list > .active').should('be.visible').should('have.text','Polls')
    cy.get('[href="/announcements"]').should('be.visible').should('have.text','Announcements')
})
Cypress.Commands.add('checkHeadingContainer',()=>{
    cy.get('.content-head').should('be.visible').should('have.text','Recent Survey Questions')
       
})
Cypress.Commands.add('checkTheNewPollsButton',()=>{
    cy.get('.search-filter-input').should('be.visible').then(()=>{
        cy.get('.olumo-button').should('be.visible').should('have.text','New Poll')
    })
})