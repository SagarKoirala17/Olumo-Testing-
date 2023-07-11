import '../employee_portal/employee/employee'
describe('Answer the Unanswered Responses', () => {
    it('Answer the unanswered response via poll', () => {
      cy.visit('/me/unanswered?token=xJJ9PSrQoCRufPM3endxSYmS');
      cy.FetchScaleQuestionArray()
      cy.FetchOnlyNumber()
      cy.AnswerQuestions()
      //Click the Submit Button
      cy.get('#submit').should('be.visible').click()
      cy.get('.twelve > img').should('be.visible')
    });
  });
  
  