Cypress.Commands.add('ClickOnboardingButton',()=>{
    cy.get('[href="/onboarding"]').click()
})
Cypress.Commands.add('AssertOnboardingSettingsContainer',()=>{
    cy.get('.olumo-offboarding-setting-section > .card > .content-head > h4').should('have.text','Onboarding Settings')
    cy.get('.olumo-offboarding-setting-section > .card > .content > .olumo-font-medium').should('be.visible')

})
Cypress.Commands.add('AssertAssessmentContainer',()=>{
    cy.get('.olumo-assessments-library-section > .card > .content-head').should('be.visible').then(()=>{
        cy.get('.olumo-assessments-library-section > .card > .content-head > h4').should('be.visible')
    })
    cy.get('.olumo-assessment-library-section').should('be.visible').then(()=>{
        cy.get('.olumo-assessment-library-section > .olumo-font-size-md').should('have.text','Assessment Library')
        cy.get('.olumo-assessment-library-section > .olumo-font-size-md').should('be.visible')
    })
    cy.get('#assessment-dropzone').should('be.visible').then(()=>{
        cy.get('#assessment-dropzone > .olumo-font-size-md').should('have.text','Your Onboarding Assessments')
        cy.get('#assessment-dropzone > .olumo-font-medium.olumo-pt-1').should('be.visible')
        cy.get('#assessment-dropzone > .olumo-employee-transition-dropzone-field').should('be.visible')

    })
    
})
Cypress.Commands.add('AssertCampaignContainer',()=>{
    cy.get('.olumo-campaign-library-section.cards > .card > .content-head').should('be.visible').then(()=>{
        cy.get('.olumo-campaign-library-section.cards > .card > .content-head > h4').should('have.text','Campaigns')
    })
    cy.get('.olumo-campaign-library-section.cards > .card > .content > .olumo-description > .olumo-font-medium').should('be.visible')
    cy.get('.olumo-campaign-library-section > .olumo-font-size-md').should('have.text','Campaigns Library')
    cy.get('.employee-transition-campaign-caption').should('be.visible')
    cy.get('#campaign-dropzone > .olumo-font-size-md').should('have.text','Your Onboarding Campaigns')
    cy.get('#campaign-dropzone > .olumo-font-weight-medium').should('be.visible')
    cy.get('#campaign-dropzone > .olumo-employee-transition-dropzone-field').should('be.visible')


})
Cypress.Commands.add('AssertWelcomeMessageContainer',()=>{
    cy.get('.olumo-message-section > .card > .content-head').should('be.visible').then(()=>{
        cy.get('.olumo-message-section > .card > .content-head > h4').should('have.text','Welcome Message')
        
    })
    cy.get('.content > .olumo-sm-pr-12').should('be.visible')
    cy.get('.olumo-sm-pr-3 > .olumo-font-medium').should('be.visible')
    cy.get('#company_text_intro').should('be.visible')
    cy.get('.olumo-sm-pr-3 > .olumo-pt-4').should('be.visible')
})