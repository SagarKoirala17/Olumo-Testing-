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
          cy.get('.olumo-m-0 > li').should('have.text','Email address has already been taken')
        })

        
      })

      it('NegativeTestForRecipientPhone',()=>{
        cy.ClickPeopleButton()
        cy.ClickManuallyAddButton()
        cy.get('#recipient_first_name').type('Nihal')
        cy.get('#recipient_last_name').type('Dhakal')
        cy.get('#recipient_phone').type('9815331505')
        cy.get('.olumo-btn-with-primary-bg').click()
        cy.get('.olumo-btn-with-primary-bg').should('be.visible').then(()=>{
          cy.get('.error_notification').should('have.text','Please review the problems below:')
          cy.get('.olumo-m-0 > li').should('have.text','Phone Already in our system.')
        })

      })
      

  it('NegativeTestForRecipientEmailAndPhone',()=>{
      cy.ClickPeopleButton()
      cy.ClickManuallyAddButton()
      cy.get('#recipient_first_name').type('Nihal')
      cy.get('#recipient_last_name').type('Dhakal')
      cy.get('#recipient_email_address').type('nihal@olumo.com')
      cy.get('#recipient_phone').type('9815331505')
      cy.get('.olumo-btn-with-primary-bg').click()
      cy.get('.olumo-btn-with-primary-bg').should('be.visible').then(()=>{
        cy.get('.error_notification').should('have.text','Please review the problems below:')
        cy.get('.olumo-m-0 > li').should('have.text','Phone Already in our system.Email address has already been taken')
      })
    })

    it.only('UpdateTheUser',()=>{
      window.idArray=[]
      cy.ClickPeopleButton()
      //Search the Recipient
      cy.get('#search').type('Nihal Dhakal')
      cy.get('#recipient_id_905985596 > .dropdown > .chevron').click()
      cy.get('#recipient_id_905985596 > .dropdown > .menu > .item > .olumo-pt-2 > .olumo-button').click()
      cy.get('#recipient_first_name').clear().type('Nihal')
      cy.get('#recipient_last_name').clear().type('Dhakal')
      cy.get('.olumo-btn-section > .olumo-btn-with-primary-bg').click()
      cy.get('.alert-content > p').should('have.text','Recipient was successfully updated.')
      cy.AssertTerminateRecipientContiner()
     

    })

  
})