import { credentials } from "../../../credentials"
import '../partials/assessment_component'
import '../partials/assessment_questions_create'
import '../partials/assessment_questions_edit'
describe('Clearing Draft Assessment to sent',()=>{
    beforeEach(() => {
        cy.login(credentials.email, credentials.password)
      })
      it('Edit Assessment',()=>{
      cy.clickDraftButton()
     cy.CheckTotalNumber()
      
      cy.ClickEditButton()
      cy.AssessmentName()
      cy.EditQuestions()
      cy.CreateSpanishQuestions()  
      
      cy.SendAssessment()
      cy.AssertSentAssessment()  
      })
})