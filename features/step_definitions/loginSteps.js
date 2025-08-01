const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');

let driver;

Before(async function () {
    driver = await new Builder().forBrowser('chrome').build();
});

After(async function () {
    if (driver) {
        await driver.quit();
    }
});

Given('que eu estou na pagina de login', async function () {
    await driver.manage().window().maximize();
    await driver.get('http://localhost:4000/');

});

When('realizo login com as seguintes credenciais', async function (dataTable) {
    const data = dataTable.rowsHash();

    const usuario = data.usuario;
    const senha = data.senha;

    await driver.wait(until.elementLocated(By.id('username')), 10000);
    const usernameField = await driver.findElement(By.id('username'));
    await usernameField.sendKeys(usuario);

    await driver.wait(until.elementLocated(By.id('senha')), 10000);
    const passwordField = await driver.findElement(By.id('senha'));
    await passwordField.sendKeys(senha);


    await driver.wait(until.elementLocated(By.xpath("//button[text()='Entrar']")), 10000);
    const loginButton = await driver.findElement(By.xpath("//button[text()='Entrar']"));
    await loginButton.click();
});

Then('devo ser redirecionado para a pagina inicial', async function () {

    await driver.wait(until.elementLocated(By.xpath("//*[@id='app-section']/div[1]//h4")), 10000);
    const titulo = await driver.findElement(By.xpath("//*[@id='app-section']/div[1]//h4")).getText();
    assert.strictEqual('Realizar Transferência', titulo);
});