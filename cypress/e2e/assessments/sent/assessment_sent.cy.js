import { credentials } from '../../../credentials'
import '../partials/assessment_questions_create.cy'
import '../partials/assessment_component.cy'
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
  it('send the question to the particular user',()=>{
    cy.clickSentButton()
    
    cy.CreateQuestions()
    cy.CreateSpanishQuestions()
    //Check that the spanish flag is displayed
    cy.get('[value="es"]').should('be.visible').should('have.text','es')
      
    
    //Click the Save and Review Button
      
  })
})
