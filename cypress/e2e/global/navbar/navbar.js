Cypress.Commands.add('ClickAccountButton',()=>{
    cy.get('.right > .account').click()
})
Cypress.Commands.add('AssertAccountButton',()=>{
    cy.ClickAccountButton()
    cy.get('.visible > div > a > :nth-of-type(1)').should('contain','Profile Settings')
    cy.get('.visible > div > a > :nth-of-type(1)').should('contain','Admin')
    cy.get('.visible > div > a > :nth-of-type(1)').should('contain','FAQs')
    cy.get('.visible > div > a > :nth-of-type(1)').should('contain','Logout')
    

})


Cypress.Commands.add('NavbarComponents',()=>{
    cy.get('.dash-sidenav').should('be.visible').then(()=>{
        cy.get('.site-logo').should('be.visible')
        cy.get('#global-filter').should('be.visible').then(()=>{
            cy.get('.btn-global-filter').should('be.visible')
        })
        cy.get('.right > .notification').should('be.visible').then(()=>{
            cy.get('.right > .notification > .icon > .bell').should('be.visible')
        })
        cy.get('.right > .account').should('be.visible').then(()=>{
            cy.get('.right > .account > .prompt').should('be.visible')
        })
        cy.AssertAccountButton()
    })
})