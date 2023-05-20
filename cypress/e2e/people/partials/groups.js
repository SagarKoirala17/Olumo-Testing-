import { recipients } from "../../../recipients"
Cypress.Commands.add('ClickGroupsButton',()=>{
    cy.get('[href="/groups"]').click()
})
Cypress.Commands.add('AssertTheComponentofGroupPage',()=>{
    cy.get('.content-head').should('be.visible').then(()=>{
        cy.get('.content-head > .header').should('have.text','Groups')
    })
    cy.get('.card > :nth-child(2) > .grid > .column').should('be.visible').then(()=>{
        cy.get('.card > :nth-child(2) > .grid > .column').should('be.visible')
        cy.get('.olumo-bulk-select-section').should('be.visible').then(()=>{
            cy.get('.title').should('have.text','Select all')
            cy.get('.olumo-bulk-select-section > .olumo-button').should('be.visible')
        })
    })

})
Cypress.Commands.add('CheckPaginationComponents',()=>{
    cy.get('.pagination-label > span').should('be.visible')
    cy.get('.pagination').should('be.visible')
    
})
Cypress.Commands.add('AddNewGroup',()=>{
    cy.get('.olumo-ml-1').click()
})
Cypress.Commands.add('AssertGroupsPage',()=>{
    cy.get('#new-group-modal > .header').should('have.text','New Group')
    cy.get('#new-group-modal > .content > #new_group > .subtitle').should('have.text','Group Name')
    cy.get('#new-group-modal > .content > #new_group > .fluid > #group_name').should('be.visible')
    cy.get('#new-group-modal > .content > #new_group > .actions > .cancel').should('have.text','Cancel')
    cy.get('#new-group-modal > .content > #new_group > .actions > .blue').should('be.visible')
    
})
Cypress.Commands.add('CreateNewGroup',()=>{
    cy.get('#new-group-modal > .content > #new_group > .fluid > #group_name').type('Sag Koirala Groups')
    cy.get('#new-group-modal > .content > #new_group > .actions > .blue').click()
    cy.get('.alert-content > p').should('have.text','Group was successfully created.')
})

Cypress.Commands.add('RedirectGroupPage',()=>{
    cy.get(':nth-child(1) > .olumo-wrapper > .olumo-details > .group-details > .item > :nth-child(2) > .unlink').click()
    cy.url().then(url => {
        window.id = url.split('/').pop();
        cy.log(id); // or perform any other actions with the extracted ID
      });
      cy.go('back')
      cy.reload()
    
})
Cypress.Commands.add('AssertGroupPage',()=>{
    cy.get('#search_emp').should('be.visible')
    cy.get('.content-head > .dropdown').should('be.visible')
    cy.get('#add-to-group').should('be.visible')
    cy.get('.olumo-checkbox-section > .checkbox > .title').should('be.visible')
})
Cypress.Commands.add('SearchCreatedGroup',()=>{
    cy.get('.search-filter-input').type('Sag Koirala Groups')
    cy.wait(5000)
  
})
Cypress.Commands.add('DeleteCreatedGroup',()=>{
    cy.get('.olumo-user-card > .dropdown').click()
    cy.get('.olumo-button').contains('Delete Group').click()
    cy.get(`#delete-group-modal-${id} > .content > .fluid > .confirm-text`).type('CONFIRM DELETE')
    cy.get(`#delete-group-modal-${id} > .content > .button`).click()
    cy.get('.alert-content > p').should('have.text','Group was successfully destroyed.')
})
Cypress.Commands.add('HoverGroupLink',()=>{
    cy.get('.add-subgroup > .text').click()

})

