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