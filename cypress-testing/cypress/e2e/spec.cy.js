 //  < reference types="Cypress" /> not working 
describe('Checking Conter Application', () => {
  it('Should run on localhost:3000', () => {
    cy.visit('http://localhost:3000')
    cy.get("h2").should("exist");
    cy.get(".addButton").should("exist");
    cy.get(".reduceButton").should("exist");
  })
  
  // checking is click event is working or not
  it("Should Increment Counter",()=>{
   cy.visit('http://localhost:3000')
   cy.get("h2").should("have.text","The count is 0")
   cy.get(".addButton").click()
   cy.get("h2").should("have.text","The count is 1")
   cy.get(".addButton").click()
   cy.get("h2").should("have.text","The count is 2")
   cy.get(".addButton").dblclick()
   cy.get("h2").should("have.text","The count is 4")
  })

})