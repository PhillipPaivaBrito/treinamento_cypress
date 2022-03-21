/// <reference types="cypress" />

beforeEach(()=>{
    cy.visit('/');
});

it('criar usuario no Iframe',()=>{
    //abrir o iframe
    cy.get(':nth-child(3) > .collapsible-header').should('be.visible').click();
    cy.get('[href="/mudancadefoco/iframe"]').should('be.visible').click();
    cy.get('[id="id_do_iframe"]').should('exist');
    cy.frameLoaded('[id="id_do_iframe"]')
    cy.iframe('[id="id_do_iframe"]').find('a[class="collapsible-header "]').should('be.visible').click();
    cy.iframe('[id="id_do_iframe"]').find('div[class="collapsible-body"][style="display: block;"] a[data-method="get"][href="/users/new"]').should('be.visible').click('right');
    // preenchiento do formulario
    cy.wait(500);
    cy.iframe('[id="id_do_iframe"]').find('input[id="user_name"][name="user[name]"]').click().type("Phillip");
    cy.iframe('[id="id_do_iframe"]').find('input[id="user_lastname"][name="user[lastname]"]').click().type("Paiva");
    cy.iframe('[id="id_do_iframe"]').find('input[id="user_email"][name="user[email]"]').click().type("phillip.brito@vsoft.com.br");
    cy.iframe('[id="id_do_iframe"]').find('input[id="user_address"][name="user[address]"]').click().type("rua dos loucos numero 0");
    cy.iframe('[id="id_do_iframe"]').find('input[id="user_university"][name="user[university]"]').click().type("universoft");
    cy.iframe('[id="id_do_iframe"]').find('input[id="user_profile"][name="user[profile]"]').click().type("QA");
    cy.iframe('[id="id_do_iframe"]').find('input[id="user_gender"][name="user[gender]"]').click().type("helicopero de combate");
    cy.iframe('[id="id_do_iframe"]').find('input[id="user_age"][name="user[age]"]').click().type("100");
    //click para criar
    cy.iframe('[id="id_do_iframe"]').find('input[value="Criar"]').should('be.visible').click();
})
it('listar usuarios no Iframe',()=>{
    //abrir o iframe
    cy.get(':nth-child(3) > .collapsible-header').should('be.visible').click();
    cy.get('[href="/mudancadefoco/iframe"]').should('be.visible').click();
    cy.get('[id="id_do_iframe"]').should('exist');
    cy.frameLoaded('[id="id_do_iframe"]')
    cy.wait(500);
    cy.iframe('[id="id_do_iframe"]').find('a[class="collapsible-header "]').should('be.visible').click();
    cy.iframe('[id="id_do_iframe"]').find('div[class="collapsible-body"][style="display: block;"] a[data-method="get"][href="/users"]').should('be.visible').click('right');
})

it('excluir usuario no Iframe',()=>{
    cy.get(':nth-child(3) > .collapsible-header').should('be.visible').click();
    cy.get('[href="/mudancadefoco/iframe"]').should('be.visible').click();
    cy.get('[id="id_do_iframe"]').should('exist');
    cy.intercept('POST','/Account/v1/User',{statusCode: 200}).as('post');
    cy.frameLoaded('[id="id_do_iframe"]')
    cy.wait(500);
    cy.iframe('[id="id_do_iframe"]').find('a[class="collapsible-header "]').should('be.visible').click();
    cy.iframe('[id="id_do_iframe"]').find('div[class="collapsible-body"][style="display: block;"] a[data-method="get"][href="/users"]').should('be.visible').click('right');
    cy.wait(500);
    cy.iframe('[id="id_do_iframe"]').find('td a[data-confirm="Vocee está certo disso?"]').eq(0).click();
    cy.wait('@post').its('response.statusCode').should('eq', 200)
})

it('teste upload arquivo',()=>{

})