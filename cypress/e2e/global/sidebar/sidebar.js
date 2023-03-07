Cypress.Commands.add('AssertSidebarIcon',()=>{
    cy.get('.active > .icon').should('be.visible')
    cy.get('[data-tooltip="Campaigns"] > .icon').should('be.visible')
    cy.get('[data-tooltip="Assessments"] > .icon').should('be.visible')
    cy.get('[data-tooltip="Polls"] > .icon').should('be.visible')
    cy.get('[data-tooltip="Engage"] > .icon').should('be.visible')
    cy.get('[data-tooltip="Reports"] > .icon').should('be.visible')
    cy.get('[data-tooltip="People"] > .icon').should('be.visible')
    cy.get('[data-tooltip="Settings"] > .icon').should('be.visible')

})
Cypress.Commands.add('AssertSidebarText',()=>{
    cy.get('.active > .text').should('be.visible').then(()=>{
        cy.get('.active > .text > .name').should('be.visible').should('have.text','Home')
    })
    cy.get('[data-tooltip="Campaigns"] > .text').should('be.visible').then(()=>{
        cy.get('[data-tooltip="Campaigns"] > .text > .name').should('be.visible').should('have.text','Campaigns')
    })
    cy.get('[data-tooltip="Assessments"] > .text').should('be.visible').then(()=>{
        cy.get('[data-tooltip="Assessments"] > .text > .name').should('be.visible').should('have.text','Assessments')
    })
    cy.get('[data-tooltip="Polls"] > .text').should('be.visible').then(()=>{
        cy.get('[data-tooltip="Polls"] > .text').should('be.visible').should('have.text','Polls')
    })
    cy.get('[data-tooltip="Engage"] > .text').should('be.visible').then(()=>{
        cy.get('[data-tooltip="Engage"] > .text').should('be.visible').should('have.text','Engage')
    })
    cy.get('[data-tooltip="Reports"] > .text').should('be.visible').then(()=>{
        cy.get('[data-tooltip="Reports"] > .text').should('be.visible').should('have.text','Reports')
    })
    cy.get('[data-tooltip="People"] > .text').should('be.visible').then(()=>{
        cy.get('[data-tooltip="People"] > .text').should('be.visible').should('have.text','People')
    })
    cy.get('[data-tooltip="Settings"] > .text').should('be.visible').then(()=>{
        cy.get('[data-tooltip="Settings"] > .text').should('be.visible').should('have.text','Settings')
    })
})
Cypress.Commands.add('CheckSidebarComponentsWhenButtonIsClicked',()=>{
    cy.get('.dash-sidenav').should('be.visible').then(()=>{  
        cy.AssertSidebarIcon()
        
     })
})
Cypress.Commands.add('CheckSidebarComponentsWhenButtonIsNotClicked',()=>{
    cy.get('.dash-sidenav').should('be.visible').then(()=>{  
        cy.AssertSidebarIcon()
        cy.AssertSidebarText()
        
     })
})