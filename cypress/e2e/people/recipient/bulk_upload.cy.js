import '../../global/navbar/navbar'
import '../../global/sidebar/sidebar'
import { credentials } from '../../../credentials'
import '../partials/components'
import 'cypress-file-upload';
describe('RecipientPageFlow',()=>{
    beforeEach(() => {
        cy.login(credentials.email, credentials.password)
      })
      it('BulkUploadRecipient',()=>{
        let p='Photo.png'
        cy.ClickPeopleButton()
        cy.get('.olumo-btn-font-sm').click()
        cy.get('.olumo-dropdown-menu > .olumo-mt-1').click()
        cy.get('#browse-file').attachFile(p)
        cy.get('.alert >.alert-content> p').should('exist')
      

      })
    })