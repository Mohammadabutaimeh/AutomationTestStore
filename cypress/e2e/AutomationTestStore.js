/// <reference types="Cypress" />
let randomNumber = Cypress._.random(0, 1000);
let FinalEmail=`m.abutaimeh${randomNumber}@gmail.com` 
let LoginName=`mohammad${randomNumber}`
Cypress.env('email', FinalEmail);
Cypress.env('password', '123456@Qa');
Cypress.env('Loginname', LoginName);

describe('Automation Test Store Website Sign up & Sign in  ', () => {
    it('Create a new user', () => {
    cy.visit("https://automationteststore.com/index.php?rt=account/login");
    cy.get('#accountFrm > fieldset > .btn').click();
    cy.get('#AccountFrm_firstname').type("mohammad");
    cy.get('#AccountFrm_lastname').type("abutaimeh");
    cy.get('#AccountFrm_email').type(Cypress.env('email'));
    cy.get('#AccountFrm_telephone').type("00962789655519");
    cy.get('#AccountFrm_fax').type("00962789655519");
    cy.get('#AccountFrm_company').type("Drago Company");
    cy.get('#AccountFrm_address_1').type("Jordan");
    cy.get('#AccountFrm_city').type("Amman");
    cy.get('#AccountFrm_postcode').type("11931");
    cy.get('#AccountFrm_country_id').select("Jordan");
    cy.get('#AccountFrm_zone_id').select("'Amman");
    cy.get('#AccountFrm_loginname').type(Cypress.env('Loginname'));
    cy.get('#AccountFrm_password').type(Cypress.env('password'));
    cy.get('#AccountFrm_confirm').type(Cypress.env('password'));
    cy.get('#AccountFrm_newsletter0').check();
    cy.get('#AccountFrm_agree').check();
    cy.get('.col-md-2 > .btn').click();
});
it('Log in With Created Data', () => {
    cy.visit("https://automationteststore.com/index.php?rt=account/login");
    cy.get('#loginFrm_loginname').type(Cypress.env('Loginname'));
    cy.get('#loginFrm_password').type(Cypress.env('password'));
    cy.get('#loginFrm > fieldset > .btn').click();
    
});

});
