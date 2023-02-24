import { credentials } from '../../../credentials'
import '../partials/assessment_questions_create.cy'
import '../partials/assessment_component.cy'
import '../partials/spanish_flag.cy'
import { questions } from '../../../assessment_questions'
import { multiple } from '../../../assessment_questions'
import { spanish_multiple } from '../../../assessment_questions'
import { spanish_question } from '../../../assessment_questions'
import { recipients } from '../../../recipients'


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
  it('send the question to the particular user',()=>{
    cy.clickSentButton()
    
    cy.CreateQuestions()
    cy.CreateSpanishQuestions()
    //Check that the spanish flag is displayed
    cy.CheckSpanishFlag()
    cy.get('.olumo-review-button > .olumo-button > .olumo-caption').should('have.text',"Save & Review")
    .click()
    //Click the continue button
    cy.get('.olumo-cancel-button > .olumo-button').should('have.text',' Continue').click()
    for(let i=0;i<recipients.length;i++){

    cy.get('.olumo-recipients-section > .fluid').type(recipients[i])
    cy.get('.visible > :nth-child(1)').then(($ele=>{
      $ele.click()

    })
    )
  }

    
      
    
    //Click the Save and Review Button
      
  })
})
