import { credentials } from '../../../credentials'
import '../partials/assessment_questions_create'
import '../partials/assessment_component'
import '../partials/spanish_flag'
import '../../global/navbar/navbar'
import '../../global/sidebar/sidebar'
import '../../people/partials/recipient'




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
    cy.ClickNewAssessmentButton()
    cy.CreateQuestions()
    cy.CreateSpanishQuestions()
    //Check that the spanish flag is displayed
    cy.CheckSpanishFlag()
    cy.SendAssessment()
    cy.ClickContinueButton()
    cy.SelectUser()
    cy.ClicktheSaveandSendButton()
    cy.AssertSentAssessment()
    
  })
  it('Applying the intersection global filter in assessment page',()=>{
    cy.applyUnionAndIntersectionWithGroupLocationDepartment('Cypress Test Group','Cypress Test Department','Cypress Test Location')
    cy.clickSentButton()
    cy.ClickNewAssessmentButton()
    cy.CreateQuestions()
    cy.CreateSpanishQuestions()
    cy.CheckSpanishFlag()
    cy.SendAssessment()
    cy.ClickContinueButton()
    cy.get('.fluid > .ui').should('have.text','All (1)')
  })
  it('Applying the union global filter in assessment page',()=>{
    cy.applyUnionAndIntersectionWithGroupLocationDepartment('Cypress Test Group','Cypress Test Department','Cypress Test Location')
    cy.get('.ui > .olumo-border > :nth-child(2)').click()
    cy.get('.olumo-d-flex > .olumo-btn-section > .olumo-button').click()
    cy.clickSentButton()
    cy.ClickNewAssessmentButton()
    cy.CreateQuestions()
    cy.CreateSpanishQuestions()
    cy.CheckSpanishFlag()
    cy.SendAssessment()
    cy.ClickContinueButton()
    cy.get('.fluid > .ui').should('have.text','All (4)')
  })
})
