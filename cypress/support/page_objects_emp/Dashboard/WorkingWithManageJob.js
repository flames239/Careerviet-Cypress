//import { clickElement, selectFromDropdown, handleAutoReply, postJob, pauseJob } from "../support/ReuseFunction/HelperFunction"

export class workWithhManageJob {
  ClickManageJob() {
    cy.get(".container .main-wrap .left-wrap .list-menu")
      .find("li a")
      .eq(1)
      .click();
  }

  JobOnHiring(
    titleJob,
    jobCode_Optional,
    location,
    jobDescription,
    jobRequirements,
    linkYoutube,
    linkYoutube_1,
    job_FromAge,
    job_IsExp,
    job_FromExp,
    job_ToExp,
    Level_Id,
    Degree_Id,
    job_Probation,
    job_WorkTime,
    job_TrainOpportunity,
    job_Collegue,
    job_Benefit,
    job_AddSalary,
    job_Annualleave
  ) {
    cy.get(".boding-jobs-posting table tbody").then((listJobHiring) => {
      if (listJobHiring.val().length === 0) {
        // check if list job is empty, post new jobs
        cy.get(".box-manage-job-posting .button a").click();
        cy.get(".all-add-page .item-add-info").find("button").click();

        //Hiring Information
        //form post Job
        cy.get("#job_title")
          .clear()
          .type(`${titleJob}`)
          .should("have.value", `${titleJob}`);
        cy.get("#job_code")
          .clear()
          .type(`${jobCode_Optional}`)
          .should("have.value", `${jobCode_Optional}`); // optional not required (Job Code)
        cy.selectIndustry(); // select industries call from commands.js
      }

      cy.get("#post_job_location")
        .find('select[name="LOCATION_ID[]"]')
        .select(`${location}`);

      cy.get('#post_job_location div[class="chosen-container chosen-container-multi"]').then(($listAddressWorkLocation) => {
        if ($listAddressWorkLocation.length === 0) {
          // check if location address is empty, we start to add new address location
          cy.get("#post_job_location").find("label a").click(); // add address location
          cy.get("#location_id").select("650"); // option value location 4, 8, 76, 64, 781, 281, 240, 241, 75, 650, 651, 62, 78, 26, 71, 50, 1042, 511, 900, 1064, 61, 67, 59, 19, 351, 39, 320, 31, 780, 18, 321, 901, 58, 77, 60, 1069, 1070, 1071, 1072
          cy.get("#sldistrict").select("311");
          cy.get("#address")
            .clear()
            .type("251 Nguyễn Thương An")
            .should("have.value", "251 Nguyễn Thương An");
          cy.get("#insert_location_account").click();
          cy.get('div[class="chosen-container chosen-container-multi"]')
            .eq(1)
            .click();
          cy.get("#post_job_location .chosen-drop .chosen-results")
            .find("li")
            .eq(0)
            .click();
        } else {
          cy.get('div[class="chosen-container chosen-container-multi"]')
            .eq(1)
            .click();
          cy.get("#post_job_location .chosen-drop .chosen-results")
            .find("li")
            .eq(0)
            .click();
        }
      });
    });
    // Job Description Iframe
    cy.fillIframe("iframe.cke_wysiwyg_frame:eq(0)", jobDescription);

    // Job Requirement Iframe
    cy.fillIframe("iframe.cke_wysiwyg_frame:eq(1)", jobRequirements);

    // link video present job
    cy.get("#strVideoRecruiment")
      .clear()
      .type(`${linkYoutube}`)
      .should("have.value", `${linkYoutube}`);
    cy.get("#strVideoRecruiment2")
      .clear()
      .type(`${linkYoutube_1}`)
      .should("have.value", `${linkYoutube_1}`);

    // range salary
    cy.salaryRange() // get from file commands.js

    // Worktype
    cy.get("#job_type1").click();

    // choose day to receive Resume
    cy.selectDayReceiveCV()
    
    // Benefit
    let i = 1;
    while (i < 15) {
      cy.get(`input[name="BENEFIT_ID[]"][value=${i}]`).click();
      i++;
    }

    // BASIC REQUIREMENT
    cy.get("#JOB_FROMAGE")
      .clear()
      .type(`${job_FromAge}`)
      .should("have.value", `${job_FromAge}`);
    cy.get("#JOB_ISEXPERIENCE")
      .select(`${job_IsExp}`)
      .should("have.value", `${job_IsExp}`);
    cy.get("#JOB_FROMEXPERIENCE")
      .clear()
      .type(`${job_FromExp}`)
      .should("have.value", `${job_FromExp}`);
    cy.get("#JOB_TOEXPERIENCE")
      .clear()
      .type(`${job_ToExp}`)
      .should("have.value", `${job_ToExp}`);
    cy.get("#LEVEL_ID")
      .select(`${Level_Id}`)
      .should("have.value", `${Level_Id}`);
    cy.get("#DEGREE_ID")
      .select(`${Degree_Id}`)
      .should("have.value", `${Degree_Id}`);
    // CONTACT INFORMATION (SKip)
    // EMPLOYER'S PRIORITIZED CRITERIA IN SCREENING( RECRUITMENT INFORMATION ) (Skip)
    // OTHER INFO (OPTIONAL)
    cy.get('div[class="form-wrap other-information-wrap"]').find("a").click();
    cy.get("#JOB_PROBATIONTIME")
      .clear()
      .type(`${job_Probation}`)
      .should("have.value", `${job_Probation}`);
    cy.get("#JOB_WORKTIME")
      .clear()
      .type(`${job_WorkTime}`)
      .should("have.value", `${job_WorkTime}`);
    cy.get("#JOB_TRAINOPPORTUNITY")
      .clear()
      .type(`${job_TrainOpportunity}`)
      .should("have.value", `${job_TrainOpportunity}`);
    cy.get("#JOB_COLLEAGUE")
      .clear()
      .type(`${job_Collegue}`)
      .should("have.value", `${job_Collegue}`);
    cy.get("#JOB_ADDSALARY")
      .clear()
      .type(`${job_Benefit}`)
      .should("have.value", `${job_Benefit}`);
    cy.get("#JOB_ADDSALARY")
      .clear()
      .type(`${job_AddSalary}`)
      .should("have.value", `${job_AddSalary}`);
    cy.get("#JOB_ANNUALLEAVE")
      .clear()
      .type(`${job_Annualleave}`)
      .should("have.value", `${job_Annualleave}`);

    // Click Btn Save and Wait to Page Pending Jobs
    cy.get('div[class="item-add-info"]')
      .find('button[class="button-add-update btn-post"]')
      .click();

    // click job information
    cy.get('div[class="jobs-posting-detail-bottom"] ul')
      .find("li")
      .eq(1)
      .click();

    // click autoresponse
    cy.get('div[class="jobs-posting-detail-bottom"] ul')
      .find("li")
      .eq(2)
      .click();
    cy.get('a[class="btn-gradient btn-edit-email"]').click();
    cy.get("#slAutoReply").select("294976");
    cy.wait(1000);
    cy.get(
      'div[class="jobs-posting-modal jobs-posting-16-modal fancybox-content"] button[name="save"]'
    ).click();

    // click resume tag management
    cy.get('div[class="jobs-posting-detail-bottom"] ul')
      .find("li")
      .eq(3)
      .click();

    // click Btn post job
    cy.get('ul[class="list-action"]').find("li").eq(1).click();

    // choose service to post jobs
    cy.chooseService(); // creat in file commands.js
  }

