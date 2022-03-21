/// <reference types="cypress" />

it('teste iframe', {retries:0},()=>{
    cy.visit('/');

    cy.get('#newUser').click();
    cy.get('#firstname').type('nathan');
    cy.get('#lastname').type('joão');
    cy.get('#userName').type('paodequeijo');
    cy.get('#password',{timeout:500}).type('292Pi');
    cy.wait(500);
    cy.get('[style="width: 304px; height: 78px;"] > div > iframe').click();
    cy.intercept('POST','/Account/v1/User',{statusCode: 200}).as('post');
    cy.frameLoaded('[title="reCAPTCHA"][src*="google"]')
    cy.iframe('[title="reCAPTCHA"][src*="google"]').find('[id="recaptcha-anchor"]').should('be.visible').click();
    cy.wait(5000)
    cy.pause();
    cy.get('#register').should('be.visible').click();
    cy.wait('@post').its('response.statusCode').should('eq', 200)
});