/// <reference types="cypress" />

import {criarUsuario,listarUsuarios,excluirUsuario, criarUsuarioIframe, listarUsuariosIframe, excluirUsuarioIframe} from './utils_formulario'

beforeEach(() => {
    cy.visit('/');
});

it('Deve criar um usuario',() => {
    criarUsuario();
});

it('Deve listar os usuarios',()=>{
    listarUsuarios();
})

it('Deve excluir um usuario da lista',()=>{
    excluirUsuario();
})

it('deve criar um usuario no iframe',()=>{
    criarUsuarioIframe();
})

it('deve lsitar os usuarios no Iframe',()=>{
//    listarUsuariosIframe();
})

it('deve excluir um usuario da lista',()=>{
    excluirUsuario();
})