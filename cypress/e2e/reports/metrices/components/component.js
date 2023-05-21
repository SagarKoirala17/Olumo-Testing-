Cypress.Commands.add('ClickMetricesButton',()=>{
    cy.get('[href="/metrics"]').click()
})
Cypress.Commands.add('AssertMetricesSortPage',()=>{
    cy.get('.stackable > :nth-child(1)').then(()=>{
        cy.get(':nth-child(1) > .filter-head > label').should('have.text','SORT')
        cy.get(':nth-child(1) > .grouped > .active').should('be.visible').should('have.text','Impact')
        cy.get(':nth-child(1) > .grouped > :nth-child(2)').should('be.visible').should('have.text','Outcome')
        cy.get(':nth-child(1) > .grouped > :nth-child(3)').should('be.visible')
        cy.get(':nth-child(1) > .grouped > :nth-child(4)').should('be.visible').should('have.text','Trending')
        cy.get(':nth-child(1) > .grouped > :nth-child(5)').should('be.visible')
        cy.get(':nth-child(1) > .grouped > :nth-child(6)').should('be.visible').should('have.text','Score')
    })
})

Cypress.Commands.add('AssertMetricesViewContainer',()=>{
    cy.get('.stackable > :nth-child(2)').should('be.visible').then(()=>{
    cy.get(':nth-child(2) > .grouped > .active').should('be.visible').should('have.text','Traditional')
    cy.get(':nth-child(2) > .grouped > :nth-child(2)').should('be.visible')
    cy.get(':nth-child(2) > .grouped > :nth-child(3)').should('be.visible')
    cy.get(':nth-child(2) > .grouped > :nth-child(4)').should('be.visible')
    cy.get(':nth-child(2) > .grouped > :nth-child(5)').should('be.visible')
    cy.get(':nth-child(2) > .grouped > :nth-child(6)').should('be.visible')

    })
})
