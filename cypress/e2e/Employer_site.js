import { onNavigationPage } from "../support/page_objects_emp/Menu/navigationPage";
import { onLogin } from "../support/page_objects_emp/Menu/Login";
import { onWorkingOnDB } from "../support/page_objects_emp/Dashboard/WorkingOnDashBoard";
import { onWorkWithhManageJob } from "../support/page_objects_emp/Dashboard/WorkingWithManageJob";

describe("Employer Site", () => {
    beforeEach("open application", () => {
        cy.openHomePageEmp();
    });

    it("Navigation on header page", () => {
        onNavigationPage.ClickProductAndServicesPage();
        onNavigationPage.HiringSite();
        onNavigationPage.EmployerOfChoice()
        onNavigationPage.Contact();
    });

    it("Login employer then direct to dashboard page and take some action", () => {
        onLogin.LoginFunction("123", "123", "dingdong23996@gmail.com", "reborn2391996");
        // onWorkingOnDB.WorkingOnDashBoard();
    });

    it("Login employer then direct to postjob page and take some action", () => {
        onLogin.LoginFunction("123", "123", "dingdong23996@gmail.com", "reborn2391996");
        onWorkWithhManageJob.ClickManageJob();
        onWorkWithhManageJob.JobOnHiring(
          "Quality Assurance / Quality Control",
          "QAL123",
          "650", // option value location 4, 8, 76, 64, 781, 281, 240, 241, 75, 650, 651, 62, 78, 26, 71, 50, 1042, 511, 900, 1064, 61, 67, 59, 19, 351, 39, 320, 31, 780, 18, 321, 901, 58, 77, 60, 1069, 1070, 1071, 1072
          "1. Lập kế hoạch và chiến lược kiểm tra: \n Cộng tác với người quản lý dự án, nhà phát triển và các bên liên quan khác để hiểu yêu cầu của dự án và tạo kế hoạch kiểm tra toàn diện. \n Xác định mục tiêu, phạm vi và thời gian kiểm tra cho mỗi lần phát hành phần mềm. \n Phát triển các chiến lược thử nghiệm để đảm bảo phạm vi và hiệu quả thử nghiệm tối đa. \n 2. Thực hiện kiểm tra: \n Thực hiện nhiều loại thử nghiệm khác nhau, bao gồm thử nghiệm chức năng, hồi quy, tích hợp và hiệu suất. \n Thực hiện các trường hợp kiểm thử theo kế hoạch kiểm thử đã xác định và báo cáo mọi sai lệch hoặc khiếm khuyết được tìm thấy. \n Sử dụng các công cụ và tập lệnh kiểm tra tự động để hợp lý hóa các quy trình kiểm tra nếu có. \n Tiến hành thử nghiệm thăm dò để phát hiện các vấn đề không lường trước được và đảm bảo phạm vi thử nghiệm toàn diện.",
          "Tốt nghiệp Đại học chuyên ngành Khoa học Máy tính, Kỹ thuật phần mềm hoặc lĩnh vực liên quan. \n Có ít nhất 3 năm kinh nghiệm về kiểm soát chất lượng phần mềm hoặc kiểm tra phần mềm \n Kiến thức vững chắc về các phương pháp, công cụ và phương pháp kiểm thử phần mềm tốt nhất. \n Có khả năng viết kế hoạch kiểm thử và trường hợp kiểm thử rõ ràng, ngắn gọn và toàn diện. \n Có kinh nghiệm với các công cụ tự động hóa thử nghiệm và ngôn ngữ kịch bản (ví dụ: Selenium, Python, v.v.). \n Kỹ năng phân tích và giải quyết vấn đề xuất sắc với sự chú ý sâu sắc đến từng chi tiết. \n Kỹ năng giao tiếp hiệu quả, cả bằng lời nói và văn bản, cùng với khả năng cộng tác với các nhóm đa chức năng. \n Khả năng làm việc độc lập và ưu tiên các nhiệm vụ một cách hiệu quả trong môi trường có nhịp độ nhanh.",
          "https://www.youtube.com/watch?v=RDpcHAGZ0XI",
          "https://www.youtube.com/watch?v=M8qQTbUgRfc",
          "15,000,000",
          "25,000,000",
          "23", // From Age
          "1", // select Exp
          "2", // input Exp From
          "6", // input Exp To
          "3", // select Level_ID
          "3", // select Degree_ID
          "2 Months",
          "Monday To Friday: 8h30 - 17h30",
          "Learning skill from platform Udemy, Coursera",
          "Friendly, Leader Manager Nice",
          "Bonus Attractive 13th, Review Salary base on 6 month / year",
          "With company rule",
          "20 days / years"
        );
        onWorkWithhManageJob.JobOnPending(
              "Nhân viên dịch vụ khách hàng/ Customer Service Staff",
              "css-02",
              "650", // option value location 4, 8, 76, 64, 781, 281, 240, 241, 75, 650, 651, 62, 78, 26, 71, 50, 1042, 511, 900, 1064, 61, 67, 59, 19, 351, 39, 320, 31, 780, 18, 321, 901, 58, 77, 60, 1069, 1070, 1071, 1072
              "- Theo dõi mẫu, giao tiếp và làm việc tốt với các bộ phận liên quan.\n - Tư vấn và hỗ trợ khách hàng về sản phẩm của công ty \n - Quản lý thông tin khách hàng và cập nhật hồ sơ khách hàng \n - Xử lý các yêu cầu của khách hàng và giải quyết các vấn đề liên quan \n - Hỗ trợ hoạt động phát triển kinh doanh \n - Tham gia vào xây dựng và nâng cao quy trình chăm sóc khách hàng \n - Các công việc khác theo yêu cầu của Quản lý.",
              "- Trình độ: Tốt nghiệp Cao đẳng, Đại học trở lên các ngành Marketing, Kinh tế \n- Quản trị hoặc các ngành có liên quan. \n- Có kinh nghiệm 2 - 3 năm ở vị trí tương đương. \n- Giao tiếp Tiếng Anh thành thạo \n- Kỹ năng giao tiếp và phối hợp tốt với các bộ phận liên quan \n- Khả năng nắm bắt và xử lý tình huống tốt \n- Sử dụng vi tính văn phòng thành thạo \n- Có khả năng làm việc độc lập và làm việc nhóm tốt \n- Cẩn thận, chính xác và tỉ mỉ trong công việc",
              "25,000,000",
              "50,000,000",
              "23", // From Age
              "1", // select Exp
              "4", // input Exp From
              "7", // input Exp To
              "3", // select Level_ID
              "3", // select Degree_ID
        )
        onWorkWithhManageJob.JobOnInactive()
    });
});