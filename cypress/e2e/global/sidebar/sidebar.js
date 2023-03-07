Cypress.Commands.add('AssertSidebarIcon',()=>{
    cy.get('.active > .icon').should('be.visible')
    cy.get('[data-tooltip="Campaigns"] > .icon').should('be.visible')
    cy.get('[data-tooltip="Assessments"] > .icon').should('be.visible')
    cy.get('[data-tooltip="Polls"] > .icon').should('be.visible')
    cy.get('[data-tooltip="Engage"] > .icon').should('be.visble')
    cy.get('[data-tooltip="Reports"] > .icon').should('be.visible')
    cy.get('[data-tooltip="People"] > .icon').should('be.visible')
    cy.get('[data-tooltip="Settings"] > .icon').should('be.visible')

})
Cypress.Commands.add('CheckSidebarComponents',()=>{
    cy.get('.dash-sidenav').should('be.visible').then(()=>{  
        cy.AssertSidebarIcon()
     })
})