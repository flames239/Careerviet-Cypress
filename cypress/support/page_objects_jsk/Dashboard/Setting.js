export class Setting {
    ClickSetting() {
        cy.get('nav[class="side-navbar"] ul[class="list-unstyled"] li')
            .find('a')
            .eq(14)
            .should("contain", "Cài đặt")
            .click({ force: true });
    }

    // ChangePassword(oldPass, newPass, confirmPass) {
    //     cy.get('ul[class="list-unstyled collapse"] li a').contains("Tài Khoản").click();
    
    //     // input form change password
    //     cy.get('#old_password').clear().type(`${oldPass}`).should('have.value',`${oldPass}`)
    //     cy.get('#new_password').clear().type(`${newPass}`).should('have.value',`${newPass}`)
    //     cy.get('#confirm_password').clear().type(`${confirmPass}`).should('have.value',`${confirmPass}`)
    //     cy.get('#frmPassowrd button[type="submit"]').click()
    //     cy.get('div[class="success-modal fancybox-content"]').should("be.visible");
    // }

    SettingNotification() {
        cy.get('ul[class="list-unstyled collapse"] li a').contains("Cài Đặt Thông Báo").click();
    }
}

export const onSetting = new Setting();