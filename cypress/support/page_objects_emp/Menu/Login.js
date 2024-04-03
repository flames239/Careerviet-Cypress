export class Login {
    LoginFunction(wrongEmail, wrongPass, validEmail, validPass) {
      // click login form on homepage
      cy.get(".right-wrap").contains("Đăng nhập").click()
  
      // input value on the form login
      cy.get('#username_box')
        .clear()
        .type(wrongEmail)
        .should('have.value',wrongEmail)
        .first()
      cy.get('#password_box').clear().type(wrongPass).should('have.value',wrongPass)
      cy.get("#frm_login_header").contains("Đăng nhập").click()
  
      // transfer data in form login again
      cy.get('input[name="username"]').eq(1).clear().type(validEmail).should('have.value',validEmail)
      cy.get('input[name="password"]').eq(1).clear().type(validPass).should('have.value',validPass)
      cy.get("#frmLogin button").should("be.visible").contains("Đăng nhập").click({ force: true })
    }
  }
  
  export const onLogin = new Login();
  