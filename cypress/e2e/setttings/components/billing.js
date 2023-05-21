Cypress.Commands.add('ClickBillingButton',()=>{
    cy.get('[href="/account"]').click()
})
Cypress.Commands.add('AssertTheComponentsofBillingPage',()=>{
    cy.get('.content-head').should('be.visible').then(()=>{
        cy.get('.content-head > h4').should('have.text','Billing History')
        cy.get('.checkbox-dropdown > span').should('be.visible')
        cy.get('#btn-add-card').should('be.visible')
    })
    cy.get('#account-card > :nth-child(2)').should('be.visible').then(()=>{
        cy.get(':nth-child(2) > h4').should('be.visible')
        cy.get('#account-card > :nth-child(2) > :nth-child(2)').should('be.visible')
        cy.get('.twelve').should('be.visible')
        cy.get('.account-footer').should('be.visible')
        })
    })
