/// <reference types="cypress" />
describe('My First Test Careerviet', () => {
    // it('Flow Register Careerviet', () => {
    //   cy.visit('/')
    //   cy.get('.right-wrap').contains('Đăng ký').click({force:true})

    //   // check validate of the form register
    //   cy.get('#firstname')
    //   .parents("#frmRegister")
    //   .find('.btn-gradient')
    //   .contains('Đăng ký')
    //   .click()
    //   .parents("#frmRegister")
    //   .should('contain','Nhập Tên của bạn')
    //   .should('contain','Nhập Họ và Tên Lót của bạn')
    //   .should('contain','Xin vui lòng nhập email của bạn.')
    //   .should('contain','Vui lòng nhập mật khẩu của bạn')
    //   .should('contain','Bạn cần đồng ý với')
    // })

    // it('Registers successfully', () => {
    //   cy.visit('/')
    //   cy.get('.right-wrap').contains('Đăng ký').click({force:true})

    //   // Form Registration for User
    //   cy.get('#firstname').clear().type('Huyền').first().focus()
    //   cy.get('#lastname').clear().type('Lê Nguyễn Ngọc')
    //   cy.get('#email').clear().type('le_nguyen_ngoc_huyen-123321@yopmail.com')
    //   cy.get('#password').clear().type('123456')
    //   cy.get('#confirm_password').clear().type('123456')
    //   cy.get('#chkAgree').click({force:true})
    //   cy.get('.btn-gradient').contains('Đăng ký').click()
    // })

    it('Login Account User Jobseekers', () => {
      cy.visit('/')
      // cy.get('.right-wrap').contains('Đăng nhập').click({force:true})

      //cy.get('.left-wrap').contains('Tìm Việc Làm').trigger('mouseover')
     

      // cy.get('[placeholder="Email hoặc Tên đăng nhập"]').clear().type('le_nguyen_ngoc_huyen-123321@yopmail.com')
      // cy.get('[placeholder="Mật khẩu"]').clear().type('123456')
      // cy.get('[type="submit"]').contains('Đăng nhập').click()

    })
  })