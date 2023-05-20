Cypress.Commands.add('SearchRecipient',()=>{
    cy.get('.search-filter-input').type('isika jain')
})
Cypress.Commands.add('FetchRecipientIDs',()=>{
    window.recipient_id=[]
    cy.get('.olumo-user-card').each(($ele)=>{
        let id = $ele.attr('id')
        console.log(id)
        recipient_id.push(id)
     })
})
Cypress.Commands.add('ClickAdminButton',()=>{
    cy.get('[href="/users"]').click()
})

Cypress.Commands.add('PromoteRecipientToAdmin',()=>{
    cy.get(`#${recipient_id[0]} > .dropdown`).click()
    cy.get('.item > .olumo-pt-2 > .olumo-button').click()
    cy.get('.content > [rel="nofollow"]').click()
    cy.get('.back').click()
    cy.wait(5000)
    cy.reload()
    cy.ClickAdminButton()
})

Cypress.Commands.add('AssertAdminPage',()=>{
    cy.get(':nth-child(1) > .olumo-wrapper > .olumo-details > .olumo-desc > .olumo-invitation-status').should('be.visible')

    cy.get('.admins-table > :nth-child(1) > .dropdown').click()
    cy.get('.olumo-button').contains('Delete User').click()
    cy.get('.alert-content > p').should('have.text','User was successfully removed')
})