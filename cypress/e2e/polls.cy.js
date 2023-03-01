import { credentials } from '../credentials'
import { questions } from '../assessment_questions'
import { multiple } from '../assessment_questions'
import { shuffle } from '../shuffle'
import './polls/partials/polls_components'

describe('Polls', () => {
  beforeEach(() => {
    cy.login(credentials.email, credentials.password)
  })
  
  it('Check the assessment component',()=>{
      cy.clickThePollsButton()
      cy.checkThePollsAndAnnouncementButton()
      cy.checkHeadingContainer()
      cy.checkTheNewPollsButton()
  })

  it('Create the new Poll',()=>{
    const shuffledQuestions = shuffle(questions)
    const selectedQuestions = shuffledQuestions.slice(0, questions.length)
    cy.get('[data-tooltip="Polls"] > .text > .name').click()
    cy.get('.olumo-button').click()
    for(let i=0; i<selectedQuestions.length;i++){
      cy.get('.emojionearea-editor').type(selectedQuestions[i])
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
      
        if(i<selectedQuestions.length-1){
          cy.get('.olumo-question-button-section > .olumo-button').click()
        }
      })  
    }
  })
})
