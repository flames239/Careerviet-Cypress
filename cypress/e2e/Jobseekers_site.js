import { onNavigationPage } from "../support/page_objects_jsk/Menu/navigationPage"
import { onEditCVProfile } from "../support/page_objects_jsk/Dashboard/EditCV"
import { onRegisterUser } from "../support/page_objects_jsk/Menu/Register_Account"
import { onEditCVTemplate } from "../support/page_objects_jsk/Dashboard/EditCVTemplate"
import { onLogin } from "../support/page_objects_jsk/Menu/Login"
import { onMyJob } from "../support/page_objects_jsk/Dashboard/MyJob"
import { onJobAlert } from "../support/page_objects_jsk/Dashboard/JobAlert"
import { onDashboardMyEmployers } from "../support/page_objects_jsk/Dashboard/MyEmployers"
import { onAllNotifications } from "../support/page_objects_jsk/Dashboard/AllNotification"
import { onSetting } from "../support/page_objects_jsk/Dashboard/Setting"



describe('Jobseekers Site', () => {
    beforeEach('open application', () => {
        cy.openHomePage()
    })

    it('verify navigation across the page', () => {
        onNavigationPage.TalentCommunity()
        onNavigationPage.Ultilities()
    })

    it('Login then Click CV Profile', () => {
        // onLoginThenEditCV.LoginThenEditCV()
        onLogin.LoginFunction("quymy_m@yopmail.com", "123", "quymy_m@yopmail.com", "987654321")
        onEditCVProfile.EditCVProfile()
    })

    it('Register Account', () => {
        onRegisterUser.Register_Function("Trang","Luong Cao","lct123@yopmail.com","987654321","9878654321")
    })

    it('Login then Click Edit CV Template', () => {
        onLogin.LoginFunction("quymy_m@yopmail.com", "123", "quymy_m@yopmail.com", "987654321")
        onLogin.SkipTutorFunc()
        onEditCVTemplate.Login_EditTemplate()
    })

    it('Login then click My Job', () => {
        onLogin.LoginFunction("quymy_m@yopmail.com", "123", "quymy_m@yopmail.com", "987654321")
        onMyJob.ClickMyJob()
    })

    it('Login then Click Job Alert', () => {
        onLogin.LoginFunction("quymy_m@yopmail.com", "123", "quymy_m@yopmail.com", "987654321")
        onLogin.SkipTutorFunc()
        onJobAlert.clickJobAlert()
    })

    it('Login then Click My Employers', () => {
        onLogin.LoginFunction("quymy_m@yopmail.com", "123", "quymy_m@yopmail.com", "987654321")
        onLogin.SkipTutorFunc()
        onDashboardMyEmployers.MyEmployersFunction()
    })

    it('Login then Click All Notification', () => {
        onLogin.LoginFunction("quymy_m@yopmail.com", "123", "quymy_m@yopmail.com", "987654321")
        onLogin.SkipTutorFunc()
        onAllNotifications.AllEmployersFunction()
    })

    it.only('Login then Click Setting', () => {
        onLogin.LoginFunction("quymy_m@yopmail.com", "123", "quymy_m@yopmail.com", "987654321")
        onLogin.SkipTutorFunc()
        onSetting.SettingFunc()
    })





})