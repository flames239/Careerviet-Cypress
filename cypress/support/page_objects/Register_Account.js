function Register_Account() {
    // click register on header homepage 
    cy.get('.right-wrap .main-register').contains('Đăng ký').click();

    // input value on the form
    cy.get('#firstname').clear().type('My').first().focus()
    cy.get('#lastname').clear().type('Hồ Lê Quý')
    cy.get('#email').clear().type('quymy_m@yopmail.com')
    cy.get('#password').clear().type('123456')
    cy.get('#confirm_password').clear().type('123456')
    cy.get('#chkAgree').click({force:true})
    cy.get('.btn-gradient').contains('Đăng ký').click()
}
   
   
   
export class Register_User {

    // Flow: Login Then Click Edit CV Profile
    Register_Function() {   
        Register_Account()
    }
   
}
   
export const onRegisterUser = new Register_User();