  JobOnPending(
    titleJob,
    jobCode_Optional,
    location,
    jobDescription,
    jobRequirements,
    job_FromAge,
    job_IsExp,
    job_FromExp,
    job_ToExp,
    Level_Id,
    Degree_Id
  ) {
    // Click job pending
    cy.get('ul[class="tabslet-tab"] li').eq(1).click();

    // Wait for the table to be visible
    cy.get("table tbody").then((dataInBody) => {
      // Check if the table contains the "Không có vị trí nào trong thư mục này." message
      if (Cypress.$(dataInBody).find("tr").length === 1 && Cypress.$(dataInBody)
          .find("tr")
          .text()
          .includes("Không có vị trí nào trong thư mục này.")
      ) {
        // Condition check if there only one row and contains text no data
        // check if list job is empty, post new jobs
        cy.get(".left-heading .button").find("a").click();

        //form post Job
        cy.get("#job_title")
          .clear()
          .type(`${titleJob}`)
          .should("have.value", `${titleJob}`);
        cy.get("#job_code")
          .clear()
          .type(`${jobCode_Optional}`)
          .should("have.value", `${jobCode_Optional}`); // optional not required (Job Code)
        // select industries call from commands.js
        cy.selectIndustry();
        cy.get("#post_job_location")
          .find('select[name="LOCATION_ID[]"]')
          .select(`${location}`);

        cy.get('#post_job_location div[class="chosen-container chosen-container-multi"]').then(($listAddressWorkLocation) => {
          if ($listAddressWorkLocation.length === 0) {
            // check if location address is empty, we start to add new address location
            cy.get("#post_job_location").find("label a").click(); // add address location
            cy.get("#location_id").select("650"); // option value location 4, 8, 76, 64, 781, 281, 240, 241, 75, 650, 651, 62, 78, 26, 71, 50, 1042, 511, 900, 1064, 61, 67, 59, 19, 351, 39, 320, 31, 780, 18, 321, 901, 58, 77, 60, 1069, 1070, 1071, 1072
            cy.get("#sldistrict").select("311");
            cy.get("#address")
              .clear()
              .type("251 Nguyễn Thương An")
              .should("have.value", "251 Nguyễn Thương An");
            cy.get("#insert_location_account").click();
            cy.get('div[class="chosen-container chosen-container-multi"]')
              .eq(1)
              .click();
            cy.get("#post_job_location .chosen-drop .chosen-results")
              .find("li")
              .eq(0)
              .click();
          } else {
            cy.get('div[class="chosen-container chosen-container-multi"]')
              .eq(1)
              .click();
            cy.get("#post_job_location .chosen-drop .chosen-results")
              .find("li")
              .eq(0)
              .click();
          }
        });

        // Job Description Iframe
        cy.fillIframe("iframe.cke_wysiwyg_frame:eq(0)", jobDescription);

        // Job Requirement Iframe
        cy.fillIframe("iframe.cke_wysiwyg_frame:eq(1)", jobRequirements);

        // range salary
        cy.salaryRange()

        // Worktype
        cy.get("#job_type1").click();

        // choose day to receive Resume
        cy.selectDayReceiveCV()

        // Benefit
        let i = 1;
        while (i < 15) {
          cy.get(`input[name="BENEFIT_ID[]"][value=${i}]`).click();
          i++;
        }

        // BASIC REQUIREMENT
        cy.get("#JOB_FROMAGE")
          .clear()
          .type(`${job_FromAge}`)
          .should("have.value", `${job_FromAge}`);
        cy.get("#JOB_ISEXPERIENCE")
          .select(`${job_IsExp}`)
          .should("have.value", `${job_IsExp}`);
        cy.get("#JOB_FROMEXPERIENCE")
          .clear()
          .type(`${job_FromExp}`)
          .should("have.value", `${job_FromExp}`);
        cy.get("#JOB_TOEXPERIENCE")
          .clear()
          .type(`${job_ToExp}`)
          .should("have.value", `${job_ToExp}`);
        cy.get("#LEVEL_ID")
          .select(`${Level_Id}`)
          .should("have.value", `${Level_Id}`);
        cy.get("#DEGREE_ID")
          .select(`${Degree_Id}`)
          .should("have.value", `${Degree_Id}`);

        // Click Btn Save and Wait to Page Pending Jobs
        cy.get('div[class="item-add-info"]')
          .find('button[class="button-add-update btn-post"]')
          .click();

        // click job information
        cy.get('div[class="jobs-posting-detail-bottom"] ul')
          .find("li")
          .eq(1)
          .click();

        // click autoresponse
        cy.get('div[class="jobs-posting-detail-bottom"] ul')
          .find("li")
          .eq(2)
          .click();
        cy.get('a[class="btn-gradient btn-edit-email"]').click();
        cy.get("#slAutoReply").select("294976");
        cy.wait(1000);
        cy.get(
          'div[class="jobs-posting-modal jobs-posting-16-modal fancybox-content"] button[name="save"]'
        ).click();

        // click resume tag management
        cy.get('div[class="jobs-posting-detail-bottom"] ul')
          .find("li")
          .eq(3)
          .click();

        // click Btn post job
        cy.get('ul[class="list-action"]').find("li").eq(1).click();

        // choose service to post jobs
        cy.chooseService(); // creat in file commands.js
      } else {
        // Iterate through the rows to find the status
        cy.get("table tbody tr").each(($row) => {
          cy.wrap($row)
            .find("td")
            .eq(3)
            .invoke("text")
            .then((statusText) => {
              const trimmedStatusText = statusText.trim();
              if (trimmedStatusText === "Hoàn tất") {
                cy.log('Status is "Hoàn tất", performing posting actions');

                // Actions for completed status
                cy.wrap($row).find('a[title="Thực hiện đăng tuyển"]').click();

                // Wait for the next elements to be visible before interacting with them
                cy.chooseService();
              } else {
                // Click func copy
                cy.get('.list-manipulation li a[title="Nhân bản"] em')
                  .eq(0)
                  .should("be.visible")
                  .click();

                // Click func view detail
                cy.get('.list-manipulation li a[title="Chi tiết"] em')
                  .eq(0)
                  .should("be.visible")
                  .click();
                cy.go("back");

                // Click func delete
                cy.get('.list-manipulation li a[title="Xóa"] em')
                  .eq(0)
                  .should("be.visible")
                  .click();

                // Wait for the confirmation dialog and confirm the delete action
                cy.get('.jconfirm-buttons button[class="btn btn-blue"]').click(); // Adjust text to match the confirmation button

                // Now perform additional actions like edit if needed
                cy.get('.list-manipulation li a[title="Sửa"] em')
                  .eq(0)
                  .should("be.visible")
                  .click();

                // select industries (get from file commands.js)
                cy.selectIndustry();

                // Choose day to receive Resume
                cy.selectDayReceiveCV()

                // Click Btn Save and Wait to Page Pending Jobs
                cy.get('div[class="item-add-info"]')
                  .find('button[class="button-add-update btn-post"]')
                  .click();
              }
            });
          return false;
        });
      }
    });
  }

