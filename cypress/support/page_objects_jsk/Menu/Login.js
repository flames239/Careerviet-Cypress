function LoginFalseAndLoginAgain() {
    // click login form on homepage
    cy.get(".right-wrap").contains("Đăng nhập").click();

    // input value on the form login
    cy.get('input[placeholder="Email hoặc Tên đăng nhập"]')
        .clear()
        .type("quymy_m@yopmail.com")
        .focus()
        .first();
    cy.get('input[placeholder="Mật khẩu"]').clear().type("123");
    cy.get("#header_login").contains("Đăng nhập").click();

    // popup error appear
    cy.get('[class="remove-modal fancybox-content"]')
        .contains("Đóng")
        .should("be.visible")
        .click();

    // transfer data in form login again
    cy.get("#username").should("be.visible").clear().type("quymy_m@yopmail.com");
    cy.get("#password").should("be.visible").clear().type("987654321");
    cy.get("#submit_login").should("be.visible").click({ force: true });
}

function SkipTutorial() {
    // skip popup tutorial
    cy.get("#welcome-to").contains("Bỏ qua").should("be.visible").click();
}

export class Login {
    LoginFunction() {
        LoginFalseAndLoginAgain();
    }
    SkipTutorFunc() {
        SkipTutorial();
    }
}

export const onLogin = new Login();
