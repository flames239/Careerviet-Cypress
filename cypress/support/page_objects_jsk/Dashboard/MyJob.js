function ClickMyJob(){
    cy.get('nav[class="side-navbar"] ul[class="list-unstyled"] li')
      .eq(4)
      .should("contain", "Việc làm của tôi")
      .click();

    cy.get('[class="list-unstyled collapse"] li a').contains('Việc làm đã lưu').click()
    cy.get('[class="list-unstyled collapse"] li a').contains('Việc làm đã nộp').click()
}


export class MyJob {
    MyJobFunction() {
        ClickMyJob();
    }
}

export const onMyJob = new MyJob();