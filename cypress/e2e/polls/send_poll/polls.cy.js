import { credentials } from '../../../credentials'
import '../partials/polls_components'
import '../questions/polls_questions'
import '../../assessments/partials/assessment_component'
import '../../global/navbar/navbar'
import '../../global/sidebar/sidebar'

describe('Polls', () => {
  beforeEach(() => {
    cy.login(credentials.email, credentials.password)
  })
  
  it('Check the assessment component',()=>{
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
})
