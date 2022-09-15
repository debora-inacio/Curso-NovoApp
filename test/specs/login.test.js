const login = require('../../pageObjects/login.page.js');

describe ('Login', () => {
    it ('Clicar em acessar contas', () => {
        login.acessarContaBtn.click();
    })
})