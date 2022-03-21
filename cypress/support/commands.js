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


Cypress.Commands.add('preencherFormulario', (nome, email)=>{
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click();
    cy.get('#userName').should('be.visible').type(nome);
    cy.get('#userEmail').should('be.visible').type(email);
    cy.get('#currentAddress').should('be.visible').type('teste');
    cy.get('#permanentAddress').should('be.visible').type('teste2');
    cy.get('#submit').should('be.visible').click();

    cy.get('input[class="mr-sm-2 field-error form-control"]').should('not.exist');//pegar caixa vermelha indicando que o email é invalido

    //validações
    cy.get('.border').should('be.visible');
    cy.get('#name').contains(nome).should('be.visible');
    cy.contains(email).should('be.visible');

})
//it.only('validar formatação do email', ()=>{
//    cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click();
//    cy.get('#userName').should('be.visible').type('rodrigão');
//    cy.get('#userEmail').should('be.visible').type('rodrigão@gmail');
//    cy.get('#submit').should('be.visible').click();
//    cy.get('input[class="mr-sm-2 field-error form-control"]').should('not.be.visible');
//
//});