  JobOnInactive() {
    cy.get('ul[class="tabslet-tab"] li').eq(2).click();
    cy.get(
      'ul[class="list-check"] li[class="view-posting-detail active"] a'
    ).click();
    cy.get("#dtail").click({ force: true }); // click btn details
    cy.get("#copy_multi_job").click(); // click copy Btn
    cy.get(".modal-body .button a").click();

    cy.get("table tbody tr td input").eq(0).click();
    cy.get("#copy_multi_job").click(); // click copy Btn
    cy.get('ul[class="tabslet-tab"] li').eq(2).click();
    cy.get("#copy_multi_job").click(); // click copy Btn after choose data to copy
    cy.get(".modal-body .button a").click();

    cy.get(".export-file a").click(); // click export file

    // interact with table
    cy.get('table tbody tr td ul[class="list-manipulation"]')
      .eq(0)
      .find('a[title="Chi tiết"]')
      .click();
    cy.go("back");

    cy.get('table tbody tr td ul[class="list-manipulation"]')
      .eq(1)
      .find('a[title="Đăng lại việc làm này"]')
      .click();
    cy.get(".jconfirm-buttons").find("button").contains("Đồng ý").click(); //
    cy.get(".jconfirm-buttons").find("button").contains("ok").click(); // đăng lại job

    cy.get('table tbody tr td .list-manipulation li a[title="Tạm dừng đăng"]')
      .eq(0)
      .click();
    cy.get(".jconfirm-buttons").find("button").contains("Đồng ý").click(); //
    cy.get(".jconfirm-buttons").find("button").contains("ok").click(); // đồng ý hạ job

    cy.get('table tbody tr td ul[class="list-manipulation"]')
      .eq(2)
      .find('a[title="Nhân bản"]')
      .click();
    cy.go("back");

    cy.get('table tbody tr td ul[class="list-manipulation"]')
      .eq(3)
      .find('a[title="Xuất file hồ sơ ứng tuyển"]')
      .click();
  }

