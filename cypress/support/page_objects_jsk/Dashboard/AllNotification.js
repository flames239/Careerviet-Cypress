function ClickAllNotification() {
    cy.get('nav[class="side-navbar"] ul[class="list-unstyled"] li')
        .find('a[title="Xem tất cả thông báo"]')
        .should("contain", "Xem tất cả thông báo")
        .click({ force: true })

    cy.get('div[class="setting"] a').click()
}

export class allNotifications {
    AllEmployersFunction() {
        ClickAllNotification();
    }
}

export const onAllNotifications = new allNotifications();