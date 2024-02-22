function LoginAndEditCV() {
    // click login form on homepage 
    cy.get('.right-wrap').contains('Đăng nhập').click();

    // input value on the form login
    cy.get('input[placeholder="Email hoặc Tên đăng nhập"]').clear().type('quymy_m@yopmail.com')
    cy.get('input[placeholder="Mật khẩu"]').clear().type('987654321')
    cy.get('#header_login').contains('Đăng nhập').click();

    // skip popup tutorial
    cy.get('#welcome-to').contains('Bỏ qua').should('be.visible').click()

    // click Careerviet Profile on Dashboard
    cy.get('.side-navbar').contains('Hồ sơ CareerViet').should('be.visible').click()
}


function LoginFalseAndLoginAgain() {
    // click login form on homepage 
    cy.get('.right-wrap').contains('Đăng nhập').click();

    // input value on the form login
    cy.get('input[placeholder="Email hoặc Tên đăng nhập"]').clear().type('quymy_m@yopmail.com').focus().first()
    cy.get('input[placeholder="Mật khẩu"]').clear().type('123')
    cy.get('#header_login').contains('Đăng nhập').click();

    // popup error appear 
    cy.get('[class="remove-modal fancybox-content"]').contains('Đóng').should('be.visible').click();

    // transfer data in form login again
    cy.get('#username').should('be.visible').clear().type('quymy_m@yopmail.com')
    cy.get('#password').should('be.visible').clear().type('987654321')
    cy.get('#submit_login').should('be.visible').click({ force: true })

    // skip popup tutorial
    cy.get('#welcome-to').contains('Bỏ qua').should('be.visible').click()

    // click Careerviet Profile on Dashboard
    cy.get('.list-unstyled').contains('Hồ sơ CareerViet').click({ force: true })

    // skip popup shared profile
    cy.get('[class="container-ckb"]').click()
    cy.get('#popup-modal').contains('Đóng').should('be.visible').click()

    // Objective (Muc tieu nghe nghiep) Optional
}

function TitleResume() {
    // Title Resume
    cy.get('#t-resume-section a').click()
    cy.get('#resume_title').should('be.visible').clear().type('Fresher Automation Tester')
    cy.get('#t-resume-form').find('.btn-gradient').should('contain', 'Lưu Lại').click()
}

function PersonalInfo() {
    // Personal Information
    cy.get('#personalinfo-section a').click();
    cy.get('#lastname').clear().type('Hồ Quý Phương'); // last name
    cy.get('#firstname').clear().type('Ly'); // first name
    cy.get('#gender_f').click({ force: true }); // gender

    cy.get('[name="birthday"]').click(); // choose birthday
    // declare variables for increment and decrement buttons for birthdays

    for (var i = 0; i < 2; i++) {
        cy.get('.dtpicker-content')
            .find('a[class="dtpicker-compButton increment dtpicker-compButtonEnable"]')
            .eq(0)
            .click();
        cy.get('.dtpicker-content')
            .find('a[class="dtpicker-compButton decrement dtpicker-compButtonEnable"]')
            .eq(1)
            .click();
        cy.get('.dtpicker-content')
            .find('a[class="dtpicker-compButton decrement dtpicker-compButtonEnable"]')
            .eq(2)
            .click();
    }

    cy.get('.dtpicker-content')
        .find('a[class="dtpicker-button dtpicker-buttonSet"]')
        .click();

    cy.get('#mobile').clear().type('0984561987'); // Mobile
    cy.get('#slnationality').select('Người Việt Nam'); // Nationallity
    cy.get('#slcountry').select('Việt Nam'); // International
    cy.get('#slcity').select("Hà Nội"); // Country
    cy.get('#sldistrict').select("Quận Hoàng Mai"); // District
    cy.get('input[name="address"]').clear().type('123 Ly Thuong Kiet'); // Address

    // Click the "Lưu lại" button using contains() method with a more specific selector
    cy.get('form#personalInfoForm button[type="button"]').click();

    // close popup cause after clicking save but the popup form not closed
    cy.get('button[class="fancybox-button fancybox-close-small"]').click()
}

function CareerInfo() {
    // Career Information (Thông tin nghề nghiệp)
    cy.get('#widget-18 a').should('be.visible').click(); // click on edit button
    // popup form appearance

    // worktype (Hình Thức Làm Việc)
    //cy.get('#chkResumeType_1').click({ force: true });
    cy.get('#chkWorkHome').click({ force: true });  // Flexible work (Phương thức làm việc WFH) - Not Required

    cy.get('[name="level_id"]').select('Nhân viên'); // Level ID (Cấp bậc mong muốn)
    cy.get('#salary_unit').select('USD');
    cy.get('#salary_from').clear().type('800');
    cy.get('#salary_to').clear().type('1000');
    //cy.get('#salary_unit').select('Thỏa thuận'); // Expected Salary 
    //cy.get('#salary_unit').select('VNĐ');

    // Click on the dropdown to open it
    cy.get('#INDUSTRY_ID_chosen').click()

    // Click on the options while holding the Ctrl (or Command) key
    if (cy.get('#INDUSTRY_ID_chosen') === 0) {
        cy.get('#INDUSTRY_ID_chosen').contains('CNTT / Phần mềm').click({ ctrlKey: true })
        cy.get('#INDUSTRY_ID_chosen').contains('Quản lý chất lượng (QA/QC)').click({ ctrlKey: true })

        // After selecting the options, click outside the dropdown to close it
        cy.get('body').click({ force: true })
    } else {
        cy.get('[class="search-choice"] a[class="search-choice-close"]').eq(0).click()
        cy.get('#INDUSTRY_ID_chosen').click()
        cy.get('#INDUSTRY_ID_chosen').contains('Bán lẻ / Bán sỉ').click({ ctrlKey: true })

        // After selecting the options, click outside the dropdown to close it 
        cy.get('body').click({ force: true })
    }

    cy.get('#select_location_id_3').select('Thái Nguyên'); // Expected Work location
    //cy.get('#desired-form').contains('Thêm').click(); // Optional add more desired locations work place
    cy.get('#select_location_id_1').select('Hà Nam');

    cy.get('#desired-form button.btn-gradient').click();
}

