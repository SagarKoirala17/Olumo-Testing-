
  Cypress.Commands.add('applyGlobalFilterByGroup', (groupName) => {
    cy.get('.olumo-global-filter-button > img').click()
    cy.get('.css-1hwfws3').type(groupName)
    cy.get('#react-select-3-option-70').click()
    cy.get('.olumo-d-flex > .olumo-btn-section > .olumo-button').click()
  })
  
  Cypress.Commands.add('applyGlobalFilterByLocation', (locationName) => {
    cy.get('.olumo-global-filter-button > img').click()
    cy.get('.css-1hwfws3').type(locationName)
    cy.get('#react-select-3-option-71').click()
    cy.get('.olumo-d-flex > .olumo-btn-section > .olumo-button').click()
  })
  
  Cypress.Commands.add('applyGlobalFilterByDepartment', (departmentName) => {
    cy.get('.olumo-global-filter-button > img').click()
    cy.get('.css-1hwfws3').type(departmentName)
    cy.get('#react-select-3-option-70').click()
    cy.get('.olumo-d-flex > .olumo-btn-section > .olumo-button').click()
  })
  
  Cypress.Commands.add('applyUnionAndIntersection', (groupName, locationName) => {
    cy.get('.olumo-global-filter-button > img').click()
    cy.get('.css-1hwfws3').type(locationName)
    cy.get('#react-select-3-option-71').click()
    cy.get('.olumo-d-flex > .olumo-btn-section > .olumo-button').click()
    cy.get('.css-1hwfws3').type(groupName)
    cy.get('#react-select-3-option-70').click()
    cy.get('.olumo-d-flex > .olumo-btn-section > .olumo-button').click()
  })
  
  Cypress.Commands.add('applyUnionAndIntersectionWithDepartment', (groupName, departmentName) => {
    cy.get('.olumo-global-filter-button > img').click()
    cy.get('.css-1hwfws3').type(departmentName)
    cy.get('#react-select-3-option-69').click()
    cy.get('.olumo-d-flex > .olumo-btn-section > .olumo-button').click()
    cy.get('.css-1hwfws3').type(groupName)
    cy.get('#react-select-3-option-70').click()
    cy.get('.olumo-d-flex > .olumo-btn-section > .olumo-button').click()
  })
  
  Cypress.Commands.add('applyUnionAndIntersectionWithLocation', (departmentName, locationName) => {
    cy.get('.olumo-global-filter-button > img').click()
    cy.get('.css-1hwfws3').type(departmentName)
    cy.get('#react-select-3-option-69').click()
    cy.get('.olumo-d-flex > .olumo-btn-section > .olumo-button').click()
    cy.get('.css-1hwfws3').type(locationName)
    cy.get('#react-select-3-option-71').click()
    cy.get('.olumo-d-flex > .olumo-btn-section > .olumo-button').click()
  })
  
  Cypress.Commands.add('applyUnionAndIntersectionWithGroupLocationDepartment', (groupName, departmentName, locationName) => {
    cy.get('.olumo-global-filter-button > img').click()
    cy.get('.css-1hwfws3').type(departmentName)
    cy.get('#react-select-2-option-69').click()
    cy.get('.olumo-d-flex > .olumo-btn-section > .olumo-button').click()
    cy.get('.css-1hwfws3').type(locationName)
    cy.get('#react-select-2-option-71').click()
    cy.get('.olumo-d-flex > .olumo-btn-section > .olumo-button').click()
    cy.get('.css-1hwfws3').type(groupName)
    cy.get('#react-select-2-option-70').click()
    cy.get('.olumo-d-flex > .olumo-btn-section > .olumo-button').click()
  })
  