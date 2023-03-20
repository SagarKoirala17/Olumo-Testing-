import { credentials } from "../../../credentials"
import '../partials/assessment_component'
import '../partials/assessment_questions_create'
describe('Clearing Draft Assessment to sent',()=>{
    beforeEach(() => {
        cy.login(credentials.email, credentials.password)
      })
      it('Edit Assessment',()=>{
      cy.clickDraftButton()
      cy.ClickEditButton()
      cy.EditQuestions()
      cy.SendAssessment()
      cy.AssertSentAssessment()  
      })
})