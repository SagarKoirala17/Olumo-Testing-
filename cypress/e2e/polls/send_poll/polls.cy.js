import { credentials } from '../../../credentials'
import '../partials/polls_components'
import '../questions/polls_questions'
import '../../assessments/partials/assessment_component'

describe('Polls', () => {
  beforeEach(() => {
    cy.login(credentials.email, credentials.password)
  })
  
  it('Check the assessment component',()=>{
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
   cy.SelectUser()
   //Close the dropdowm list
   cy.get('.olumo-recipients-section > .olumo-font-size-md').click()
   //Click the Review and Send Button
   cy.get('.olumo-footer-section > .olumo-btn-with-primary-bg').click()
   //Click the Save Button
   cy.get('.olumo-row > :nth-child(2) > .olumo-button').click()
  })
})
