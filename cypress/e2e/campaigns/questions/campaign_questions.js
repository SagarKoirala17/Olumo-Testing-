import { questions } from '../../../assessment_questions' 
import { multiple } from '../../../assessment_questions'
import '../partials/campaign_homepage_components'
import { shuffle } from '../../../shuffle'

Cypress.Commands.add('CreateCampaignQuestions',()=>{
let shuffledQuestions=shuffle(questions)
for(let j=0;j<cat_num.length;j++){
    for(let i=1; i<questions.length;i++){
   
        cy.get(`#addQuestion${cat_num[j]} > .question-fields > #new_question > .question > .question-input > .emojionearea > .emojionearea-editor`).type(shuffledQuestions[j])
        cy.get(`#addQuestion${cat_num[j]}> .question-fields > #new_question > .question > .ui`).click()
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
            for(let k=0;k<multiple.length;j++){
            
            cy.get(`#question_answers_attributes_${k}_body`).type(multiple[k])
            cy.get(`#question_answers_attributes_${k}_weight`).type(`${k+1}`)
            
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
        cy.get(`#addQuestion${cat_num[j]} > .question-fields > #new_question > .actions > .blue`).click()
        if(i<questions.length-1)
        cy.get(`div[data-category_id="${cat_num[j]}"] > .content > .button`).click()
        
    })
    

    }
   
    
}
})
Cypress.Commands.add('AssertQuestionCategoryContainer',()=>{
for(let i=0;i<cat_num.length;i++){
    cy.get(`div[data-category_id="${cat_num[i]}"] > .content-head > h4`).should('be.visible')
    cy.get(`div[data-category_id="${cat_num[i]}"] > .content-head >.content-right > span`).should('be.visible')
    cy.get(`div[data-category_id="${cat_num[i]}"] > .content > .button`).should('be.visible')
}
})
Cypress.Commands.add('AddMoreQuestions',()=>{
    for(let i=0;i<cat_num.length;i++){
        
        cy.get(`div[data-category_id="${cat_num[i]}"] > .content > .button`).click()
        
    }
}) 