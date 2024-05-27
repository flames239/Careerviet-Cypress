import { onNavigationPage } from "../support/page_objects_emp/Menu/navigationPage";
import { onLogin } from "../support/page_objects_emp/Menu/Login";
import { onWorkingOnDB } from "../support/page_objects_emp/Dashboard/WorkingOnDashBoard";
import { onManagementJob } from "../support/page_objects_emp/Dashboard/WorkingWithManageJob";



describe("Employer Site", () => {
    beforeEach("open application", () => {
        cy.openHomePageEmp()
    });

    it('Navigation on header page', () => {
        onNavigationPage.ClickProductAndServicesPage()
        onNavigationPage.HiringSite()
        //onNavigationPage.EmployerOfChoice()
        onNavigationPage.Contact()
    })

    it('Login employer then direct to dashboard page and take some action on dashboard page', () => {
        onLogin.LoginFunction('123', '123', 'dingdong23996@gmail.com', 'reborn2391996')
        onWorkingOnDB.WorkingOnDashBoardPage()
    })

    it.only('Login employer then direct to dashboard page and take some action on dashboard page', () => {
        onLogin.LoginFunction('123', '123', 'dingdong23996@gmail.com', 'reborn2391996')
        
        onManagementJob.PostsJobForm('Nhan Vien Kiem Tra Chat Luong / Truong Phong QA')
    })

});
