import { onNavigationPage } from "../support/page_objects_jsk/Menu/navigationPage"
import { onEditCVProfile } from "../support/page_objects_jsk/Dashboard/EditCV"
import { onRegisterUser } from "../support/page_objects_jsk/Menu/Register_Account"
import { onEditCVTemplate } from "../support/page_objects_jsk/Dashboard/EditCVTemplate"
import { onLogin } from "../support/page_objects_jsk/Menu/Login"
import { onMyJob } from "../support/page_objects_jsk/Dashboard/MyJob"
import { onJobAlert } from "../support/page_objects_jsk/Dashboard/JobAlert"


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

    it('Login then Click Edit CV Template', () => {
        onLogin.LoginFunction()
        onLogin.SkipTutorFunc()
        onEditCVTemplate.Login_EditTemplate()
    })

    it('Login then click My Job', () => {
        onLogin.LoginFunction()
        onMyJob.ClickMyJob()
    })

    it.only('Login then Click Job Alert', () => {
        onLogin.LoginFunction()
        onLogin.SkipTutorFunc()
        onJobAlert.clickJobAlert()
    })

})