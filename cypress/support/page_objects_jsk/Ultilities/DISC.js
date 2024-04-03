export class WorkWithDISC {
    TestDISC() {
        cy.get('div[class="action"]').find("a").click();
    }

    WorkingWithFormDISC(fullName, email, phone, jobPositions) {
        // loop each question
        for (var questionNumber = 1; questionNumber <= 24; questionNumber++) {
            let baseValue = (questionNumber - 1) * 4; // Calculate the base value for the question
            let mostSelect, leastSelect;

            do {
                mostSelect = 1 + Math.floor(Math.random() * 4); // Random offset between 1 and 4
                leastSelect = 1 + Math.floor(Math.random() * 4);
            } while (mostSelect === leastSelect); // Ensure they are not the same

            // Correcting values to fit the pattern of the questions
            mostSelect += baseValue;
            leastSelect += baseValue;

            // Select the "most" option
            cy.get(
                `input[name="question_${questionNumber}_most"][value="${mostSelect}"]`
            ).check();

            // Select the "least" option
            cy.get(
                `input[name="question_${questionNumber}_least"][value="${leastSelect}"]`
            ).check();

            //cy.get(`#step-${questionNumber}`).find(`a[onclick="nextStep(${questionNumber}+1)"]`).click();
            if (questionNumber === 1) {
                cy.get(`section[class="test-disc-test"][id="step-${questionNumber}"]`)
                    .find(`div[class="link-question type-1"]`)
                    .find('a[role="button"][tabindex="0"].next#btn-start')
                    .contains("Tiếp Theo") // Make sure the link contains the text "Tiếp Theo"
                    .click(); // Click the link
            } else {
                cy.get(`section[class="test-disc-test"][id="step-${questionNumber}"]`)
                    .find('div.link-question.type-2 a[role="button"].next')
                    .contains("Tiếp Theo") // Ensure the link contains the text "Tiếp Theo"
                    .click(); // Click the link
            }
        }

        cy.get('.input-info').should('be.visible')
        // input data in the form
        cy.get('#men').click()
        //cy.get('#women').click()
        cy.get('#fullname').clear().type(fullName).should('have.value', fullName)
        cy.get('#email').clear().type(email).should('have.value', email)
        cy.get('#phone').clear().type(phone).should('have.value', phone)
        cy.get('#jobposition').clear().type(jobPositions).should('have.value', jobPositions)
        cy.get('#hideinfor').click()
        cy.get('.box-result a[role="button"]').click()

        // page results appear and we click button to check the test DISC
        cy.get('#btn-export').click()
    }
}

export const onWorkWithDISC = new WorkWithDISC();
