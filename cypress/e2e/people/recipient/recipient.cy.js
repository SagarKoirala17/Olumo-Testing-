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

    it('UpdateTheUser',()=>{

      cy.FetchUserId()
      cy.UpdateTheUser()
    })

    it('Check the global filter in people page via group',()=>{
      cy.ClickPeopleButton()
      cy.wait(7000)
      //Click the global filter button
      cy.get('.olumo-global-filter-button> img').click()
      cy.get('.css-1hwfws3').type('Cypress Test Group')
      cy.get('#react-select-3-option-69').click()
      cy.get('.olumo-d-flex > .olumo-btn-section > .olumo-button').click()
      cy.get('#global-filter-count').should('have.text','(2 people)')
      })
    

    it("Check the global filter in the people page via location",()=>{
      cy.ClickPeopleButton()
      cy.wait(7000)
      //Click the global filter button
      cy.get('.olumo-global-filter-button> img').click()
      cy.get('.css-1hwfws3').type('Cypress Test Location')
      cy.get('#react-select-3-option-70').click()
      cy.get('.olumo-d-flex > .olumo-btn-section > .olumo-button').click()
      cy.get('#global-filter-count').should('have.text','(2 people)')
      })

      it("Check the global filter in the people page via department",()=>{
        cy.ClickPeopleButton()
        cy.wait(7000)
        //Click the global filter button
        cy.get('.olumo-global-filter-button> img').click()
        cy.get('.css-1hwfws3').type('Cypress Test Department')
        cy.get('#react-select-3-option-69').click()
        cy.get('.olumo-d-flex > .olumo-btn-section > .olumo-button').click()
        cy.get('#global-filter-count').should('have.text','(2 people)')
        })

        it.only("Union and Intersection of groups and location",()=>{
          cy.ClickPeopleButton()
          cy.wait(7000)
          //Click the global filter button
          cy.get('.olumo-global-filter-button> img').click()
          cy.get('.css-1hwfws3').type('Cypress Test Location')
          cy.get('#react-select-3-option-71').click()
          cy.get('.olumo-d-flex > .olumo-btn-section > .olumo-button').click()
          cy.get('.css-1hwfws3').type('Cypress Test Group')
          cy.get('#react-select-3-option-70').click()
          cy.get('.olumo-d-flex > .olumo-btn-section > .olumo-button').click()
          cy.get('#global-filter-count').should('have.text','(1 people)')
          cy.get('.ui > .olumo-border > :nth-child(2)').click()
          cy.get('.olumo-d-flex > .olumo-btn-section > .olumo-button').click()
          cy.get('#global-filter-count').should('have.text','(3 people)')
      })
      it.only("Union and Intersection of groups and department",()=>{
        cy.ClickPeopleButton()
        cy.wait(7000)
        //Click the global filter button
        cy.get('.olumo-global-filter-button> img').click()
        cy.get('.css-1hwfws3').type('Cypress Test Department')
        cy.get('#react-select-3-option-69').click()
        cy.get('.olumo-d-flex > .olumo-btn-section > .olumo-button').click()
        cy.get('.css-1hwfws3').type('Cypress Test Group')
        cy.get('#react-select-3-option-70').click()
        cy.get('.olumo-d-flex > .olumo-btn-section > .olumo-button').click()
        cy.get('#global-filter-count').should('have.text','(1 people)')
        cy.get('.ui > .olumo-border > :nth-child(2)').click()
        cy.get('.olumo-d-flex > .olumo-btn-section > .olumo-button').click()
        cy.get('#global-filter-count').should('have.text','(3 people)')
    })
    it.only("Union and Intersection of groups and department",()=>{
      cy.ClickPeopleButton()
      cy.wait(7000)
      //Click the global filter button
      cy.get('.olumo-global-filter-button> img').click()
      cy.get('.css-1hwfws3').type('Cypress Test Department')
      cy.get('#react-select-3-option-69').click()
      cy.get('.olumo-d-flex > .olumo-btn-section > .olumo-button').click()
      cy.get('.css-1hwfws3').type('Cypress Test Location')
      cy.get('#react-select-3-option-71').click()
      cy.get('.olumo-d-flex > .olumo-btn-section > .olumo-button').click()
      cy.get('#global-filter-count').should('have.text','(1 people)')
      cy.get('.ui > .olumo-border > :nth-child(2)').click()
      cy.get('.olumo-d-flex > .olumo-btn-section > .olumo-button').click()
      cy.get('#global-filter-count').should('have.text','(3 people)')
  })
  it.only("Union and Intersection of groups locations department",()=>{
    cy.ClickPeopleButton()
    cy.wait(7000)
    //Click the global filter button
    cy.get('.olumo-global-filter-button> img').click()
    cy.get('.css-1hwfws3').type('Cypress Test Department')
    cy.get('#react-select-3-option-69').click()
    cy.get('.olumo-d-flex > .olumo-btn-section > .olumo-button').click()
    cy.get('.css-1hwfws3').type('Cypress Test Location')
    cy.get('#react-select-3-option-71').click()
    cy.get('.olumo-d-flex > .olumo-btn-section > .olumo-button').click()
    cy.get('#global-filter-count').should('have.text','(1 people)')
    cy.get('.ui > .olumo-border > :nth-child(2)').click()
    cy.get('.olumo-d-flex > .olumo-btn-section > .olumo-button').click()
    cy.get('#global-filter-count').should('have.text','(3 people)')
    cy.get('.css-1hwfws3').type('Cypress Test Group')
    cy.get('#react-select-3-option-70').click()
    cy.get('.olumo-d-flex > .olumo-btn-section > .olumo-button').click()
    cy.get('#global-filter-count').should('have.text','(4 people)')
    cy.get('.ui > .olumo-border > :nth-child(1)').click()
    cy.get('.olumo-d-flex > .olumo-btn-section > .olumo-button').click() 
    cy.get('#global-filter-count').should('have.text','(1 people)')

  })
})

