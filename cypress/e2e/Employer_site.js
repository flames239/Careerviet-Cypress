import { onNavigationPage } from "../support/page_objects_emp/Menu/navigationPage";
import { onLogin } from "../support/page_objects_emp/Menu/Login";
import { onWorkingOnDB } from "../support/page_objects_emp/Dashboard/WorkingOnDashBoard";
import { onWorkWithhManageJob } from "../support/page_objects_emp/Dashboard/WorkingWithManageJob";



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
        onWorkWithhManageJob.ClickManageJob()
        onWorkWithhManageJob.JobOnHiring('Nhan Vien Kiem Tra Chat Luong / Truong Phong QA',
            'QAL123',
            '650',
            'Input your text here',
            'Input your text here',
            'https://www.youtube.com/watch?v=RDpcHAGZ0XI',
            'https://www.youtube.com/watch?v=M8qQTbUgRfc',
            '15,000,000',
            '25,000,000',
            '30', // day received CV
            '23', // From Age
            '1',  // select Exp
            '2', // input Exp From
            '6', // input Exp To 
            '3', // select Level_ID
            '3', // select Degree_ID
            '2 Months',
            'Monday To Friday: 8h30 - 17h30',
            'Learning skill from platform Udemy, Coursera',
            'Friendly, Leader Manager Nice',
            'Bonus Attractive 13th, Review Salary base on 6 month / year',
            'With company rule',
            '20 days / years')
    })

});
