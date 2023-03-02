import { credentials } from '../../../credentials'
import { spanish_multiple } from '../../../assessment_questions'
import { spanish_question } from '../../../assessment_questions'
import { multiple} from '../../../assessment_questions'
import { questions } from '../../../assessment_questions'
import '../../assessments/partials/assessment_questions_create'


Cypress.Commands.add('CreatePollQuestions',()=>{
  cy.get('[data-tooltip="Polls"] > .text > .name').click()
    cy.get('.olumo-button').click()
    for(let i=0; i<questions.length;i++){
      cy.get('.emojionearea-editor').type(questions[i])
      cy.get('.olumo-d-flex > .ui').click()
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
        if (questionType === 'Multiple Choice') {
          for (let i = 0; i < multiple.length; i++) {
            cy.get(`:nth-child(${i+2}) > .olumo-input-field-section > .ui > input`).type(multiple[i])
          }
        }
      
      if(i<questions.length-1){
        cy.get('.olumo-question-button-section > .olumo-button').click()
      }
    })  

    }
})
Cypress.Commands.add('ClickTheEditButton',()=>{
  for(let i=1;i<questions.length;i++){
  cy.get(`:nth-child(${i}) > .olumo-actions > .olumo-edit-icon > .edit`).click()
  }
})
Cypress.Commands.add('CreatePollsSpanishQuestions',()=>{
  for(let i=0; i<questions.length;i++){
    cy.get(`:nth-child(${i+1}) > .olumo-input-field-with-dropdown-style-1 > .olumo-input-field-section > .olumo-input-field-with-icon > .olumo-global-icon`).click()
    cy.get('.olumo-question-section > .olumo-input-field-section > .olumo-default-input-field').clear().type(spanish_question[i])
    cy.get('.olumo-modal-content').then(($ele)=>{
      if($ele.find('.olumo-answer-label').length > 0 ){
        for(let i=0; i<spanish_multiple.length;i++){
        cy.get(`.olumo-answer-section > :nth-child(${i+2}) > .olumo-default-input-field`).clear().type(spanish_multiple[i])
        }
      }
    })
    cy.get('.olumo-row > :nth-child(2) > .olumo-button').click()

  }
})





















































