  JobOnExpired(
    titleJob,
    jobCode_Optional,
    location,
    jobDescription,
    jobRequirements,
    linkYoutube,
    linkYoutube_1
  ) {
    cy.get('ul[class="tabslet-tab"] li').eq(3).click(); // click Job expired

    cy.get(
      'ul[class="list-check"] li[class="view-posting-detail active"] a'
    ).click();
    cy.get("#dtail").click({ force: true }); // click btn details
    cy.get("#copy_multi_job").click(); // click copy Btn
    cy.get(".modal-body .button a").click();

    cy.get("table tbody tr td input").eq(0).click();
    cy.get("#copy_multi_job").click(); // click copy Btn
    cy.get('ul[class="tabslet-tab"] li').eq(3).click(); // click Job expired
    cy.get("#copy_multi_job").click(); // click copy Btn after choose data to copy
    cy.get(".modal-body .button a").click();

    cy.get(".export-file a").click(); // click export file

    // interact with table
    cy.get('table tbody tr td ul[class="list-manipulation"]')
      .eq(0)
      .find('a[title="Chi tiết"]')
      .click();
    cy.go("back");

    cy.get('table tbody tr td ul[class="list-manipulation"]')
      .eq(1)
      .find('a[title="Nhân bản"]')
      .click();
    cy.go("back");

    // this function is re-write job post
    cy.get('table tbody tr td ul[class="list-manipulation"]')
      .eq(2)
      .find('a[title="Đăng lại việc làm này"]')
      .click();
    // copy All code from function Job On Hiring
    //form post Job
    cy.get("#job_title")
      .clear()
      .type(`${titleJob}`)
      .should("have.value", `${titleJob}`);
    cy.get("#job_code")
      .clear()
      .type(`${jobCode_Optional}`)
      .should("have.value", `${jobCode_Optional}`); // optional not required (Job Code)

    // select industries (get from file commands.js)
    cy.selectIndustry();

    cy.get("#post_job_location")
      .find('select[name="LOCATION_ID[]"]')
      .select(`${location}`);

    cy.get('#post_job_location div[class="chosen-container chosen-container-multi"]').then(($listAddressWorkLocation) => {
      if ($listAddressWorkLocation.length === 0) {
        // check if location address is empty, we start to add new address location
        cy.get("#post_job_location").find("label a").click(); // add address location
        cy.get("#location_id").select("650"); // option value location 4, 8, 76, 64, 781, 281, 240, 241, 75, 650, 651, 62, 78, 26, 71, 50, 1042, 511, 900, 1064, 61, 67, 59, 19, 351, 39, 320, 31, 780, 18, 321, 901, 58, 77, 60, 1069, 1070, 1071, 1072
        cy.get("#sldistrict").select("311");
        cy.get("#address")
          .clear()
          .type("251 Nguyễn Thương An")
          .should("have.value", "251 Nguyễn Thương An");
        cy.get("#insert_location_account").click();
        cy.get('div[class="chosen-container chosen-container-multi"]')
          .eq(1)
          .click();
        cy.get("#post_job_location .chosen-drop .chosen-results")
          .find("li")
          .eq(0)
          .click();
      } else {
        cy.get('div[class="chosen-container chosen-container-multi"]')
          .eq(1)
          .click();
        cy.get("#post_job_location .chosen-drop .chosen-results")
          .find("li")
          .eq(0)
          .click();
      }
    });

    // Job Description Iframe
    cy.fillIframe("iframe.cke_wysiwyg_frame:eq(0)", jobDescription);

    // Job Requirement Iframe
    cy.fillIframe("iframe.cke_wysiwyg_frame:eq(1)", jobRequirements);

    // link video present job
    cy.get("#strVideoRecruiment")
      .clear()
      .type(`${linkYoutube}`)
      .should("have.value", `${linkYoutube}`);
    cy.get("#strVideoRecruiment2")
      .clear()
      .type(`${linkYoutube_1}`)
      .should("have.value", `${linkYoutube_1}`);

    // range salary
    cy.salaryRange()

    // choose day to receive Resume
    cy.selectDayReceiveCV()

    // Benefit
    let i = 1;
    while (i < 15) {
      cy.get(`input[name="BENEFIT_ID[]"][value=${i}]`).click();
      i++;
    }

    // Click Btn Save and Wait to Page Pending Jobs
    cy.get('div[class="item-add-info"]')
      .find('button[class="button-add-update btn-post"]')
      .click();

    // click job information
    cy.get('div[class="jobs-posting-detail-bottom"] ul')
      .find("li")
      .eq(1)
      .click();

    // click autoresponse
    cy.get('div[class="jobs-posting-detail-bottom"] ul')
      .find("li")
      .eq(2)
      .click();
    cy.get('a[class="btn-gradient btn-edit-email"]').click();
    cy.get("#slAutoReply").select("294976");
    cy.wait(1000);
    cy.get(
      'div[class="jobs-posting-modal jobs-posting-16-modal fancybox-content"] button[name="save"]'
    ).click();

    // click resume tag management
    cy.get('div[class="jobs-posting-detail-bottom"] ul')
      .find("li")
      .eq(3)
      .click();

    // click Btn post job
    cy.get('ul[class="list-action"]').find("li").eq(1).click();

    // choose service to post jobs
    cy.chooseService();

    cy.get('ul[class="tabslet-tab"] li').eq(3).click(); // click Job expired
    cy.get('table tbody tr td ul[class="list-manipulation"]')
      .eq(3)
      .find('a[title="Xuất file hồ sơ ứng tuyển"]')
      .click();
  }
}
export const onWorkWithhManageJob = new workWithhManageJob();
