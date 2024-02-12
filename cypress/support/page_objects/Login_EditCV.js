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
    cy.get('#submit_login').should('be.visible').click({force:true})


    // skip popup tutorial
    cy.get('#welcome-to').contains('Bỏ qua').should('be.visible').click()
    
    // click Careerviet Profile on Dashboard
    cy.get('.list-unstyled').contains('Hồ sơ CareerViet').click({force:true})

    // skip popup shared profile
    cy.get('[class="container-ckb"]').click()
    cy.get('#popup-modal').contains('Đóng').should('be.visible').click()

    // Create or edit CV Profile
    // Title Resume
    cy.get('#t-resume-section').contains('Chỉnh sửa').click()
    cy.get('#resume_title').should('be.visible').clear().type('Fresher Automation')
    cy.get('#t-resume-form').find('.btn-gradient').should('contain','Lưu Lại').click()

    // Personal Information
    cy.get('#personalinfo-section').contains('Chỉnh sửa').click()
    cy.get('#lastname').clear().type('Hồ Quý Phương') // last name
    cy.get('#firstname').clear().type('Ly') // first name
    cy.get('#gender_f').click({force:true}) // gender

    cy.get('[name="birthday"]').click() // choose birthday
    for(var i = 0; i < 10; i++) {
        cy.get('.dtpicker-content').find('a[class="dtpicker-compButton increment dtpicker-compButtonEnable"]').eq(0).click()
        cy.get('.dtpicker-content').find('a[class="dtpicker-compButton decrement dtpicker-compButtonEnable"]').eq(1).click()
        cy.get('.dtpicker-content').find('a[class="dtpicker-compButton increment dtpicker-compButtonEnable"]').eq(2).click()
    }
    cy.get('.dtpicker-content').find('a[class="dtpicker-button dtpicker-buttonSet"]').click()

    cy.get('#mobile').clear().type('0984561987') // mobile
    cy.get('#slnationality').select('Người Việt Nam') // Nationallity
    cy.get('#slcountry').select('Việt Nam') // International
    cy.get('#slcity').select("Hà Nội") // Country
    cy.get('#sldistrict').select("Quận Hoàng Mai") // District
    cy.get('input[name="address"]').clear().type('123 Ly Thuong Kiet') // Address
    cy.get('button')
        .parents('#personalInfoForm')
        .contains('Lưu lại')
        .click()

    // close popup cause after clicking save but the popup form not closed yet
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