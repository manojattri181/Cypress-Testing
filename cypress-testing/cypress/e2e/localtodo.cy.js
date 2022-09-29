describe("Testing localhost:8080",()=>{
    it("should intercerpt the get request",()=>{
        // cy.server();
        cy.visit("http://localhost:3000");
        cy.intercept("GET","http://localhost:8080/posts",{title:"Learn Cypress",status:false}).as("getRequest");
        // cy.wait("@getRequest")
    })
})