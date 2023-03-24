import '../../../campaign_name_and_description'
import { campaignNames } from '../../../campaign_name_and_description'
import { recipients } from '../../../recipients'

Cypress.Commands.add('ClickCampaignButton',()=>{
    cy.get('[data-tooltip="Campaigns"] > .text').should('be.visible').should('have.text','Campaigns').click()
})
Cypress.Commands.add('CheckYourCampaignContainer',()=>{
    cy.get('.third-mobile > .cards > .card > .content').should('be.visible').then(()=>{
        //Check the "Your Campaign" container header
        cy.get('.third-mobile > .cards > .card > .content-head > .header').should('be.visible').should('have.text','Your Campaigns')
        //Check "New Campaign button"
        cy.get('.content > .blue').should('be.visible').should('have.text','New Campaign')
        //Check "Draft Campaign button"
        cy.get('.draft-button > .ui').should('be.visible').should('have.text','Draft Campaigns')
    })
})
Cypress.Commands.add('CheckExperienceCampaignContainer',()=>{
    cy.get('.eleven > .cards').should('be.visible').then(()=>{
        cy.get('.eleven > .cards > .card > .content-head').should('be.visible').then(()=>{
            cy.get('.eleven > .cards > .card > .content-head > .header').should('be.visible').should('have.text','Experience Campaigns')
            cy.get('.hidden-mobile').should('have.text','Download 12-month Report    ')
        })
    })
})
Cypress.Commands.add('ClickNewCampaignButton',()=>{
    cy.get('.content > .blue').should('be.visible').click()
})
Cypress.Commands.add('ClickCategoryButton',()=>{
    cy.get('#addCategoryButton').should('be.visible').click()
})
Cypress.Commands.add('AssertMetricCategoryModal',()=>{
    cy.get('#categoryFormModal > .header').should('be.visible').should('have.text','Add Metric Category')
    cy.get('#categoryFormModal > .content').should('be.visible').then(()=>{
        cy.get('#categoryFormModal > .content > :nth-child(1)').should('be.visible').should('have.text','You will add questions to each Category as they pertain to them. ')
        cy.get('.metrics-category-form-info-card > .grid > :nth-child(1)').should('be.visible').then(()=>{
            cy.get('.metrics-category-form-info-card > .grid > :nth-child(1) > .field > label').should('be.visible').should('have.text','Metric Category*')
            cy.get('#category_name').should('be.visible')
        })
        cy.get('.metrics-category-form-info-card > .grid > :nth-child(2)').should('be.visible').then(()=>{
            cy.get(':nth-child(2) > .field > label').should('be.visible').should('have.text','Intended Result')
            cy.get('#category_intended_result').should('be.visible')
        })
        cy.get('.metrics-category-form-info-card > .grid > :nth-child(3)').should('be.visible').then(()=>{
            cy.get(':nth-child(3) > .field > label').should('be.visible').should('have.text','Description')
            cy.get('#category_description').should('be.visible')
        })
        cy.get('.grid > :nth-child(4)').should('be.visible').then(()=>{
            cy.get(':nth-child(4) > .actions > .mini').should('be.visible').should('have.text','Cancel')
            cy.get(':nth-child(4) > .actions > .btn').should('be.visible')

        })

    })
})
Cypress.Commands.add('ClickNextButton',()=>{
    cy.get('#campaignSubmitBtn').should('be.visible').click()
})
Cypress.Commands.add('ClickAddQuestionButton',()=>{
    cy.get('.content > .button').should('be.visible').click()
})
Cypress.Commands.add('ClickNextButtonInQuestionsPage',()=>{
    cy.get('.actions > .ui').click()
})
Cypress.Commands.add('ClickTermsAndConditionsLink',()=>{
    cy.get('#terms-modal-open').click()
})
Cypress.Commands.add('ClickAgreeButton',()=>{
    cy.get('#agree-all-terms').click()
})
Cypress.Commands.add('ClickPublishButton',()=>{
    cy.url().should('match', /\/campaigns\/\d+\/create_step_3/)

    cy.url().then(url => {
    window.id = url.match(/\/campaigns\/(\d+)\//)[1] // Extract the ID from the URL
    console.log(id)
    expect(id).to.match(/^\d+$/) // Check that the ID consists of digits only
    })
    cy.get('.right > .actions > .button').click()
})
Cypress.Commands.add('ClickActivateCampaignButton',()=>{
    cy.get(`[href="/campaigns/${id}/activate"] > .ui`).click()
})

Cypress.Commands.add('ClickEditRecipientListLink',()=>{
    cy.get(':nth-child(1) > .five > .edit-link > span').click()
})
Cypress.Commands.add('ClickAddPeopleButton',()=>{
    cy.get('#add-to-campaign > span').click()
})
Cypress.Commands.add('SelectCampaignRecipients',()=>{
    for(let i=0;i<recipients.length;i++){
    cy.get('#search_non_group_emp').type(recipients[i])
    
    cy.get('#not-campaign-recipients > :nth-child(1) > .ui > label ').click()
    cy.get('#apply-add').click()
    cy.get('#add-to-campaign').click()
    
    
    
    }
})
Cypress.Commands.add('ClickBackButton',()=>{
    cy.get('.back').click()
})