function ClickSetting() {
    cy.get('nav[class="side-navbar"] ul[class="list-unstyled"] li')
        .find('a')
        .eq(14)
        .should("contain", "Cài đặt")
        .click({ force: true });
}

function ChangePassword() {
    cy.get('ul[class="list-unstyled collapse"] li a').contains("Tài Khoản").click();

    // input form change password
    cy.get('#old_password').clear().type('abc@123')
    cy.get('#new_password').clear().type('987654321')
    cy.get('#confirm_password').clear().type('987654321')
    cy.get('#frmPassowrd button[type="submit"]').click()
    cy.get('div[class="success-modal fancybox-content"]').should("be.visible");
}

function SettingNotification() {
    cy.get('ul[class="list-unstyled collapse"] li a').contains("Cài Đặt Thông Báo").click();
}

export class Setting {
    SettingFunc() {
        ClickSetting();
        ChangePassword()
    }
}

export const onSetting = new Setting();