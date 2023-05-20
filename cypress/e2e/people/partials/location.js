Cypress.Commands.add('ClickLocationButton',()=>{
    cy.get('[href="/locations"]').click()

})
Cypress.Commands.add('ClickAddLocationButton',()=>{
    cy.get('.olumo-ml-1').click()
})
Cypress.Commands.add('AssertLocationPage',()=>{
    cy.get('#new-location-modal > .header').should('have.text','New Location')
    cy.get('#new_location > .subtitle').should('have.text','Location Name')
    cy.get('#new_location > .fluid > #location_name').should('be.visible')
    cy.get('#new_location > .actions > .gray').should('have.text','Cancel')
    cy.get('#new_location > .actions > .blue').should('be.visible')

})
Cypress.Commands.add('AddNewLocation',()=>{
    cy.get('#new_location > .fluid > #location_name').type('Merosssss Location')
    cy.get('#new_location > .actions > .blue').click()
    //cy.get('.alert-content > p').should('have.text','Location was successfully created')

})

Cypress.Commands.add('SearchCreatedLocation',()=>{
    cy.get('.search-filter-input').type('Merosssss Location')
    cy.wait(5000)
  
})
Cypress.Commands.add('RedirectLocationPage',()=>{
    cy.get('.olumo-word-break-all > .olumo-root-text-color').click()
    cy.url().then(url => {
        window.id = url.split('/').pop();
        cy.log(id); // or perform any other actions with the extracted ID
      });
      cy.go('back')
      cy.reload()
    
})
Cypress.Commands.add('DeleteCreatedLocation',()=>{
    cy.get('.olumo-user-card > .dropdown').click()
    cy.get('.olumo-button').contains('Delete Location').click()
    cy.get(`#delete-location-model-${id} > .content > .fluid > .confirm-text`).type('CONFIRM DELETE')
    cy.get(`#delete-location-model-${id} > .content > .button`).click()
    cy.get('.alert-content > p').should('have.text','Location was successfully deleted.')
})




