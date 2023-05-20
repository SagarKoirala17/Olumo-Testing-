Cypress.Commands.add('DepartmentButton',()=>{
    cy.get('[href="/departments"]').click()

})
Cypress.Commands.add('ClickAddDepartmentButton',()=>{
    cy.get('.olumo-ml-1').click()
})
Cypress.Commands.add('AssertDepartmentPage',()=>{
    cy.get('#new-department-modal > .header').should('have.text','New Department')
    cy.get('#new_department > .subtitle').should('have.text','Department Name')
    cy.get('#new_department > .fluid > #department_name').should('be.visible')
    cy.get('#new_department > .actions > .gray').should('have.text','Cancel')
    cy.get('#new_department > .actions > .blue').should('be.visible')

})
Cypress.Commands.add('AddNewDepartment',()=>{
    cy.get('#new_department > .fluid > #department_name').type('Destinys Department')
    cy.get('#new_department > .actions > .blue').click()
    cy.get('.alert-content > p').should('have.text','Department was successfully created')

})

Cypress.Commands.add('SearchCreatedDepartment',()=>{
    cy.get('.search-filter-input').type('Destinys Department')
    cy.wait(5000)
  
})
Cypress.Commands.add('RedirectDepartmentPage',()=>{
    cy.get('.olumo-word-break-all > .olumo-root-text-color').click()
    cy.url().then(url => {
        window.id = url.split('/').pop();
        cy.log(id); // or perform any other actions with the extracted ID
      });
      cy.go('back')
      cy.reload()
    
})
Cypress.Commands.add('DeleteCreatedDepartment',()=>{
    cy.get('.olumo-user-card > .dropdown').click()
    cy.get('.olumo-button').contains('Delete Department').click()
    cy.get(`#delete-department-model-${id} > .content > .fluid > .confirm-text`).type('CONFIRM DELETE')
    cy.get(`#delete-department-model-${id} > .content > .button`).click()
    cy.get('.alert-content > p').should('have.text','Department was successfully deleted.')
})




