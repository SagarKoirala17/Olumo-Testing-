Cypress.Commands.add('ClickPeopleButton',()=>{
    cy.get('[data-tooltip="People"] > .text > .name').click()
})
Cypress.Commands.add('CheckTabMenuButtons',()=>{
    cy.get('.tab-menu > .ui > .active').should('have.text','People')
    cy.get('[href="/groups"]').should('have.text','Groups')
    cy.get('[href="/locations"]').should('have.text','Locations')
    cy.get('[href="/departments"]').should('have.text','Departments')
    cy.get('[href="/users"]').should('have.text','Admins')
})
Cypress.Commands.add('CheckPeopleTableComponents',()=>{
    cy.get('.content-head').then(()=>{
        cy.get('h4.header').should('have.text','People')
        cy.get('.small').should('have.text','Employee sign up link')
        cy.get('.right-side-links > .ui').then(()=>{
            cy.get('.right-side-links > .ui > span').should('have.text','Get Link')

        })
        
    })
    cy.get('#search').should('be.visible')
    cy.get('.dropdown-buttons > .dropdown').should('contain','Import People')
    cy.get('.title').should('be.visible')
})

Cypress.Commands.add('ClickManuallyAddButton',()=>{
    cy.get('.dropdown-buttons > .dropdown').click()
    cy.get('.item').contains('Manually Add People').click()
})
Cypress.Commands.add('AssertRecipientDescriptionHeader',()=>{
    cy.get('.olumo-col-largeScreen-9 > .cards > .card > .content-head').should('be.visible').then(()=>{
        cy.get('.olumo-col-largeScreen-9 > .cards > .card > .content-head > .header').should('have.text','Person')
        cy.get('.back').should('be.visible')
    })
    
})
Cypress.Commands.add('AssertNoteContainer',()=>{
    cy.get('.olumo-col-largeScreen-3 > .cards > .card > .content-head').should('have.text','Note')
    cy.get('.content > p').should('have.text','By clicking "Save", you confirm that you have permission to text or email this employee. Learn More')
})
Cypress.Commands.add('AssertPhotoContainer',()=>{
    cy.get('.olumo-image-section').should('be.visible').then(()=>{
        cy.get('.olumo-image').should('be.visible')
        cy.get('.olumo-mt-3 > .olumo-plus-icon').should('be.visible')
        cy.get('label.file').should('have.text','Add Photo')
        

    })
})
Cypress.Commands.add('AssertTheHeaderofRecipientPage',()=>{
    cy.get('.olumo-recipient-contact-info-section > .olumo-row > :nth-child(1) > .olumo-d-block').should('have.text','First Name')
    cy.get('.olumo-largeScreen-mt-0 > .olumo-d-block').should('have.text','Last Name')
    cy.get('.olumo-recipient-contact-info-section > .olumo-row > :nth-child(3) > .olumo-d-block').should('have.text','Email')
    cy.get('.olumo-recipient-contact-info-section > .olumo-row > :nth-child(4) > .olumo-d-block').should('have.text','Cell Phone')
    cy.get('.olumo-recipient-detail-info-section > .olumo-font-size-md').should('have.text','Info')
    cy.get('.olumo-recipient-detail-info-section > .olumo-row > :nth-child(1) > .olumo-d-block').should('have.text','Age')
    cy.get('.olumo-recipient-detail-info-section > .olumo-row > :nth-child(2) > .olumo-d-block').should('have.text','Salary')
    cy.get('.olumo-recipient-detail-info-section > .olumo-row > :nth-child(3) > .olumo-d-block').should('have.text','Gender')
    cy.get(':nth-child(4) > .olumo-label-section > .olumo-d-block').should('have.text','Education')
    cy.get('.add > .olumo-plus-icon').should('be.visible')
    cy.get('.add > .olumo-position-relative').should('have.text','Add degree')
    cy.get(':nth-child(5) > .olumo-label-section > .olumo-d-block').should('have.text','Ethnicity')
    cy.get('#add-ethnicity > .olumo-add-item > .olumo-plus-icon').should('be.visible')
    cy.get('#add-ethnicity > .olumo-add-item > .olumo-position-relative').should('have.text','Prefer to self describe')
    cy.get(':nth-child(6) > .olumo-label-section > .olumo-d-block').should('have.text','Sexual Orientation')
    cy.get('#add-sexual_orientation > .olumo-add-item > .olumo-plus-icon > .olumo-line-1').should('be.visible')
    cy.get(':nth-child(7) > .olumo-d-block').should('have.text','Company Display Name')
    cy.get('#recipient_company_display_name').should('be.visible')
    cy.get('.olumo-date-section > .olumo-font-size-md').should('have.text','Dates')
    cy.get('.olumo-date-section > .olumo-row > :nth-child(1) > .olumo-d-block').should('have.text','Birth Date')
    cy.get('#dob-field').should('be.visible')
    cy.get('.olumo-date-section > .olumo-row > :nth-child(2) > .olumo-d-block').should('have.text','Hire Date')
    cy.get('#date-employed-field').should('be.visible')
    cy.get('.olumo-date-section > .olumo-row > :nth-child(3) > .olumo-d-block').should('have.text','Term Date')
    cy.get('.olumo-cursor-not-allowed').should('be.visible')
    cy.get('.olumo-delivery-section > .olumo-font-size-md').should('have.text','Delivery')
    cy.get('.olumo-delivery-section > .olumo-row > :nth-child(1) > .olumo-d-block').should('have.text','Time Zone')
    cy.get('.olumo-delivery-section > .olumo-row > :nth-child(1) > .ui').should('be.visible').then(()=>{
        cy.get('.olumo-delivery-section > .olumo-row > :nth-child(1) > .ui > .text').should('be.visible')
    })
    cy.get('.olumo-delivery-section > .olumo-row > :nth-child(2) > .olumo-d-block').should('have.text','Time of Day')
    cy.get('.olumo-delivery-section > .olumo-row > :nth-child(2) > .select > .ui').should('be.visible').then(()=>{
        cy.get('.olumo-delivery-section > .olumo-row > :nth-child(2) > .select > .ui > .text').should('be.visible')
    })
    cy.get('.olumo-delivery-section > .olumo-row > :nth-child(3) > .olumo-d-block').should('have.text','Language')
    cy.get(':nth-child(3) > .select > .ui').should('be.visible').then(()=>{
        cy.get(':nth-child(3) > .select > .ui > .default').should('be.visible')
    })
    cy.get('.integer').should('have.text','Frequency')
    cy.get('.olumo-delivery-section > .olumo-row > :nth-child(4) > .select > .ui').should('be.visible').then(()=>{
        cy.get('.olumo-delivery-section > .olumo-row > :nth-child(4) > .select > .ui > .text').should('be.visible')
    })
    cy.get('.olumo-group-section > .olumo-font-size-md').should('have.text','Groups')
    cy.get(':nth-child(1) > .olumo-label-section > .olumo-d-block').should('have.text','Department')
    cy.get('#add-department > .olumo-add-item > .olumo-position-relative').should('have.text','Add New Department')
    cy.get('#department-dropdown').should('be.visible').then(()=>{
        cy.get('#department-dropdown > .default').should('be.visible')
    })
    cy.get(':nth-child(2) > .olumo-label-section > label').should('have.text','Location')
    cy.get('#add-location > .olumo-add-item > .olumo-position-relative').should('have.text','Add New Location')
    cy.get('#location-dropdown').should('be.visible').then(()=>{
        cy.get('#location-dropdown > .default').should('be.visible')
    })
    cy.get('.olumo-align-center > .olumo-d-block').should('have.text','Groups')
    cy.get('.olumo-chip-bg-reddish').then(()=>{
        cy.get('.olumo-chip-bg-reddish > .default').should('be.visible')
    })
    cy.get('.olumo-btn-section > .cancel').should('have.text','Cancel')
    cy.get('.olumo-btn-with-primary-bg').should('be.visible')

})