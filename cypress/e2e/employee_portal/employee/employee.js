Cypress.Commands.add('FetchScaleQuestionArray',()=>{
     window.array = [];
    
    cy.get('.responses .ui .column div').each(($element) => {
      const id = $element.attr('id');
      array.push(id);
    }).then(() => {
      console.log(array);
      window.filteredArray = array.filter((element) => element !== undefined);
      window.filteredArrays = filteredArray.filter((element) => !element.includes('feedback'));
      console.log(filteredArrays)
    });
})
Cypress.Commands.add('FetchOnlyNumber',()=>{
    console.log(filteredArrays)
     window.numberArray = filteredArrays.map((element) => parseInt(element.match(/\d+/)[0]));
    console.log(numberArray)
})



function getRandomValue(number) {
  return Math.floor(Math.random() * number) + 1; // Generates a random value between 1 and 5
}

Cypress.Commands.add('AnswerQuestions', () => {
  window.numberArray.forEach((number) => {
    let randomChoice = getRandomValue(2);
    let randomValue=getRandomValue(5)
    

    let multipleChoiceSelector = `#edit_response_${number} > .vertical-answers > :nth-child(${randomChoice}) > .ui > .collection_radio_buttons`;
    let scaleClassSelector = `#edit_response_${number} > .horizontal-answers > :nth-child(${randomValue}) > .ui > .collection_radio_buttons`;
    let freeResponseSelector = `#response-${number}-feedback`;

    // Perform actions specific to multiple choice question
    if (Cypress.$(multipleChoiceSelector).length) {
      cy.get(multipleChoiceSelector)
        .click(); // Example action: click on the randomly selected option
      return; // Exit the current loop iteration
    }

    // Perform actions specific to scale class question
    if (Cypress.$(scaleClassSelector).length) {
      cy.get(scaleClassSelector)
        .click(); // Example action: click on the randomly selected option
      return; // Exit the current loop iteration
    }

    // Perform actions specific to free response question
    if (Cypress.$(freeResponseSelector).length) {
      cy.get(freeResponseSelector)
        .type('Sample text'); // Example action: type the randomly selected value
    }
  });
});

