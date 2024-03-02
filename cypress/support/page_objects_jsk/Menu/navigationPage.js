function ClickOn_NewestJobs() {
 // Wait for the dropdown to become visible
    cy.get('.left-wrap .dropdown-menu').then( menu => {
        cy.wrap(menu)
        .eq(0)
        .invoke('show')
        .contains('Việc làm mới nhất')
        .should('be.visible')
        .click();    
    })
        
}
function ClickOn_CVHay() {
    cy.get('.left-wrap').contains('CV Hay').click()
}

function ClickOn_VietNamSalary() {
    cy.get('.left-wrap').contains('VietnamSalary').click()
}

function ClickOn_CareerMap() {
    cy.get('.left-wrap').contains('CareerMap').click()
}

function ClickOn_TalentCommunity() {
    cy.get('.left-wrap').contains('Cẩm Nang').click()
}

function ClickOn_CareerStart() {
    cy.get('.left-wrap').contains('CareerStart').click()
}

function ClickOn_Ultilities() {
    cy.get('.left-wrap .dropdown-menu')
        .eq(1)
        .invoke('show')
        .contains('Test DISC')
        .should('be.visible')    
        .click();       
}


export class NavigationHeaderPage {
    /*
    Declare Function
    Then write logic code inside Function
    */ 
    AllJob_Newest() {   
        ClickOn_NewestJobs()
    }

    CVHay() {
        ClickOn_CVHay()
    }

    VietNamSalary() {
        ClickOn_VietNamSalary()
    }

    CareerMap() {
        ClickOn_CareerMap()
    }

    TalentCommunity() {
        ClickOn_TalentCommunity()
    }

    CareerStart() {
        ClickOn_CareerStart()
    }

    Ultilities() {
       ClickOn_Ultilities() 
    }
}

export const onNavigationPage = new NavigationHeaderPage();