export class workWithVietnamSalary {
    SearchRangeSalary(jobTitle, expectedSalary, numOfExp) {
      cy.get("#keyword2").clear().type(`${jobTitle}`);
      cy.get("#location2").select("Hồ Chí Minh");
      cy.get("#yoursalary").clear().type(`${expectedSalary}`);
      cy.get("#yourexp").clear().type(`${numOfExp}`);
      cy.get('.form-group button[class="btn-gradient"]').click();
    }
  
    BlogPages() {
      cy.get(".right-wrap").contains("a", " Blogs").click();
      cy.get(".figure")
        .contains(
          "a",
          "Bộ trưởng Nội vụ nói về 6 nội dung của chế độ tiền lương mới"
        )
        .invoke("removeAttr", "target")
        .click(); // invoke removeAttr target to intercept open in new tab
    }
  
    Testimonial() {
      cy.get(".right-wrap").contains("a", " Testimonial").click();
    }
  
    Compound_Interest(originMoney, moneyPerMonth, numberYears, interestRate) {
      cy.get(".right-wrap").contains("a", "Tính Lãi Kép").click();
      cy.get("#origin-money").clear().type(`${originMoney}`);
      cy.get("#money-per-month").clear().type(`${moneyPerMonth}`);
      cy.get("#number-years").clear().type(`${numberYears}`);
      cy.get("#interest-rate").clear().type(`${interestRate}`);
      cy.get("#btn_submit_form").click();
    }
  
    Saving_plan(inputEnd, inputStart, inputYear, inputRate) {
      cy.get(".right-wrap").contains("a", "Tính Tiền Tiết Kiệm").click();
      cy.get("#input_end").clear().type(`${inputEnd}`);
      cy.get("#input_start").clear().type(`${inputStart}`);
      cy.get("#input_year").clear().type(`${inputYear}`);
      cy.get("#input_rate").clear().type(`${inputRate}`);
      cy.get("#btn_submit_form").click();
    }
  
    Login_ClickProfileVNS() {
      cy.get(".title-login").click();
      cy.get('input[name="username"]').clear().type("quymy_m@yopmail.com");
      cy.get('input[name="password"]').clear().type("987654321");
      cy.get("#header_login").find("button").click();
      cy.get('div[class="main-login logged dropdown"]').click()
  
      // After login successfully, click on the account to go to page details VNS profile
      cy.get('body').then(formBody => {
        if (formBody.find('#frmUpdateInfo').is(":visible")) {
          //form will popup the first one login and never input any infor
          cy.get("#jsk_title").clear().type("Product Management");
          cy.get("body").click();
          cy.get("#jsk_location").select("Hồ Chí Minh");
          cy.get("#jsk_salary").clear().type("17000000");
          cy.get("#frmUpdateInfo").find("button").click();
        } else {
          cy.get("#upProfile").should("be.visible").click();
          cy.get("#jsk_title").clear().type("Database Management");
          cy.get(".autocomplete-suggestions").eq(0).click({force:true});
          cy.get("#jsk_location").select("Hà Nội");
          cy.get("#jsk_salary").clear().type("24000000");
          cy.get("#frmUpdateInfo").find("button").click();
        }
      });
    }
  }
  
  export const onWorkWithVietnamSalary = new workWithVietnamSalary();
  