import { credentials } from '../../../credentials'
import '../partials/assessment_component'
import '../partials/assessment_questions_create'
import '../../global/navbar/navbar'
import '../../global/sidebar/sidebar'

describe('Assessment', () => {
  beforeEach(() => {
    cy.login(credentials.email, credentials.password)
  })
  it('Draft Components',()=>{
    cy.NavbarComponents()
    cy.CheckSidebarComponentsWhenButtonIsNotClicked()
    cy.clickDraftButton()
    cy.checkMainContainer()
    cy.checkYourAssessmentsContainer()
    cy.checkLibraryAssessments()
})

 it('create the draft assessment', () => {
    //Create the set of questions
    
    cy.clickDraftButton()
    cy.ClickNewAssessmentButton()
    cy.AssessmentName()
    cy.CreateQuestions()
    cy.CreateSpanishQuestions()
    
    // Click the downarrow below the Save & Review Button
    cy.get('.olumo-arrow').click()
    // Click the Save & Exit button
    cy.get('.olumo-button-dropdown-section > .olumo-button').click()
    cy.AssertDraftAssessment()
  })
})


