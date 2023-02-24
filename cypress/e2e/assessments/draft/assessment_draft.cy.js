import { credentials } from '../../../credentials'
import '../partials/assessment_component.cy'
import '../partials/assessment_questions_create.cy'


describe('Assessment', () => {
  beforeEach(() => {
    cy.login(credentials.email, credentials.password)
  })
  it('Draft Components',()=>{
    cy.clickDraftButton()
    cy.checkMainContainer()
    cy.checkYourAssessmentsContainer()
    cy.checkLibraryAssessments()
})

 it('create the draft assessment', () => {
    //Create the set of questions
    
    cy.clickDraftButton()
    cy.CreateQuestions()
    cy.CreateSpanishQuestions()
    
    // Click the downarrow below the Save & Review Button
    cy.get('.olumo-arrow').click()
    // Click the Save & Exit button
    cy.get('.olumo-button-dropdown-section > .olumo-button').click()
    cy.get('#assessment-all > :nth-child(1)').should('contain','Edit').should('contain','Test Assessment')
  })
})


