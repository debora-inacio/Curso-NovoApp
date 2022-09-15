const login = require('../../pageObjects/login.page.js');

describe ('Login', () => {
    it ('Clicar em acessar conta', () => {
        login.acessarContaBtn.click();
    })
})