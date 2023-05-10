import '../../global/navbar/navbar'
import '../../global/sidebar/sidebar'
import { credentials } from '../../../credentials'
import '../partials/components'

describe('RecipientPageFlow',()=>{
    beforeEach(() => {
        cy.login(credentials.email, credentials.password)
      })
      it('CheckPeoplePageComponent',()=>{
        cy.NavbarComponents()
        cy.CheckSidebarComponentsWhenButtonIsNotClicked()
        cy.ClickPeopleButton()
        cy.CheckTabMenuButtons()
        cy.CheckPeopleTableComponents()
        
        cy.ClickManuallyAddButton()
        cy.AssertRecipientDescriptionHeader()
        cy.AssertNoteContainer()
        cy.AssertPhotoContainer()
        cy.AssertTheHeaderofRecipientPage()
       
      })
      it('NegativeTestForRecipientEmail',()=>{
        cy.ClickPeopleButton()
        cy.ClickManuallyAddButton()
        cy.get('#recipient_first_name').type('Nihal')
        cy.get('#recipient_last_name').type('Dhakal')
        cy.get('#recipient_email_address').type('nihal@olumo.com')
        cy.get('.olumo-btn-with-primary-bg').click()
        cy.get('.olumo-btn-with-primary-bg').should('be.visible').then(()=>{
          cy.get('.error_notification').should('have.text','Please review the problems below:')
          cy.get('.olumo-m-0 > li').should('have.text','Email has already been taken')
        })

        
      })
      
})