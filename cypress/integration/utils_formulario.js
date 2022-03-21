const SELETECTOR = require('./elements').Elements

export function criarUsuario(){
    cy.get(SELETECTOR.btn_formulario).should('be.visible').click();
    cy.get(SELETECTOR.btn_novoUsuario).click();
    cy.get('#user_name').type('Phillip')
    cy.get('#user_lastname').type('Paiva')
    cy.get('#user_email').type('teste@teste.com.br')
    cy.get('#user_address').type('teste,321')
    cy.get('#user_university').type('universoft')
    cy.get('#user_profile').type('cria de QA')
    cy.get('#user_gender').type('Helicopero de combate')
    cy.get('#user_age').type('100')
    cy.get('input[value="Criar"]').click()
    cy.get('p[id="notice"]').contains('Usuário Criado com sucesso')
}

export function criarUsuarioIframe(){
    //abrir o iframe
    cy.get(SELETECTOR.btn_mudancaFoco).should('be.visible').click();
    cy.get(SELETECTOR.btn_Iframe).should('be.visible').click();
    cy.get(SELETECTOR.Id_Iframe).should('exist');
    cy.frameLoaded(SELETECTOR.Id_Iframe)
    cy.iframe(SELETECTOR.Id_Iframe).find(SELETECTOR.btn_formulario).should('be.visible').click();
    cy.iframe(SELETECTOR.Id_Iframe).find(SELETECTOR.btn_novoUsuario).should('be.visible').click('right');
    cy.wait(5000);
    // preenchiento do formulario
    cy.iframe(SELETECTOR.Id_Iframe).find('input[id="user_name"][name="user[name]"]').type("Phillip");
    cy.iframe(SELETECTOR.Id_Iframe).find('input[id="user_lastname"][name="user[lastname]"]').click().type("Paiva");
    cy.iframe(SELETECTOR.Id_Iframe).find('input[id="user_email"][name="user[email]"]').click().type("teste@teste.com.br");
    cy.iframe(SELETECTOR.Id_Iframe).find('input[id="user_address"][name="user[address]"]').click().type("teste,321");
    cy.iframe(SELETECTOR.Id_Iframe).find('input[id="user_university"][name="user[university]"]').click().type("Universoft");
    cy.iframe(SELETECTOR.Id_Iframe).find('input[id="user_profile"][name="user[profile]"]').click().type("QA");
    cy.iframe(SELETECTOR.Id_Iframe).find('input[id="user_gender"][name="user[gender]"]').click().type("Helicopero de combate");
    cy.iframe(SELETECTOR.Id_Iframe).find('input[id="user_age"][name="user[age]"]').click().type("100");
    //click para criar
    cy.iframe(SELETECTOR.Id_Iframe).find('input[value="Criar"]').should('be.visible').click();
}

export function listarUsuarios(){
    cy.get(SELETECTOR.btn_formulario).should('be.visible').click()
    cy.get('a[href="/users"]').click()
    cy.get('h5[class="center"]:Contains("Lista de Usuários")').should('be.visible')
}

export function listarUsuariosIframe(){
    cy.get(SELETECTOR.btn_mudancaFoco).should('be.visible').click();
    cy.get(SELETECTOR.btn_Iframe).should('be.visible').click();
    cy.get(SELETECTOR.Id_Iframe).should('exist');
    cy.frameLoaded(SELETECTOR.Id_Iframe)
    cy.iframe(SELETECTOR.Id_Iframe).find(SELETECTOR.btn_formulario).should('be.visible').click();
    cy.iframe(SELETECTOR.Id_Iframe).find('div[class="collapsible-body"][style="display: block;"] a[data-method="get"][href="/users"]').should('be.visible').click('right');
}

export function excluirUsuario(){
    cy.get(SELETECTOR.btn_formulario).should('be.visible').click()
    cy.get('a[href="/users"]').click()
    cy.get('td a[data-confirm="Vocee está certo disso?"]').eq(0).click()
    cy.get('p[id="notice"]:Contains("Seu Usuário foi removido com sucesso!")').should('be.visible')
}

export function excluirUsuarioIframe(){
    cy.get(':nth-child(3) > .collapsible-header').should('be.visible').click();
    cy.get('[href="/mudancadefoco/iframe"]').should('be.visible').click();
    cy.get('[id="id_do_iframe"]').should('exist');
    cy.intercept('POST','https://in.hotjar.com/api/v2/client/sites/927077/visit-data?sv=6',{statusCode: 200}).as('post');
    cy.frameLoaded('[id="id_do_iframe"]')
    cy.wait(500);
    cy.iframe('[id="id_do_iframe"]').find('a[class="collapsible-header "]').should('be.visible').click();
    cy.iframe('[id="id_do_iframe"]').find('div[class="collapsible-body"][style="display: block;"] a[data-method="get"][href="/users"]').should('be.visible').click('right');
    cy.wait(500);
    cy.iframe('[id="id_do_iframe"]').find('td a[data-confirm="Vocee está certo disso?"]').eq(0).click();
    cy.wait('@post').its('response.statusCode').should('eq', 200)
}