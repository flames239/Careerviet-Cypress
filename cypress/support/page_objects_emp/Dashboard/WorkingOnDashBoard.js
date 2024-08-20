export class WorkingOnDB {
  WorkingOnDashBoardPage() {

    // tag div Information Account
    cy.get('.list-account-information').find('li a').eq(0).click()
    cy.go('back')
    cy.get('.list-account-information').find('li a').eq(1).click()
    cy.go('back')
    cy.get('.list-account-information').find('li a').eq(2).click()
    cy.go('back')

    // tag div Manage Job Posting
    cy.get('.list-post-management').find('li a').eq(0).click()
    cy.go('back')
    cy.get('.list-post-management').find('li a').eq(1).click()
    cy.go('back')
    cy.get('.list-post-management').find('li a').eq(2).click()
    cy.go('back')
    cy.get('.list-post-management').find('li a').eq(3).click()
    cy.go('back')
    cy.get('.list-post-management').find('li a').eq(4).click()
    cy.go('back')

    // tag div Activity History
    cy.get('.box-dasboard-top').find('a').contains('Xem thêm').click()
    cy.go('back')
    cy.wait(1000)

    // tag div Search resume candidate
    cy.get('[class="box-dasboard-bottom topresume-list"]').find('a').contains('Xem thêm tìm kiếm ứng viên').click()
    cy.go('back')

    // tag div Recruitment Chart
    cy.get('#btn_chart1').click()

    
    // tag div Candidate Chart
    cy.get('#btn_chart2').click()
    
    // tag div chart by candidate & job
    cy.get('#btn_chart3').click()

    // tag div chart by level
    cy.get('#btn_chart4').click()
  }
}

export const onWorkingOnDB = new WorkingOnDB();
