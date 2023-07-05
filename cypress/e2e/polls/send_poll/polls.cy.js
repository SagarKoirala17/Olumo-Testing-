import { credentials } from '../../../credentials'
import '../partials/polls_components'
import '../questions/polls_questions'
import '../../assessments/partials/assessment_component'
import '../../global/navbar/navbar'
import '../../global/sidebar/sidebar'
import '../../people/partials/recipient'


describe('Polls', () => {
  beforeEach(() => {
    cy.login(credentials.email, credentials.password)
  })
  
  it('Check the Polls component',()=>{
      cy.NavbarComponents()
      cy.clickThePollsButton()
      cy.checkThePollsAndAnnouncementButton()
      cy.checkHeadingContainer()
      cy.checkTheNewPollsButton()
  })

  it('Create the new Poll',()=>{
   cy.clickThePollsButton() 
   cy.CreatePollQuestions()
   cy.ClickTheEditButton()
   cy.CreatePollsSpanishQuestions()
   //Check the Spanish FLag
   cy.get('.olumo-flag-section > :nth-child(1)').should('be.visible')
   cy.SelectUser()
   //Close the dropdowm list
   cy.get('.olumo-recipients-section > .olumo-font-size-md').click()
   //Click the Review and Send Button
   cy.get('.olumo-footer-section > .olumo-btn-with-primary-bg').click()
   //Click the Save Button
   cy.get('.olumo-row > :nth-child(2) > .olumo-button').click()
  //Check the questions in the poll
  cy.AssertPollsQuestions()
 
   })
   it('Apply Intersection Filter in global filter polls page',()=>{
    cy.applyUnionAndIntersectionWithGroupLocationDepartment('Cypress Test Group','Cypress Test Department','Cypress Test Location')
    cy.clickThePollsButton() 
    cy.CreatePollQuestions()
    cy.ClickTheEditButton()
    cy.CreatePollsSpanishQuestions()
    //Check the Spanish FLag
    cy.get('.olumo-flag-section > :nth-child(1)').should('be.visible')
    cy.get('.fluid > .ui').should('have.text','All (1)')
 })
 it('Apply Union Filter in global filter polls page',()=>{
  cy.applyUnionAndIntersectionWithGroupLocationDepartment('Cypress Test Group','Cypress Test Department','Cypress Test Location')
  cy.get('.ui > .olumo-border > :nth-child(2)').click()
  cy.get('.olumo-d-flex > .olumo-btn-section > .olumo-button').click()  
  cy.clickThePollsButton() 
  cy.CreatePollQuestions()
  cy.ClickTheEditButton()
  cy.CreatePollsSpanishQuestions()
  //Check the Spanish FLag
  cy.get('.olumo-flag-section > :nth-child(1)').should('be.visible')
  cy.get('.fluid > .ui').should('have.text','All (4)')
})
   
})
