export class WorkWithCareerMap {
    CareerMapNotGraduateForm_NotLogin(titleJob) {
      cy.get("#image_wrapper")
        .find('ul li[data-careermap-id="1"] a')
        .should("be.visible")
        .click();
  
      // input form Not Graduate
      cy.get("#industry_id").select("CNTT - Phần mềm");
      
      // handle with autosuggestions
      cy.get('#keyword')
        .clear()
        .type(`${titleJob}`)
        .parents('body')
        .find('.autocomplete-suggestions')
        .eq(0)
        .click()
      cy.get("#location_id").select("Hồ Chí Minh").focus()
      cy.get("#yoursalary").select("Từ 20.000.000").focus()
      cy.get("#environment_id").select("Doanh nghiệp hàng đầu").focus()
      cy.get("#day").select("19").focus()
      cy.get("#month").select("8").focus()
      cy.get("#year").select("1994").focus()
      cy.get("#btnResult").click()
      Cypress.on("uncaught:exception", (err, runnable) => {
        return false;
      });
  
      // after submit form successfully -> direct to page detail Careermap -> popup form show, input some infomation then submit again
      cy.get('#careermap_email').clear().type('abc@abc-example.com').focus().should('have.value','abc@abc-example.com')
      cy.get('#careermap_fullname').clear().type('Hồ Tiểu Lý Phi Dao').focus().should('have.value','Hồ Tiểu Lý Phi Dao')
      cy.get('#chkAgree').click({ force: true })
      cy.get('#btnInupEmail').click()
    }
  }
  
  export const onWorkWithCareerMap = new WorkWithCareerMap();
  