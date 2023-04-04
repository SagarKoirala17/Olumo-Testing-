import { credentials } from "../../../credentials"
import '../partials/assessment_component'
describe('Active Assessment',()=>{
    beforeEach(() => {
        cy.login(credentials.email, credentials.password)
    })
    it('Collect All Assessment',()=>{
        cy.clickSentButton()
        cy.FetchActiveAssessment()


    })

})