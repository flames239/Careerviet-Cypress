import {onNavigationPage} from "../support/page_objects/navigationPage"
import {onLoginThenEditCV} from "../support/page_objects/Login_EditCV"
import {onRegisterUser} from "../support/page_objects/Register_Account"


/// <reference types="cypress" />
describe('Jobseekers Site',() => {
    
    beforeEach('open application', () => {
        cy.visit('/')
    })

    it('verify navigation across the page', () => {
        onNavigationPage.TalentCommunity()
        onNavigationPage.Ultilities()
    })

    it.only('Login then Edit CV Profile', () => {
        // onLoginThenEditCV.LoginThenEditCV()
        onLoginThenEditCV.LoginFalse_LoginAgain()

    })

    it('Register Account', () => {
        onRegisterUser.Register_Function()
    })
})