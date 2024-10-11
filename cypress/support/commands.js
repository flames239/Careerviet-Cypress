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


// choose Industries
Cypress.Commands.add("selectIndustry", () => {
  cy.get('div[id="select_industry_db_chosen"]').then(($listIndustries) => {
    // check if field industry is empty, we start to click some industry
    if ($listIndustries.val().length === 0) {
      cy.get('div[id="select_industry_db_chosen"]').click();
      cy.get(".chosen-drop .chosen-results li")
        .contains("CNTT - Phần mềm")
        .click({ ctrlKey: true });
      cy.get(".chosen-drop .chosen-results li")
        .contains("Quản lý chất lượng (QA/QC)")
        .click({ ctrlKey: true });
      cy.get("body").click({ force: true }); // click body tag to off show list industry
    } else {
      // If options are already selected, delete one industry then click a new one
      cy.get(".search-choice").find("a").click();
      cy.get('div[id="select_industry_db_chosen"]').click();
      cy.get(".chosen-drop .chosen-results li")
        .contains("Bán lẻ / Bán sỉ")
        .click({ ctrlKey: true });
      cy.get("body").click({ force: true });
    }
  });
  cy.get("body").click({ force: true }); // click body to close dropdown
});

// input Job Requirements and Description
Cypress.Commands.add("fillIframe", (selector, content) => {
  cy.get(selector).then(($iframe) => {
    const iframeBody = $iframe.contents().find("body");
    cy.wrap(iframeBody).clear().type(content);
  });
});

// choose day receive CV
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

// choose Service to postjob
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
  cy.get(".jconfirm-buttons").find("button").contains("Đồng ý").click();
  cy.get(".jconfirm-buttons").find("button").contains("ok").click(); // đồng ý hạ job
});


// choose day to receive Resume
Cypress.Commands.add("selectDayReceiveCV", () => {
  cy.get("#JOB_LASTDATE").click();
  let date = new Date();
  date.setDate(date.getDate() + 30);
  let futureDay = date.getDate();
  let fututeMonth = (date.getMonth() + 1).toString().padStart(2, "0"); // Note: Months are zero-indexed in JavaScript
  let futureYear = date.getFullYear();
  let dateAssert = `${futureDay}/${fututeMonth}/${futureYear}`;

  cy.get("#JOB_LASTDATE").click();

  // Check if the future month is already displayed
  cy.get(".monthselect").then(($monthSelect) => {
    if (!$monthSelect.val().includes(fututeMonth)) {
      // If not, click the "Next" button until the desired month is selected
      cy.get('.table-condensed thead tr th[class="next available"]').click({
        multiple: true,
        force: true
      });
    }
  });

  // Find and click the future date
  cy.get(".calendar-table tbody td").each(($dayClick) => {
    if (
      $dayClick.text() === futureDay.toString() &&
      $dayClick.hasClass("available")
    ) {
      cy.wrap($dayClick).click();
      // cy.get('#JOB_LASTDATE').should('have.value', `${dateAssert}`)
      return false; // Exit the loop once the desired element is clicked
    }
  });
});



Cypress.Commands.add("salaryRange", () => {
  cy.get("#job_salaryunit").then((optionValue) => {
    const choose_value = optionValue.val(); // lay gia tri the option trong lua chon select
    if (choose_value === "vnd") {
      cy.get("#salary_from")
        .clear()
        .type("13,000,000")
        .should("have.value", "13,000,000");
      cy.get("#salary_to")
        .clear()
        .type("18,000,000")
        .should("have.value", "18,000,000");
    } else {
      cy.get("#salary_from")
        .clear()
        .type("1500")
        .should("have.value", "1,500");
      cy.get("#salary_to").clear().type("2500").should("have.value", "2,500");
    }
  });
})