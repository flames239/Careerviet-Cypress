import { onNavigationPage } from "../support/page_objects_jsk/Menu/navigationPage";
import { onEditCVProfile } from "../support/page_objects_jsk/Dashboard/EditCV";
import { onRegisterUser } from "../support/page_objects_jsk/Menu/Register_Account";
import { onEditCVTemplate } from "../support/page_objects_jsk/Dashboard/EditCVTemplate";
import { onLogin } from "../support/page_objects_jsk/Menu/Login";
import { onMyJob } from "../support/page_objects_jsk/Dashboard/MyJob";
import { onJobAlert } from "../support/page_objects_jsk/Dashboard/JobAlert";
import { onDashboardMyEmployers } from "../support/page_objects_jsk/Dashboard/MyEmployers";
import { onAllNotifications } from "../support/page_objects_jsk/Dashboard/AllNotification";
import { onSetting } from "../support/page_objects_jsk/Dashboard/Setting";
import { onWorkWithVietnamSalary } from "../support/page_objects_jsk/VietnamSalary/WorkwithVS";
import { onWorkWithCareerMap } from "../support/page_objects_jsk/Careermap/WorkwithCM";
import { onWorkWithTC } from "../support/page_objects_jsk/TalentCommunity/WorkwithTalentCommunity";
import { onWorkWithUltilities } from "../support/page_objects_jsk/Ultilities/SalaryCalculator";

describe("Jobseekers Site", () => {
  beforeEach("open application", () => {
    cy.openHomePage()
  });

  // it("Register Account", () => {
  //   onRegisterUser.Register_Function(
  //     "Hoang",
  //     "Ngô",
  //     "ngohoang123@yopmail.com",
  //     "987654321",
  //     "987654321"
  //   );
  // });

  it.only("Login then Click CV Profile", () => {
    onLogin.LoginFunction(
      "ngohoang123@yopmail.com",
      "123",
      "ngohoang123@yopmail.com",
      "987654321"
    )
    onLogin.SkipTutorFunc()
    onEditCVProfile.TitleResume("Automation Tester");
    //onEditCVProfile.PersonalInfo("Hà Thế Linh","Chi","15","08","1992","0461234567","Nguyễn Văn Khối");
    onEditCVProfile.CareerInfo()
    onEditCVProfile.Education("Cao Đẳng Kỹ Thuật Cao Thắng", "Chuyên ngành ứng dụng phần mềm \n + học về lập trình cơ bản dùng ngôn ngữ C, Java \n + Học về kiểm thử phần mềm và quy trình phát triển phần mềm")
    onEditCVProfile.WorkExperience("Chuyên viên hạ tầng mạng", "Công ty laboratory associated with Global", 
    "Main Responsibility: \n + Development support \n + Support maintenance and update server when neccessary \n + Other task activity from manager")
    onEditCVProfile.Languages("TOEIC: 650")
    onEditCVProfile.Skills("Critical Thinking","")
    onEditCVProfile.OtherCertificate("ISTQB","ISTQB Belgium","21","02","2020","24","06","2029")

  });

  // it("Login then Click Edit CV Template", () => {
  //   onLogin.LoginFunction(
  //     "ngohoang123@yopmail.com",
  //     "123",
  //     "ngohoang123@yopmail.com",
  //     "987654321"
  //   );
  //   onLogin.SkipTutorFunc();
  //   onEditCVTemplate.Login_EditTemplate();
  // });

  // it("Login then click My Job", () => {
  //   onLogin.LoginFunction(
  //     "ngohoang123@yopmail.com",
  //     "123",
  //     "ngohoang123@yopmail.com",
  //     "987654321"
  //   );
  //   onLogin.SkipTutorFunc();
  //   onMyJob.ClickMyJob();
  // });

  // it("Login then Click Job Alert", () => {
  //   onLogin.LoginFunction(
  //     "ngohoang123@yopmail.com",
  //     "123",
  //     "ngohoang123@yopmail.com",
  //     "987654321"
  //   );
  //   onLogin.SkipTutorFunc();
  //   onJobAlert.clickJobAlert();
  // });

  // it("Login then Click My Employers", () => {
  //   onLogin.LoginFunction(
  //     "ngohoang123@yopmail.com",
  //     "123",
  //     "ngohoang123@yopmail.com",
  //     "987654321"
  //   );
  //   onLogin.SkipTutorFunc();
  //   onDashboardMyEmployers.MyEmployersFunction();
  // });

  // it("Login then Click All Notification", () => {
  //   onLogin.LoginFunction(
  //     "ngohoang123@yopmail.com",
  //     "123",
  //     "ngohoang123@yopmail.com",
  //     "987654321"
  //   );
  //   onLogin.SkipTutorFunc();
  //   onAllNotifications.AllEmployersFunction();
  // });

  // it("Login then Click Setting", () => {
  //   onLogin.LoginFunction(
  //     "ngohoang123@yopmail.com",
  //     "123",
  //     "ngohoang123@yopmail.com",
  //     "987654321"
  //   );
  //   onLogin.SkipTutorFunc();
  //   onSetting.SettingFunc();
  // });

  // {} if some test case add {} it mean we add a flag => reason: when run this test. cypress will skip the browser we setup
  it("Click Vietnamsalary", () => {
    onNavigationPage.VietNamSalary();
    // onWorkWithVietnamSalary.SearchRangeSalary('Tester','Hà Nội','17000000','2')
    // onWorkWithVietnamSalary.BlogPages()
    // onWorkWithVietnamSalary.Compound_Interest('13605303','8000000','3','6,5')
    // onWorkWithVietnamSalary.Saving_plan('13605303','8000000','3','5')
    onWorkWithVietnamSalary.Login_ClickProfileVNS();
  });

  it("Click Careermap then take some action", () => {
    onNavigationPage.CareerMap();
    onWorkWithCareerMap.CareerMapNotGraduateForm_NotLogin("Manual Tester");
  });

  it("Click TalentCommunity then take some action", () => {
    onNavigationPage.TalentCommunity();
    onWorkWithTC.WorkWithTalentCommunity();
    onWorkWithTC.SearchJobInDetailBlog();
  });

  it("Click Ultilities then take some action", () => {
    // onNavigationPage.UltilitiesSalaryCalculator();
    // onWorkWithUltilities.SalaryCalculator('18000000','0');
    onNavigationPage.UltilitiesTestDISC()
  });
});
