// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add("clickBtnAdd",function(){
    cy.contains("button","Add").should("be.visible").click()
})

Cypress.Commands.add("checkVisibility",function(selector,content){
    content === undefined   ? cy.get(selector).should("be.visible") :cy.get(selector).contains(content).should("be.visible")
    
})

Cypress.Commands.add("formCleaning",function(){
    cy.get("@title").clear()
    cy.get("@description").clear()
    cy.get("@accomplishmentValid").uncheck().should("not.be.checked")
    cy.reload() // reloading the page to remove the warning text 
})