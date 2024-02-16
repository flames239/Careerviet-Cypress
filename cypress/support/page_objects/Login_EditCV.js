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

    // Create or edit CV Profile
    // Title Resume
    cy.get('#t-resume-section a').click()
    cy.get('#resume_title').should('be.visible').clear().type('Fresher Automation Tester')
    cy.get('#t-resume-form').find('.btn-gradient').should('contain', 'Lưu Lại').click()


    // Objective (Muc tieu nghe nghiep) Optional


    // Career Information (Thông tin nghề nghiệp)
    cy.get('#widget-18 a').should('be.visible').click(); // click on edit button
    // popup form appearance

    // worktype (Hình Thức Làm Việc)
    cy.get('#chkResumeType_1').click({ force: true });
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
    cy.get('#INDUSTRY_ID_chosen').contains('CNTT / Phần mềm').click({ ctrlKey: true })
    cy.get('#INDUSTRY_ID_chosen').contains('Quản lý chất lượng (QA/QC)').click({ ctrlKey: true })

    // After selecting the options, click outside the dropdown to close it
    cy.get('body').click({ force: true })

    cy.get('#select_location_id_3').select('Hồ Chí Minh'); // Expected WOrk location
    cy.get('#desired-form').contains('Thêm').click(); // Optional add more desired locations work place
    cy.get('#select_location_id_1').select('Đà Nẵng');

    cy.get('#desired-form button.btn-gradient').click();

    // Click on form Experience
    cy.get('#widget-15').find('span').contains('Thêm mới').click()









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

export class Login_EditCV {

    // Flow: Login Then Click Edit CV Profile
    LoginThenEditCV() {
        // LoginAndEditCV()
    }

    LoginFalse_LoginAgain() {
        LoginFalseAndLoginAgain()
    }
}

export const onLoginThenEditCV = new Login_EditCV();