function WorkExperience() {
    /**
     * Edit Number of Experience and Current Level
     * Split into 2 case
     * 
     * Case 1: Doesn't Experience and edit Current Level (Popup form will appear)
    */
    cy.get('#widget-15 table td div[class="link-edit"]').eq(0).click()
    cy.get(('#widget-15 table td div[class="link-edit"]')).should('be.visible')
    cy.get('#levelcurrent_id').select('Nhân viên')
    cy.get('#frm_Experience .form-button .button-save').click()

    /**
     * Edit Number of Experience and Current Level
     * Split into 2 case
     * 
     * Case 2: Have Experience and edit Current Level (Popup form will appear)
    */
    cy.get('#widget-15 table td div[class="link-edit"]').eq(0).click()
    cy.get('.no-exp-yet').click({ force: true })
    cy.get('#yearOfExperience').clear().type('2')
    cy.get(('#widget-15 table td div[class="link-edit"]')).should('be.visible')
    cy.get('#levelcurrent_id').select('Nhân viên')
    cy.get('#frm_Experience .form-button .button-save').click()

    // Click on form Experience
    cy.get('#widget-15').find('span').contains('Thêm mới').click()

    cy.get('[name="rexp_title"]').clear().type("Quality Control Engineer") // Title - Vị trí / Chức Danh
    cy.get('[name="rexp_company"]').clear().type("CJ Entertainment") // Company - Công ty

    cy.get('[name="rexp_worktype"]').select("Nhân viên chính thức")// Work Permanent - Phuong Thuc Cong Viec
    cy.wait(2000)
    cy.get('#widget-15').click({ force: true }) // click outside list dropdown list suggestion data

    //  Thoi gian lam viec - Start Date
    cy.get('#job_startdate').click()
    cy.get('.datepicker-months .table-condensed').find('th[class="prev"]').eq(0).click()
    cy.get('.datepicker-months .table-condensed').eq(0).find('span[class="month"]').contains("Th1").click()
    // End Date
    cy.get('#job_enddate').click()
    cy.get('.datepicker-months .table-condensed').eq(1).find('span[class="month"]').contains("Th1").click()

    // Description
    cy.get('[name="rexp_workdesc"]').clear().type('Project: myLocal.vn\n Description: a super app to support end-user activation SIM, update information, change eSIM, change physical SIM and many function into this app meeting end-user needs for a typical telecom operator.\n Domain: Telecom \nPosition: Core Member Quality Control \nTeam Size: 10 personsMy Responsibilities: Join Grooming,Testcases Writing, Execute Test, Test Report Daily, Demo to Stakeholder, QC UAT, Join Runbook.')

    // Save
    cy.get('#experience-form .button-save .btn-gradient').contains('Lưu Lại').click()
}

function Education() {
    // Select Highest Degree
    cy.get('#widget-16 table td div[class="link-edit link-highest-degree"]').should('be.visible').click()
    cy.get('#degree').select('Cao đẳng')
    cy.get('#widget-16 table td div[class="link-save"]').click()
    cy.wait(2000)
    cy.get('#cbprofile_degree_name').should('be.visible')

    // click to show popup form education
    cy.get('#widget-16 div[class="link-add"]').contains('Thêm mới').should('be.visible').click();

    // input data in the education form
    cy.get('#redu_name').clear().type('Cao đẳng thực hành FPT Polytechnic') // Name University or College
    cy.get('#redu_degree').select('Cao đẳng') // Degree    
    // Date of Graduation (Optional)
    cy.get('#redu_date').click()
    cy.get('.table-condensed').find('tbody tr td span[class="month"]').contains('Th9').click()

    // Description (Optional)
    cy.get('#redu_desc').clear().type('Học Ứng Dụng Phần Mềm Bao Gồm: \n + Quản lý dự án với Agile/Scrum \n + Cơ sở dữ liệu với MySQL, SQL Server \n + Ngôn ngữ lập trình: Java \n + Kiểm thử cơ bản và Kiểm thử nâng cao')

    cy.get('#education-form .form-group button[class="btn-gradient"]').contains('Lưu Lại').click() //  Save Form Education

    // Verify if the education form has been save is successful save and show 
    cy.get('#widget-16 .head-sticker').should('be.visible');
}

function Languages() {
    cy.get("#language-section .link-add-lang a").click(); // open form Skills

    cy.get('[name="rs_language"]').select("Anh"); // choose Languages

    cy.get('.range-labels li[id="level_4"]').click(); // Click range labels

    cy.get('[name="rs_language_certify"]').clear().type("TOEIC 660"); // description

    cy.get('#language-form .button-save button[class="btn-gradient"]').click(); // save
}

// Kỹ năng chuyên môn
function Skills() { }

// Thành tích nổi bật (Optional)
function Highlight() { }

// Hoạt động khác (Optional)
function OtherActivity() { }

// Người tham khảo (Optional)
function Reference() { }


export class Login_EditCV {

    // Flow: Login Then Click Edit CV Profile
    LoginThenEditCV() {
        // LoginAndEditCV()
    }

    LoginFalse_LoginAgain() {
        LoginFalseAndLoginAgain()
        WorkExperience()
    }
}

export const onLoginThenEditCV = new Login_EditCV();