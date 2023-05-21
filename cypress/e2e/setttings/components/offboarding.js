Cypress.Commands.add('ClickOffboardingButton',()=>{
    cy.get('[href="/offboarding"]').click()
})
Cypress.Commands.add('AssertOffboardingSettingsContainer',()=>{
    cy.get('.olumo-offboarding-setting-section > .card > .content-head > h4').should('have.text','Offboarding Settings')
    cy.get('.olumo-offboarding-setting-section > .card > .content > .olumo-font-medium').should('be.visible')

})
Cypress.Commands.add('AssertOffAssessmentContainer',()=>{
    cy.get('.olumo-assessments-library-section > .card > .content-head').should('be.visible').then(()=>{
        cy.get('.olumo-assessments-library-section > .card > .content-head > h4').should('be.visible')
    })
    cy.get('.olumo-assessment-library-section').should('be.visible').then(()=>{
        cy.get('.olumo-assessment-library-section > .olumo-font-size-md').should('have.text','Assessment Library')
        cy.get('.olumo-assessment-library-section > .olumo-font-size-md').should('be.visible')
    })
    cy.get('#assessment-dropzone').should('be.visible').then(()=>{
        cy.get('#assessment-dropzone > .olumo-font-size-md').should('have.text','Your Offboarding Assessments')
        cy.get('#assessment-dropzone > .olumo-font-medium.olumo-pt-1').should('be.visible')
        cy.get('#assessment-dropzone > .olumo-employee-transition-dropzone-field').should('be.visible')

    })
    
})
Cypress.Commands.add('AssertFarewellMessageContainer',()=>{
    cy.get('.olumo-message-section > .card > .content-head').should('be.visible').then(()=>{
        cy.get('.olumo-message-section > .card > .content-head > h4').should('have.text','Farewell Message')
        
    })
    cy.get('.content > .olumo-sm-pr-12').should('be.visible')
    cy.get('.olumo-sm-pr-3 > .olumo-font-medium').should('be.visible')
    cy.get('#company_farewell_message').should('be.visible')
    cy.get('.olumo-sm-pr-3 > .olumo-pt-4').should('be.visible')
})

