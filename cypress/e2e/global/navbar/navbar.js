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
       // Check if the .has-new class is present on the page
        if (Cypress.$('.has-new').length) {
            // Select the bell icon element with the active bell icon
            cy.get('.has-new > .icon > .bell-active').should('be.visible');
        }
        else {
            // Select the bell icon element with the inactive bell icon
            cy.get('.right > .notification > .icon > .bell').should('be.visible');
        }
  
        cy.get('.right > .account').should('be.visible').then(()=>{
            cy.get('.right > .account > .prompt').should('be.visible')
        })
        cy.AssertAccountButton()
    })
})