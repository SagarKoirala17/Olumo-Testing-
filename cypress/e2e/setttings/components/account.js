Cypress.Commands.add('ClickSettingsButton',()=>{
    cy.get('[data-tooltip="Settings"] > .text > .name').click()
})

Cypress.Commands.add('AssertAccountPage',()=>{
    cy.get('.content-head').should('be.visible').then(()=>{
        cy.get('.header').should('have.text','General Settings')
    })
    cy.get('.logo-message').should('be.visible')
    cy.get('#company_email_logo').should('exist')
    cy.get('.tablet.ten > .grid > .ten').should('be.visible').then(()=>{
    cy.get('.field-group > :nth-child(1) > label').should('have.text','Company Name')
    cy.get('#company_name').should('be.visible')
    cy.get('.field-group > :nth-child(2) > label').should('have.text','Industry')
    cy.get('.field-group > :nth-child(2) > .ui').should('be.visible')
    cy.get(':nth-child(3) > label').should('have.text','API Key')
    cy.get('.field-group > :nth-child(3) > .ui').should('be.visible')
    cy.get('.actions > .ui').should('be.visible')
    })
})