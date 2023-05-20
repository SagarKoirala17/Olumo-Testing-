import '../../global/navbar/navbar'
import '../../global/sidebar/sidebar'
import { credentials } from '../../../credentials'
import '../partials/components'
import '../partials/admin'
describe('RecipientPageFlow',()=>{
    beforeEach(() => {
        cy.login(credentials.email, credentials.password)
      })
      it('AdminPage',()=>{
        cy.ClickPeopleButton()
        cy.SearchRecipient()
        cy.wait(5000)
        cy.FetchRecipientIDs()
        cy.PromoteRecipientToAdmin()
        cy.AssertAdminPage()

      })
    
    })