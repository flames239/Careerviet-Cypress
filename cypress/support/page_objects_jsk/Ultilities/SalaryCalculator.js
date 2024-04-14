export class WorkWithUltilities {
    SalaryCalculator(summarySalary, allowances) {
        cy.get('.form-calculate').should('be.visible')
        cy.get('#vnd').click({force:true}) // radio VND or USD
        cy.get('#gross_salary_adv').clear().type(`${summarySalary}`).should('have.value',`${summarySalary}`) // input summary salary
        cy.get('#allowances_salary').clear().type(`${allowances}`).should('have.value',`${allowances}`) // input allowances
        // cy.get('#training_worker').select('')
        // cy.get('#region').select('')
        // cy.get('#num_of_depend_adv').select('')
        cy.get('.calculate').click()
        cy.get('#SalaryResult').should('be.visible') // form calculation salary results appear
        cy.get('.ActionCtrl').find('li[class="download"] a').click() // click download
        cy.get('.ActionCtrl').find('li[class="print"] a').click() // click print
        //cy.get('.ActionCtrl').find('li[style="float:right;"] a').invoke('removeAttr','target').click() // click linktext Hướng dẫn tính lương

    }
}

export const onWorkWithUltilities = new WorkWithUltilities();