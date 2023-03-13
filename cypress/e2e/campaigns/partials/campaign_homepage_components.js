Cypress.Commands.add('ClickCampaignButton',()=>{
    cy.get('[data-tooltip="Campaigns"] > .text').should('be.visible').should('have.text','Campaigns').click()
})
Cypress.Commands.add('CheckYourCampaignContainer',()=>{
    cy.get('.third-mobile > .cards > .card > .content').should('be.visible').then(()=>{
        //Check the "Your Campaign" container header
        cy.get('.third-mobile > .cards > .card > .content-head > .header').should('be.visible').should('have.text','Your Campaigns')
        //Check "New Campaign button"
        cy.get('.content > .blue').should('be.visible').should('have.text','New Campaign')
        //Check "Draft Campaign button"
        cy.get('.draft-button > .ui').should('be.visible').should('have.text','Draft Campaigns')
    })
})
Cypress.Commands.add('CheckExperienceCampaignContainer',()=>{
    cy.get('.eleven > .cards').should('be.visible').then(()=>{
        cy.get('.eleven > .cards > .card > .content-head').should('be.visible').then(()=>{
            cy.get('.eleven > .cards > .card > .content-head > .header').should('be.visible').should('have.text','Experience Campaigns')
            cy.get('.hidden-mobile').should('have.text','Download 12-month Report    ')
        })
    })
})
Cypress.Commands.add('ClickNewCampaignButton',()=>{
    cy.get('.content > .blue').should('be.visible').click()
})