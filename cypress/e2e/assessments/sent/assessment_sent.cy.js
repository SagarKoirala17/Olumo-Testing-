import { credentials } from '../../../credentials'
import '../partials/assessment_questions_create'
import '../partials/assessment_component'
import '../partials/spanish_flag'
import { questions } from '../../../assessment_questions'
import { multiple } from '../../../assessment_questions'
import { spanish_multiple } from '../../../assessment_questions'
import { spanish_question } from '../../../assessment_questions'
import '../../global/navbar/navbar'



describe('Assessment', () => {
  beforeEach(() => {
    cy.login(credentials.email, credentials.password)
  })
  it('check the component of the sent page',()=>{
    cy.NavbarComponents()
    cy.CheckSidebarComponentsWhenButtonIsNotClicked()
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
    
    cy.SendAssessment()
    
    cy.AssertSentAssessment()
  })
  
  
})
