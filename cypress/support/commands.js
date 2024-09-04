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
Cypress.Commands.add("openHomePage", () => {
  cy.visit("/");
});

Cypress.Commands.add("openHomePageEmp", () => {
  cy.visit(Cypress.env("EmpBaseUrl"));
});

Cypress.Commands.add("selectIndustry", (industries = []) => {
  cy.get('div[id="select_industry_db_chosen"]').click();
  industries.forEach((industry) => {
    cy.get(".chosen-results li").contains(industry).click({ ctrlKey: true });
  });
  cy.get("body").click({ force: true }); // click body to close dropdown
});

Cypress.Commands.add("fillIframe", (selector, content) => {
  cy.get(selector).then(($iframe) => {
    const iframeBody = $iframe.contents().find("body");
    cy.wrap(iframeBody).clear().type(content);
  });
});

Cypress.Commands.add("dayFill", (selector, days, month, years) => {
  cy.get(selector)
    .find('input[class="dtpicker-compValue"]')
    .eq(0)
    .type(days)
    .should("be.visible", "have.value", days);
  cy.get(selector)
    .find('input[class="dtpicker-compValue"]')
    .eq(1)
    .type(month)
    .should("be.visible", "have.value", month);
  cy.get('div[class="dtpicker-comp year"]')
    .find('input[class="dtpicker-compValue"]')
    .type(years)
    .should("be.visible", "have.value", years);
  cy.get(selector)
    .find('a[class="dtpicker-button dtpicker-buttonSet"]')
    .click();
});

Cypress.Commands.add("chooseService", () => {
  cy.get('div[class="table-jobs-waiting"]')
    .find("#c_pack_3228231_1126_4600130") //
    .click(); // click service
  cy.get('div[class="button"]')
    .find('a[class="btn-gradient btn-posting-jobs"]')
    .click(); // click btn postjobs
  cy.wait(1000);
  cy.get('div[class="form-group form-submit"]').find("#btnSave").click(); // click confirm
  cy.get('div[class="jconfirm-buttons"] button').click(); // close popup confirm
  cy.wait(1000);
  cy.get('table tbody tr td .list-manipulation li a[title="Tạm dừng đăng"]')
    .eq(0)
    .click();
  cy.get(".jconfirm-buttons").find("button").contains("Đồng ý").click(); //
  cy.get(".jconfirm-buttons").find("button").contains("ok").click(); // đồng ý hạ job
});

