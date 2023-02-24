Cypress.Commands.add("clickDraftButton", () => {
    //Click the Assessment Button in the sidebar
    cy.ClickAssessmentButtton()
    //Click the draft button
    cy.get('.olumo-draft').click()
  })

  Cypress.Commands.add('clickSentButton',()=>{
  cy.ClickAssessmentButtton()
  cy.get('.olumo-sent').click()

})
Cypress.Commands.add('CheckSentContainer',()=>{
  cy.get('.ten').should('be.visible').then(()=>{
    cy.get('#olumo-sent > .content-head').should('be.visible').contains('Sent')

  })
})

  
  Cypress.Commands.add("checkMainContainer", () => {
    //check the main container
    cy.get('.olumo-survey-content').should('exist').then(() => {
      //check the draft heading
      cy.get('#olumo-draft > .content-head').should('be.visible').should('contain', 'Draft')
    })
  })
  
  Cypress.Commands.add("checkYourAssessmentsContainer", () => {
    // Check the "Your Assessments container"
    cy.get('.six').should('exist').then(() => {
      //Check the "Your Assessments text"
      cy.get('.olumo-create-button-section > .cards > .card > .content-head').should('exist').should('have.text', "Your Assessments")
      //Check the "New Assessment" button
      cy.get('.content > .olumo-button').should('exist').should('have.text', 'New Assessment')
    })
  })
  
  Cypress.Commands.add("checkLibraryAssessments", () => {
    cy.get('.olumo-draft-section > .cards > .card > .content-head').should('exist').should('have.text', 'Library')
    cy.get('.olumo-image-section > img').should('exist')
    cy.get('.olumo-desc > .olumo-btn-section').should('exist')
  })
    
  

  