export class Register_User {

    // Flow: Login Then Click Edit CV Profile
    Register_Function(lastName, firstName, email, passord, confirmPassword) {
        // click register on header homepage 
        cy.get('.right-wrap .main-register').contains('Đăng ký').click();

        // input value on the form
        cy.get('#firstname').clear().type(lastName).should('have.value',`${lastName}`)
        cy.get('#lastname').clear().type(firstName).should('have.value',`${firstName}`)
        if(cy.get(''))

        cy.get('#email').clear().type(email).should('have.value',`${email}`)
        cy.get('#password').clear().type(passord).should('have.value',`${passord}`)
        cy.get('#confirm_password').clear().type(confirmPassword).should('have.value',`${confirmPassword}`)
        cy.get('#chkAgree').click({ force: true })
        cy.get('.btn-gradient').contains('Đăng ký').click()
    }

}

export const onRegisterUser = new Register_User();