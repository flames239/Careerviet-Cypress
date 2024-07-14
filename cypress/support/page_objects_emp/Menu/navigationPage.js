export class NavigationHeaderPage {
    ClickHomePage() {
      cy.get(".left-wrap ul li a")
        .eq(0)
        .should("have.attr", "href", "https://careerviet.vn/vi/employers")
        .click({ force: true });
    }
  
    ClickProductAndServicesPage() {
      // Wait for the dropdown to become visible
      cy.get(".left-wrap .dropdown .dropdown-menu").then((menu) => {
        cy.wrap(menu)
          .eq(0)
          .invoke("show")
          .contains("Đăng Tuyển Dụng")
          .should("be.visible")
          .click();
      });
  
      cy.get(".left-wrap .dropdown .dropdown-menu").then((menu) => {
        cy.wrap(menu)
          .eq(0)
          .invoke("show")
          .contains("Tìm Hồ Sơ Ứng Viên")
          .should("be.visible")
          .click();
      });
  
      cy.get(".left-wrap .dropdown .dropdown-menu").then((menu) => {
        cy.wrap(menu)
          .eq(0)
          .invoke("show")
          .contains("Talent Solution")
          .should("be.visible")
          .click();
      });
  
      cy.get(".left-wrap .dropdown .dropdown-menu").then((menu) => {
        cy.wrap(menu)
          .eq(0)
          .invoke("show")
          .contains("Quảng Cáo Tuyển Dụng")
          .should("be.visible")
          .click();
      });
  
      cy.get(".left-wrap .dropdown .dropdown-menu").then((menu) => {
        cy.wrap(menu)
          .eq(0)
          .invoke("show")
          .contains("Talent Driver")
          .should("be.visible")
          .click();
      });
  
      cy.get(".left-wrap .dropdown .dropdown-menu").then((menu) => {
        cy.wrap(menu)
          .eq(0)
          .invoke("show")
          .contains("Targeted Email Marketing")
          .should("be.visible")
          .click();
      });
  
      cy.get(".left-wrap .dropdown .dropdown-menu").then((menu) => {
        cy.wrap(menu)
          .eq(0)
          .invoke("show")
          .contains("Talent Referral")
          .should("be.visible")
          .click();
      });
  
      cy.get(".left-wrap .dropdown .dropdown-menu").then((menu) => {
        cy.wrap(menu)
          .eq(0)
          .invoke("show")
          .contains("Đăng Tuyển Dụng và Tìm Hồ Sơ Quốc tế")
          .should("be.visible")
          .click();
      });
  
      cy.get(".left-wrap .dropdown .dropdown-menu").then((menu) => {
        cy.wrap(menu)
          .eq(0)
          .invoke("show")
          .contains("Xem tất cả sản phẩm / dịch vụ")
          .should("be.visible")
          .click();
      });
    }
  
    HiringSite() {
      cy.get('.left-wrap ul li a')
        .contains('Cẩm Nang Tuyển Dụng')
        .click();
    }
  
    EmployerOfChoice() {
      cy.get('.left-wrap ul li a')
        .contains('Employer of Choice')
        .invoke('removeAttr','target')
        .click();
      cy.go('back')
    }
  
    Contact() {
      cy.get('.left-wrap ul li a')
        .contains('Liên hệ')
        .click();
    }
  }
  
  export const onNavigationPage = new NavigationHeaderPage();
  