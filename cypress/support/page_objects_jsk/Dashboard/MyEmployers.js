export class dashboardMyEmployers {
    ClickMyEmployers() {
        cy.get('nav[class="side-navbar"] ul[class="list-unstyled"] li')
            .find("a")
            .eq(8)
            .should("contain", "Nhà tuyển dụng của tôi")
            .click({ force: true });

        cy.get('ul[class="list-unstyled collapse"] li a')
            .contains("Nhà tuyển dụng xem hồ sơ của tôi")
            .click();
        cy.get('ul[class="list-unstyled collapse"] li a')
            .contains("Following")
            .click();
        cy.get('ul[class="list-unstyled collapse"] li a')
            .contains("Nhà tuyển dụng được cài đặt hạn chế xem hồ sơ của tôi")
            .click();
        cy.get('ul[class="list-unstyled collapse"] li a')
            .contains("Phản hồi từ nhà tuyển dụng")
            .click();
    }
}

export const onDashboardMyEmployers = new dashboardMyEmployers();
