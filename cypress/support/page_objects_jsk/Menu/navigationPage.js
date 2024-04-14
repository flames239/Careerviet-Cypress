export class NavigationHeaderPage {
  /*
       Declare Function
       Then write logic code inside Function
       */
  AllJob_Newest() {
    // Wait for the dropdown to become visible
    cy.get(".left-wrap .dropdown-menu").then((menu) => {
      cy.wrap(menu)
        .eq(0)
        .invoke("show")
        .contains("Việc làm mới nhất")
        .should("be.visible")
        .click();
    });
  }

  CVHay() {
    cy.get(".left-wrap").contains("CV Hay").click();
  }

  VietNamSalary() {
    cy.get(".left-wrap")
      .contains("a", "VietnamSalary")
      .invoke("removeAttr", "target")
      .click(); // call invoke to intercept open in new tab
  }

  CareerMap() {
    cy.get(".left-wrap")
      .contains("CareerMap")
      .invoke("removeAttr", "target")
      .click(); // call invoke to intercept open in new tab
  }

  TalentCommunity() {
    cy.get(".left-wrap").contains("Cẩm Nang").click();
  }

  CareerStart() {
    cy.get(".left-wrap").contains("CareerStart").click();
  }

  UltilitiesSalaryCalculator() {
    cy.get(".left-wrap .dropdown-menu")
      .eq(1)
      .invoke("show")
      .contains("Tính Lương")
      .should("be.visible")
      .click();
  }

  UltilitiesTestDISC() {
    cy.get(".left-wrap .dropdown-menu")
    .eq(1)
    .invoke("show")
    .contains("Test DISC")
    .should("be.visible")
    .click();
  }
}

export const onNavigationPage = new NavigationHeaderPage();
