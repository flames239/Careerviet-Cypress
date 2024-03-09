export class Register_User {

    // Flow: Login Then Click Edit CV Profile
    Register_Function(lastName, firstName, email, passord, confirmPassword) {
        // click register on header homepage 
        cy.get('.right-wrap .main-register').contains('Đăng ký').click();

        // input value on the form
        cy.get('#firstname').clear().type(lastName).first().focus()
        cy.get('#lastname').clear().type(firstName)
        cy.get('#email').clear().type(email)
        cy.get('#password').clear().type(passord)
        cy.get('#confirm_password').clear().type(confirmPassword)
        cy.get('#chkAgree').click({ force: true })
        cy.get('.btn-gradient').contains('Đăng ký').click()
    }

}

export const onRegisterUser = new Register_User();