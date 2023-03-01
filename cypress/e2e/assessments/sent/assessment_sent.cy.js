import { credentials } from '../../../credentials'
import '../partials/assessment_questions_create'
import '../partials/assessment_component'
import '../partials/spanish_flag'
import { questions } from '../../../assessment_questions'
import { multiple } from '../../../assessment_questions'
import { spanish_multiple } from '../../../assessment_questions'
import { spanish_question } from '../../../assessment_questions'



describe('Assessment', () => {
  beforeEach(() => {
    cy.login(credentials.email, credentials.password)
  })
  it('check the component of the sent page',()=>{
    cy.clickSentButton()
    cy.CheckSentContainer()
    cy.checkYourAssessmentsContainer()
    cy.checkLibraryAssessments()
    
  })
  it('send the question to the particular user', () => {
    cy.clickSentButton()
    cy.CreateQuestions()
    cy.CreateSpanishQuestions()
    //Check that the spanish flag is displayed
    cy.CheckSpanishFlag()
    cy.get('.olumo-review-button > .olumo-button > .olumo-caption')
      .should('have.text', "Save & Review")
      .click()
    //Click the continue button
    cy.get('.olumo-cancel-button > .olumo-button')
      .should('have.text', ' Continue')
      .click()
    //Select the particular user
    cy.SelectUser()
    cy.get('.olumo-receipent-title').click()
    
    
    //Click the "Save & Send" button
    cy.get('.olumo-row > :nth-child(2) > .olumo-button').click()
    cy.get('#assessment-all > :nth-child(1)').should('contain','Test Assessment').should('contain','View Activity')
  })
  
  
})
