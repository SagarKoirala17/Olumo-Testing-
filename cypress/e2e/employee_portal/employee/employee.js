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
Cypress.Commands.add('ScaleQuestionResponse',()=>{
    console.log(filteredArrays)
    
    

})
