import './assessment_component'
import './assessment_questions_create'
import { questions } from '../../../assessment_questions'
import { multiple } from '../../../assessment_questions'
import { spanish_question } from '../../../assessment_questions'
import { spanish_multiple } from '../../../assessment_questions'

Cypress.Commands.add('CheckTotalNumber', ()=>{
    cy.get(':nth-child(1) > .olumo-card-desc > .olumo-total-questions').then(($ele)=>{
        window.count=$ele.text()
        console.log(count)
        
        window.num=count.split(" ")
        window.number= parseInt(window.num[0])
        console.log(number)

    })
})
Cypress.Commands.add('EditQuestions',()=>{
  if(questions.length==window.number){
    for(let i=0; i < window.number; i++){
      const selector = `#text-area-qn-${i}`
      const questionSelector = `.question-input-${i} > .olumo-input-field-with-dropdown-style-1 > .olumo-dropdown-section > .olumo-d-flex > .ui`
      cy.get(selector).clear().type(questions[i])
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
        for (let j = 0; j < multiple.length; j++) {
          cy.get(`:nth-child(${i +3 }) > .olumo-form-element-section > .olumo-answer-list > :nth-child(${j+2}) > .olumo-answer-input-field > .olumo-input-field-section > .olumo-default-input-field`).clear().type(multiple[j])
        }
      }
    })
    }
  }
  else if(window.number < questions.length){
    for(let i=window.number;i<questions.length;i++){
      
      cy.get('.olumo-question-button-section > .olumo-button > .olumo-caption').click()
      
      const selector = `#text-area-qn-${i}`
      const questionSelector = `.question-input-${i} > .olumo-input-field-with-dropdown-style-1 > .olumo-dropdown-section > .olumo-d-flex > .ui`
      cy.get(selector).clear().type(questions[i])
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
        for (let j = 0; j < multiple.length; j++) {
          cy.get(`:nth-child(${i +3 }) > .olumo-form-element-section > .olumo-answer-list > :nth-child(${j+2}) > .olumo-answer-input-field > .olumo-input-field-section > .olumo-default-input-field`).clear().type(multiple[j])
        }
      }
    })
    }
    for(let i=0; i < questions.length; i++){
      const selector = `#text-area-qn-${i}`
      const questionSelector = `.question-input-${i} > .olumo-input-field-with-dropdown-style-1 > .olumo-dropdown-section > .olumo-d-flex > .ui`
      cy.get(selector).clear().type(questions[i])
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
        for (let j = 0; j < multiple.length; j++) {
          cy.get(`:nth-child(${i +3 }) > .olumo-form-element-section > .olumo-answer-list > :nth-child(${j+2}) > .olumo-answer-input-field > .olumo-input-field-section > .olumo-default-input-field`).clear().type(multiple[j])
        }
      }
    })
    }
  }
  else if(window.number > questions.length){
    for(let i=window.number;i>questions.length;i--){
      cy.get(`.question-input-${i-1}> .olumo-input-field-with-dropdown-style-1 > .olumo-dropdown-section > .olumo-d-flex > .olumo-icon > svg > :nth-child(1) > :nth-child(1) > :nth-child(1) > [fill="#ffdcdc"]`).click()
    }
    for(let i=0; i < questions.length; i++){
      const selector = `#text-area-qn-${i}`
      const questionSelector = `.question-input-${i} > .olumo-input-field-with-dropdown-style-1 > .olumo-dropdown-section > .olumo-d-flex > .ui`
      cy.get(selector).clear().type(questions[i])
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
        for (let j = 0; j < multiple.length; j++) {
          cy.get(`:nth-child(${i +3 }) > .olumo-form-element-section > .olumo-answer-list > :nth-child(${j+2}) > .olumo-answer-input-field > .olumo-input-field-section > .olumo-default-input-field`).clear().type(multiple[j])
        }
      }
    })
    }
  }
 
})

