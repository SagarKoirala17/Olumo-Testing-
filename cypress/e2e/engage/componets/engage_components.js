Cypress.Commands.add('ClickEngageButton',()=>{
    cy.get('[data-tooltip="Engage"] > .text > .name').click()
})
Cypress.Commands.add('CheckTheComponentsOfEngagePage',()=>{
    cy.get('h4').should('have.text','Recent Replies')
    cy.get('.unread').should('be.visible')
    cy.get('.right-content > a').should('be.visible')
    cy.get('.filter > .ui').should('be.visible')
    cy.get('#search_filter').should('be.visible')
    
})
Cypress.Commands.add('BrowseTheChatHistory',()=>{
     window.chatid=[]
    cy.get('.feedback-list > .feedback').each(($el)=>{
        let id=$el.attr('id')
        chatid.push(id)
        
    })
    console.log(chatid)
    
    

})
Cypress.Commands.add('ClickTheRandomChat',()=>{
    let randomIndex=Math.floor(Math.random()*chatid.length)
    console.log(randomIndex)
    cy.get(`#${chatid[randomIndex]}`).click()
    cy.get('.head').then(()=>{
        cy.get('.small').should('have.text','Employee Information')
    })
    
    cy.get('.chat-content').should('be.visible')
    
})