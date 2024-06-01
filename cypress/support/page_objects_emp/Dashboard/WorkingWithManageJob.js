export class workWithhManageJob {
  ClickManageJob() {
    cy.get('.container .main-wrap .left-wrap .list-menu')
      .find('li a')
      .eq(1)
      .click();
  }

  JobOnHiring(titleJob, jobCode_Optional, location, jobDescription, jobRequirements, linkYoutube, linkYoutube_1, salaryForm, salaryTo, lastDateReceived, job_FromAge, job_IsExp, job_FromExp, job_ToExp, Level_Id, Degree_Id, job_Probation, job_WorkTime, job_TrainOpportunity, job_Collegue, job_Benefit, job_AddSalary, job_Annualleave) {
    cy.get('.boding-jobs-posting table tbody').then((listJobHiring) => {
      if (listJobHiring.val().length === 0) {
        // check if list job is empty, post new jobs
        cy.get('.box-manage-job-posting .button a').click();
        cy.get('.all-add-page .item-add-info').find('button').click();

        //Hiring Information
        //form post Job
        cy.get('#job_title')
          .clear()
          .type(`${titleJob}`)
          .should('have.value', `${titleJob}`);
        cy.get('#job_code')
          .clear()
          .type(`${jobCode_Optional}`)
          .should('have.value', `${jobCode_Optional}`); // optional not required (Job Code)
        cy.get('div[id="select_industry_db_chosen"]').then(($listIndustries) => {
          // check if field industry is empty, we start to click some industry
          if ($listIndustries.val().length === 0) {
            cy.get('div[id="select_industry_db_chosen"]').click();
            cy.get('.chosen-results li')
              .contains('CNTT - Phần mềm')
              .click({ ctrlKey: true });
            cy.get('.chosen-results li')
              .contains('Quản lý chất lượng (QA/QC)')
              .click({ ctrlKey: true });
            cy.get('body').click({ force: true }); // click body tag to off show list industry
          } else {
            // If options are already selected, delete one industry then click a new one
            cy.get('.search-choice').find('a').click();
            cy.get('div[id="select_industry_db_chosen"]').click();
            cy.get('.chosen-results li')
              .contains('Bán lẻ / Bán sỉ')
              .click({ ctrlKey: true });
            cy.get('body').click({ force: true });
          }
        });
      }
      cy.get('body').click({ force: true }); // click body tag to off show list industry

      cy.get('#post_job_location').find('select[name="LOCATION_ID[]"]').select(`${location}`);

      cy.get('#post_job_location div[class="chosen-container chosen-container-multi"]').then(($listAddressWorkLocation) => {
        if ($listAddressWorkLocation.length === 0) {
          // check if location address is empty, we start to add new address location
          cy.get('#post_job_location').find('label a').click(); // add address location
          cy.get('#location_id').select('650'); // option value location 4, 8, 76, 64, 781, 281, 240, 241, 75, 650, 651, 62, 78, 26, 71, 50, 1042, 511, 900, 1064, 61, 67, 59, 19, 351, 39, 320, 31, 780, 18, 321, 901, 58, 77, 60, 1069, 1070, 1071, 1072
          cy.get('#sldistrict').select('311');
          cy.get('#address')
            .clear()
            .type('251 Nguyễn Thương An')
            .should('have.value', '251 Nguyễn Thương An');
          cy.get('#insert_location_account').click();
          cy.get('div[class="chosen-container chosen-container-multi"]').eq(1).click();
          cy.get('#post_job_location .chosen-drop .chosen-results').find('li').eq(0).click();
        } else {
          cy.get('div[class="chosen-container chosen-container-multi"]').eq(1).click();
          cy.get('#post_job_location .chosen-drop .chosen-results').find('li').eq(0).click();
        }
      });
    });
    // Job Description Iframe
    cy.get('iframe.cke_wysiwyg_frame')
      .eq(0)
      .then(($iframe) => {
        const iframeBody = $iframe.contents().find('body');
        cy.wrap(iframeBody)
          .clear() // Clear any existing text
          .type(`${jobDescription}`);
      });

    // Job Requirement Iframe
    cy.get('iframe.cke_wysiwyg_frame')
      .eq(1)
      .then(($iframe) => {
        const iframeBody = $iframe.contents().find('body');
        cy.wrap(iframeBody).clear().type(`${jobRequirements}`) // Clear any existing text
      })
    // link video present job
    cy.get('#strVideoRecruiment').clear().type(`${linkYoutube}`).should('have.value', `${linkYoutube}`);
    cy.get('#strVideoRecruiment2').clear().type(`${linkYoutube_1}`).should('have.value', `${linkYoutube_1}`);

    // range salary
    cy.get('#salary_from')
      .clear()
      .type(`${salaryForm}`)
      .should('have.value', `${salaryForm}`);
    cy.get('#salary_to')
      .clear()
      .type(`${salaryTo}`)
      .should('have.value', `${salaryTo}`);

    // Worktype
    cy.get('#job_type1').click();

    // choose day to receive Resume
    cy.get("#JOB_LASTDATE").click();
    let date = new Date();
    date.setDate(date.getDate() + 40);
    let futureDay = date.getDate()
    let fututeMonth = (date.getMonth() + 1).toString().padStart(2, "0"); // Note: Months are zero-indexed in JavaScript
    let futureYear = date.getFullYear();
    let dateAssert = `${futureDay}/${fututeMonth}/${futureYear}`;
    // Check if the future month is already displayed
    cy.get(".monthselect").then(($monthSelect) => {
      if (!$monthSelect.val().includes(fututeMonth.toString())) {
        cy.get(
          'div[class="drp-calendar left single"] thead tr th span'
        ).click();
      }
    });

    // Find and click the future date
    cy.get(".calendar-table tbody tr td.available").contains(futureDay).click();
    cy.get("#JOB_LASTDATE").should("have.value", dateAssert);

    // Benefit
    let i = 1;
    while (i < 15) {
      cy.get(`input[name="BENEFIT_ID[]"][value=${i}]`).click();
      i++;
    }

    // BASIC REQUIREMENT
    cy.get('#JOB_FROMAGE').clear().type(`${job_FromAge}`).should('have.value', `${job_FromAge}`);
    cy.get('#JOB_ISEXPERIENCE').select(`${job_IsExp}`).should('have.value', `${job_IsExp}`);
    cy.get('#JOB_FROMEXPERIENCE').clear().type(`${job_FromExp}`).should('have.value', `${job_FromExp}`);
    cy.get('#JOB_TOEXPERIENCE').clear().type(`${job_ToExp}`).should('have.value', `${job_ToExp}`);
    cy.get('#LEVEL_ID').select(`${Level_Id}`).should('have.value', `${Level_Id}`);
    cy.get('#DEGREE_ID').select(`${Degree_Id}`).should('have.value', `${Degree_Id}`);

    // CONTACT INFORMATION (SKip)
    // EMPLOYER'S PRIORITIZED CRITERIA IN SCREENING( RECRUITMENT INFORMATION ) (Skip)
    // OTHER INFO (OPTIONAL)
    cy.get('div[class="form-wrap other-information-wrap"]').find('a').click()
    cy.get('#JOB_PROBATIONTIME').clear().type(`${job_Probation}`).should('have.value', `${job_Probation}`)
    cy.get('#JOB_WORKTIME').clear().type(`${job_WorkTime}`).should('have.value', `${job_WorkTime}`)
    cy.get('#JOB_TRAINOPPORTUNITY').clear().type(`${job_TrainOpportunity}`).should('have.value', `${job_TrainOpportunity}`)
    cy.get('#JOB_COLLEAGUE').clear().type(`${job_Collegue}`).should('have.value', `${job_Collegue}`)
    cy.get('#JOB_BENEFIT').clear().type(`${job_Benefit}`).should('have.value', `${job_Benefit}`)
    cy.get('#JOB_ADDSALARY').clear().type(`${job_AddSalary}`).should('have.value', `${job_AddSalary}`)
    cy.get('#JOB_ANNUALLEAVE').clear().type(`${job_Annualleave}`).should('have.value', `${job_Annualleave}`)

    // Click Btn Save and Wait to Page Pending Jobs
    cy.get('div[class="item-add-info"]').find('button[class="button-add-update btn-post"]').click()
    cy.wait(2000)
  }

  JobOnPending() { }

  JobOnInactive() { }

  JobOnExpired() { }
}

export const onWorkWithhManageJob = new workWithhManageJob();