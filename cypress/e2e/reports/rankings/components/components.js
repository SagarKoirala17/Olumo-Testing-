Cypress.Commands.add('ClickTheReportButton',()=>{
    cy.get('[data-tooltip="Reports"] > .text > .name').click()
})
Cypress.Commands.add('AssertMetricesAndRankingsButton',()=>{
    cy.get('[href="/metrics"]').should('have.text','Metrics')
    cy.get('.tab-menu > .ui > .active').should('have.text','Rankings')

})
Cypress.Commands.add('AssertTheRankingPageViaDepartmentFilter',()=>{
    cy.get('form > :nth-child(4)').should('be.visible')
    cy.get('.top > .title').should('have.text','Heatmap')
    cy.get('#heatmap-info-container').should('be.visible')
    cy.get('.dropdown-items > :nth-child(1)').should('be.visible').click()
    cy.get('.active > .menu > :nth-child(n) > a').should('be.visible').then(($ele)=>{
        let text = $ele.toArray().map((item) => item.innerText.trim())
        
        cy.log(text)
        let randomIndex=Math.floor(Math.random()*text.length)
        let randomText=text[randomIndex]
        cy.log(randomText)
        cy.get('.active > .menu').contains(randomText).click()
        cy.get('.ranks-grid-container > .ranks-loader > .column > .content').should('be.visible')
    

    })
})
Cypress.Commands.add('AssertTheRankingPageViaOrganizationalFilter',()=>{
    cy.get('.heatmap-select').should('be.visible').click()
    cy.get('.heatmap-select > .menu > :nth-child(n) > a').should('be.visible').then(($ele)=>{
        let text = $ele.toArray().map((item) => item.innerText.trim())
        cy.log(text)
        let randomIndex=Math.floor(Math.random()*text.length)
        let randomText=text[randomIndex]
        cy.log(randomText)
        cy.get('.heatmap-select > .menu :nth-child(n) > a').contains(randomText).click()
        cy.get('.ranks-grid-container > .ranks-loader > .column > .content').should('be.visible')
    })    
})

Cypress.Commands.add('AssertTheDiagram',()=>{
    cy.get('#group-ranks > .card > :nth-child(2)').should('be.visible').then(()=>{
        cy.get('#group-ranks > .card > :nth-child(2) > :nth-child(2) > .title').should('have.text','Group Rank')
    })
    cy.get('#question-ranks > .card > :nth-child(2)').should('be.visible').then(()=>{
        cy.get('#question-ranks > .card > :nth-child(2) > .text-center > .title').should('have.text','Question Performance')
    })
    cy.get('#employee-engagement-rank-container > .card > .content').should('be.visible').then(()=>{
        cy.get('#employee-engagement-rank-container > .card > .content > .text-center > .title').should('have.text','Employee Engagement')
    })
    cy.get('#initiative-rank-container > .card > .content').should('be.visible').then(()=>{
        cy.get('#initiative-rank-container > .card > .content > .text-center > .title').should('have.text','Initiatives')
    })
    cy.get('#initiative-rank-container > .card > .content').should('be.visible').then(()=>{
        cy.get(':nth-child(3) > .card > .content > .text-center > .title').should('have.text','Number of Responses')
    
    })
    cy.get('#top_manager-ranks > .card > :nth-child(2)').should('be.visible').then(()=>{
        cy.get('#top_manager-ranks > .card > :nth-child(2) > :nth-child(1) > .title').should('have.text','Top Managers')
    })
    cy.get(':nth-child(9) > .card > :nth-child(1)').should('be.visible').then(()=>{
        cy.get(':nth-child(9) > .card > :nth-child(1) > :nth-child(1) > .title').should('have.text','Gender Rank')
    })
    cy.get(':nth-child(5) > .card > :nth-child(2)').should('be.visible').then(()=>{
        cy.get(':nth-child(5) > .card > :nth-child(2) > .text-center > .title').should('have.text','Turnover Rate')
    })
    cy.get('#age-ranks > :nth-child(1)').should('be.visible').then(()=>{
        cy.get('#age-ranks > :nth-child(1) > :nth-child(1) > .title').should('have.text','Age Rank')
    })
    cy.get('#delivery-method-container > .card > .content').should('be.visible').then(()=>{
        cy.get('#delivery-method-container > .card > .content > .text-center > .title').should('have.text','Delivery Method')
    })
    cy.get(':nth-child(12) > .card > .content').should('be.visible').then(()=>{
        cy.get(':nth-child(12) > .card > .content > .text-center > .title').should('have.text','Feedback Wordcloud')
    })
    cy.get('#location-ranks > .card > :nth-child(2)').then(()=>{
        cy.get('#location-ranks > .card > :nth-child(2) > :nth-child(1) > .title').should('have.text','Location Rank')

    })
})
