import { questions } from '../../../assessment_questions'
import { multiple } from '../../../assessment_questions'
import { shuffle } from '../../../shuffle'
import { spanish_multiple } from '../../../assessment_questions'
import { spanish_question} from '../../../assessment_questions'
import { assessmentTitles } from '../../../assessment_questions'
import '../partials/assessment_component'


Cypress.Commands.add('AssessmentName',()=>{

  window.randomTitleIndex = Math.floor(Math.random() * assessmentTitles.length)
  window.randomTitle = assessmentTitles[randomTitleIndex]
  cy.get('.olumo-survey-form-description > .olumo-default-input-field').clear().type(randomTitle)
})
Cypress.Commands.add("CreateQuestions", () => {
    
  
  cy.AssessmentName()

  questions.forEach((question, index) => {
    const selector = `#text-area-qn-${index}`
    const questionSelector = `.question-input-${index} > .olumo-input-field-with-dropdown-style-1 > .olumo-dropdown-section > .olumo-d-flex > .ui`
    cy.get(selector).type(question)
    cy.get(questionSelector).click()
      
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
            cy.get(`:nth-child(${index +3 }) > .olumo-form-element-section > .olumo-answer-list > :nth-child(${i+2}) > .olumo-answer-input-field > .olumo-input-field-section > .olumo-default-input-field`).type(multiple[i])
          }
        }
      })
    

    if (index < questions.length - 1) {
      cy.get('.olumo-question-button-section > .olumo-button > .olumo-caption').click()
    }
  })

})

Cypress.Commands.add('CreateSpanishQuestions',()=>{
  for(let i=0;i<spanish_question.length;i++){
  cy.get(`.question-input-${i} > .olumo-input-field-with-dropdown-style-1 > .olumo-input-field-section > .olumo-input-field-with-icon > .olumo-global-icon`).click()
  cy.get(`.olumo-input-field-section > #text-area-qn-${i}`).clear().type(spanish_question[i])
  cy.get('.olumo-modal-content').then(($ele)=>{
    if ($ele.find('.olumo-answer-list > .olumo-label').length > 0) {
      for(let i=0;i<spanish_multiple.length;i++){
        cy.get(`.olumo-modal-content > .olumo-answer-list > :nth-child(${i+2}) > .olumo-answer-input-field > .olumo-input-field-section > .olumo-default-input-field`).clear().type(spanish_multiple[i])
      }
    }


  })
  cy.get('.olumo-row > :nth-child(2) > .olumo-button').click()
}


})