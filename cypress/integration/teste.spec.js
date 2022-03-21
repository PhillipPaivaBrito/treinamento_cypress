/// <reference types="cypress" />

beforeEach(()=>{
    cy.visit('https://demoqa.com/broken');
})

it('Acessando a aplicação',()=>{
    cy.preencherFormulario('rodrigao', 'rodrigao@gmail.com');
});

it('teste-ip-dinamico',()=>{
    cy.get(':nth-child(1) > .element-list > #item-4').click();
    cy.get('button[type="button"][class="btn btn-primary"]').should('be.visible').eq(2).click();
    cy.get('#dynamicClickMessage').contains('you have done a dynamic click').should('be.visible');
})

it('popup',()=>{
    cy.get(':nth-child(3) > .group-header > .header-wrapper > .header-text').should((btn)=>{
        expect(btn).exist                                   //verifica se exist
        expect(btn).have.length(1)                          //verifica se tem tamanho
        expect(btn).be.visible                              //verifica se ta visivel
        expect(btn).have.text('Alerts, Frame & Windows')    //verifica o valor
    }).click();
    cy.get(':nth-child(3) > .element-list > .menu-list > #item-1 > .text').click();
    cy.get('#alertButton').should('be.visible').click();
    
    cy.on('window:alert', (alert)=>{
        expect(alert).to.eq('You clicked a button')
    });
    
});

it('validar url', ()=>{
    cy.get(':nth-child(3) > .group-header > .header-wrapper > .header-text').click();
    cy.get(':nth-child(3) > .element-list > .menu-list > #item-0 > .text').click();
    cy.get('#tabButton').click();
    cy.url().should('eq', 'https://demoqa.com/sample')
})

