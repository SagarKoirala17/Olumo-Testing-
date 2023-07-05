import '../employee_portal/employee/employee'
describe('Answer the Unanswered Responses', () => {
    it('Answer the unanswered response', () => {
      cy.visit('/me/unanswered?token=xJJ9PSrQoCRufPM3endxSYmS');
      cy.FetchScaleQuestionArray()
      cy.ScaleQuestionResponse()
    });
  });
  
  