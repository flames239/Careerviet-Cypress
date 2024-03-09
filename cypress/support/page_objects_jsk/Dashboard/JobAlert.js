function ClickJobAlert() {
  cy.get(".list-unstyled").contains("Thông Báo Việc Làm").click(); // click Job Alert
}

function CreateJobAlert() {
  cy.get(".button-add").find("a").should("be.visible").click(); // Click Create Job Alert

  // popup form appears
  cy.get("#keywordJA").should("be.visible").clear().type("Manual Tester"); // input title Job Alert

  cy.get("#industryJA_chosen").click(); // click field industries to appear dropdown list
  // Click on the options while holding the Ctrl (or Command) key
  cy.get(".chosen-drop").then(($dropdown) => {
    if ($dropdown.is(":visible")) {
      // jQuery method show element is visible
      cy.get(".chosen-results")
        .contains("Tiếp thị / Marketing")
        .click({ ctrlKey: true });

      cy.get(".chosen-results")
        .contains("Quản lý chất lượng (QA/QC)")
        .click({ ctrlKey: true });

      // After selecting the options, click outside the dropdown to close it
      cy.get("body").click({ force: true });
    }
  });

  cy.get("#locationJA_chosen").click(); // click field country to appear dropdown list
  // Click on the options while holding the Ctrl (or Command) key
  cy.get(".chosen-drop").then(($dropdown) => {
    if ($dropdown.is(":visible")) {
      // jQuery method show element is visible
      cy.get(".chosen-results")
        .contains("Hồ Chí Minh")
        .click({ ctrlKey: true });

      cy.get(".chosen-results")
        .contains("Hồ Chí Minh")
        .click({ ctrlKey: true });
      cy.get(".chosen-results").contains("Hà Nội").click({ ctrlKey: true });

      // After selecting the options, click outside the dropdown to close it
      cy.get("body").click({ force: true });
    }
  });

  cy.get("#salary").select("Từ  20.000.000 đ"); // select field salary
  cy.get("#level").select("Nhân viên"); // select field level
  cy.get("#senddays").select("Mỗi tuần"); // select time receive email
  cy.get('form#frmAlert button[type="button"]').should("be.visible").click(); // save form
}

function ViewMoreJobAlert() {
  cy.get('div[class="table"] table tbody tr td[class="suitable-job"]').eq(0).find('a').click()
}

export class JobAlert {
  // Flow: Login Then Click Job Alert
  clickJobAlert() {
    ClickJobAlert()
    // CreateJobAlert()
    ViewMoreJobAlert()
  }
}

export const onJobAlert = new JobAlert();
