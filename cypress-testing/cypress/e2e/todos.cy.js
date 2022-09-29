describe("Check the todo application",()=>{

    it("checking url and find structure",()=>{
        cy.visit("https://example.cypress.io/todo");
        cy.get(".new-todo").should("exist");
        cy.get(".todo-count").should("exist");
        cy.get(".filters").should("exist");
    })
    
    it("Should be able to add task",()=>{
        cy.visit("https://example.cypress.io/todo");
        cy.get(".todo-list").children().should("have.length",2);
        cy.get(".new-todo").type("learn cypress{enter}");
        cy.get(".todo-list").children().should("have.length",3);
    })   
    it("checking the counter",()=>{
        cy.visit("https://example.cypress.io/todo");
        cy.get(".todo-count strong").should("have.text",2);
        cy.get(".new-todo").type("learn cypress-testing{enter}");
        cy.get(".todo-count strong").should("have.text",3);
    })
})