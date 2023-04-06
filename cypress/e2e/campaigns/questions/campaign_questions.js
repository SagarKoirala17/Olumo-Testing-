import { questions } from '../../../assessment_questions' 
import { multiple } from '../../../assessment_questions'
import '../partials/campaign_homepage_components'

Cypress.Commands.add('CreateCampaignQuestions',()=>{
for(let i=1; i<questions.length;i++){
    cy.get('.emojionearea-editor').type(questions[i])
    cy.get('.question > .ui').click()
    cy.get('.visible >.item').should('be.visible').then(($items) => {
        console.log($items.length)
        let questionTypes = $items.toArray().map((item) => item.innerText.trim())
        console.log(questionTypes)
        let randomIndex = Math.floor(Math.random() * questionTypes.length)
        let questionType = questionTypes[randomIndex]
        console.log(questionType)
        
        cy.get('.visible > .item')
        .contains(questionType)
        .click()
        if(questionType=='Multiple Choice'){
            for(let j=0;j<multiple.length;j++){
            
            cy.get(`#question_answers_attributes_${j}_body`).type(multiple[j])
            cy.get(`#question_answers_attributes_${j}_weight`).type(`${j+1}`)
            
            if(j<multiple.length -1){
                cy.get('.add-ans > a > :nth-child(2)').click()
            } 
            }
        }
        if(questionType=='Free Response'){
            let checkbox=Math.round(Math.random())
            console.log(checkbox)
            if(checkbox==1){
                cy.get('.free-response-watson > .ui > label').click()
            }
            
        }
        cy.get('#new_question > .actions > .blue').click()
        if(i<questions.length-1)
        cy.ClickAddQuestionButton()
    })
    
}
})