import { onNavigationPage } from "../support/page_objects_jsk/Menu/navigationPage"
import { onEditCVProfile } from "../support/page_objects_jsk/Dashboard/EditCV"
import { onRegisterUser } from "../support/page_objects_jsk/Menu/Register_Account"
import { onEditCVTemplate } from "../support/page_objects_jsk/Dashboard/EditCVTemplate"
import { onLogin } from "../support/page_objects_jsk/Menu/Login"

describe('Jobseekers Site', () => {
    beforeEach('open application', () => {
        cy.visit('/')
    })

    it('verify navigation across the page', () => {
        onNavigationPage.TalentCommunity()
        onNavigationPage.Ultilities()
    })

    it('Login then Click CV Profile', () => {
        // onLoginThenEditCV.LoginThenEditCV()
        onLogin.LoginFunction()
        onEditCVProfile.EditCVProfile()
    })

    it('Register Account', () => {
        onRegisterUser.Register_Function()
    })

    it.only('Login then Click Edit CV Template', () => {
        onLogin.LoginFunction()
        onLogin.SkipTutorFunc()
        onEditCVTemplate.Login_EditTemplate()
    })


})