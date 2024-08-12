export class Login {
    LoginFunction(wrongEmail, wrongPass, validEmail, validPass) {
        // click login form on homepage
        cy.get(".right-wrap").contains("Đăng nhập").click();

        // input value on the form login
        cy.get('input[placeholder="Email hoặc Tên đăng nhập"]')
            .clear()
            .type(wrongEmail)
            .should('have.value', `${wrongEmail}`)
        cy.get('input[placeholder="Mật khẩu"]').clear().type(wrongPass).should('have.value', `${wrongPass}`);
        cy.get("#header_login").contains("Đăng nhập").click();

        // popup error appear
        cy.get('[class="remove-modal fancybox-content"]')
            .contains("Đóng")
            .should("be.visible")
            .click();

        // transfer data in form login again
        cy.get("#username").should("be.visible").clear().type(validEmail).should('have.value', `${validEmail}`)
        cy.get("#password").should("be.visible").clear().type(validPass).should('have.value', `${validPass}`)
        cy.get("#submit_login").should("be.visible").click({ force: true });
    }
    SkipTutorFunc() {
        // skip popup tutorial
        cy.get("#welcome-to").contains("Bỏ qua").should("be.visible").click();
    }
}

export const onLogin = new Login();