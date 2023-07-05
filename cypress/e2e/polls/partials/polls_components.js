import { questions } from "../../../assessment_questions"

Cypress.Commands.add('clickThePollsButton',()=>{
    cy.get('[data-tooltip="Polls"] > .text > .name').should('have.text','Polls').click()
})
Cypress.Commands.add('checkThePollsAndAnnouncementButton',()=>{
    cy.get('.olumo-item-list > .active').should('be.visible').should('have.text','Polls')
    cy.get('[href="/announcements"]').should('be.visible').should('have.text','Announcements')
})
Cypress.Commands.add('checkHeadingContainer',()=>{
    cy.get('.content-head').should('be.visible').should('have.text','Recent Survey Questions')
       
})
Cypress.Commands.add('checkTheNewPollsButton',()=>{
    cy.get('.search-filter-input').should('be.visible').then(()=>{
        cy.get('.olumo-btn-wrapper-15x > .olumo-button').should('be.visible').should('have.text','New Poll')
    })
})
Cypress.Commands.add('AssertPollsQuestions',()=>{
    for(let i=0; i<5;i++){
    cy.get(`:nth-child(2) > :nth-child(${i+1}) > .olumo-question >.olumo-question-wrapper > .olumo-caption`).should('contain',questions[i])
    }
    //Check the "View Activity" button
    cy.get(':nth-child(2) > .olumo-table-footer > .olumo-pt-2').should('be.visible').should('have.text','View Details')
})