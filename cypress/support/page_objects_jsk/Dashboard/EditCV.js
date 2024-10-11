export class EditCV {
  // Flow: Login Then Click Edit CV Profile
  TitleResume(titleResume) {
    // click Careerviet Profile on Dashboard
    cy.get(".list-unstyled")
      .contains("Hồ sơ CareerViet")
      .click({ force: true });

    // skip popup shared profile
    cy.get('[class="container-ckb"]').click();
<<<<<<< HEAD
    cy.get('#popup-modal').contains("Đóng").click();
=======
    cy.get("#popup-modal").contains("Đóng").click();
>>>>>>> daaa7ff36cc4c19c1ff7935cc11b9921ae1be4ad

    // Title Resume
    cy.get("#t-resume-section").find('div[class="link-edit"] a').click();
    cy.get("#resume_title")
      .clear()
      .type(`${titleResume}`)
<<<<<<< HEAD
      .should('be.visible', 'have.value', `${titleResume}`);
=======
      .should("be.visible", "have.value", `${titleResume}`);
>>>>>>> daaa7ff36cc4c19c1ff7935cc11b9921ae1be4ad
    cy.get("#t-resume-form")
      .find(".btn-gradient")
      .should("contain", "Lưu Lại")
      .click();
  }

  PersonalInfo(
    firstName,
    lastName,
    dayOfBirth,
    monthOfBirth,
    yearOfBirth,
    phoneNumber,
    address
  ) {
    // Personal Information
    cy.get("#personalinfo-section a").click();
    cy.get("#lastname").clear().type(firstName).should("have.value", firstName); // last name
    cy.get("#firstname").clear().type(lastName).should("have.value", lastName); // first name
    cy.get("#gender_f").click({ force: true }); // gender'
    cy.get('[name="birthday"]').click(); // choose birthday

    // declare variables for increment and decrement buttons for birthdays
    cy.dayFill(".dtpicker-content", dayOfBirth, monthOfBirth, yearOfBirth);

    cy.get("#mobile")
      .clear()
      .type(phoneNumber)
      .should("have.value", phoneNumber); // Mobile
    cy.get("#slnationality").select("Người Việt Nam"); // Nationallity
    cy.get("#slcountry").select("Việt Nam"); // International
    cy.get("#slcity").select("Hà Nội"); // Country
    cy.get("#sldistrict").select("Quận Hoàng Mai"); // District
    cy.get('input[name="address"]')
      .clear()
      .type(address)
      .should("have.value", address); // Address

    // Click the "Lưu lại" button using contains() method with a more specific selector
    cy.get('#personalInfoForm button[type="button"]').click();

    // close popup cause after clicking save but the popup form not closed
    cy.get('button[class="fancybox-button fancybox-close-small"]').click();
  }

  CareerInfo(valueLocation) {
    // Career Information (Thông tin nghề nghiệp)
    cy.get("#widget-18 a").click(); // click on edit button

    //cy.get('label[for="chkResumeType_1"]').click(); // worktype (Hình Thức Làm Việc)
    cy.get("#chkWorkHome").click({ force: true }); // Flexible work (Phương thức làm việc WFH) - Not Required

    cy.get('[name="level_id"]').select("Nhân viên"); // Level ID (Cấp bậc mong muốn)
    cy.get("#salary_unit").select("USD");
    cy.get("#salary_from").clear().type("800");
    cy.get("#salary_to").clear().type("1000");
    //cy.get('#salary_unit').select('Thỏa thuận'); // Expected Salary
    //cy.get('#salary_unit').select('VNĐ');

    // Click on the dropdown to open it
    cy.get("#INDUSTRY_ID_chosen").click();

    // Check if any options are already selected
    cy.get("#INDUSTRY_ID")
      .should("exist")
      .then(($choices) => {
        if ($choices.val().length === 0) {
          // If no options are selected, select the desired options
          cy.get(".chosen-results li")
            .contains("CNTT - Phần mềm")
            .click({ ctrlKey: true });
          cy.get(".chosen-results li")
            .contains("Quản lý chất lượng (QA/QC)")
            .click({ ctrlKey: true });
        } else {
          // If options are already selected, detele current industries and choose another industries
          cy.get("#desired-form .chosen-choices .search-choice a")
            .eq(0)
            .click();
          cy.get("body").click({ force: true });
          cy.get('div[id="INDUSTRY_ID_chosen"]').click();
          cy.get(".chosen-results li")
            .contains("Bán lẻ / Bán sỉ")
            .click({ ctrlKey: true });
        }

        // After selecting the options, click outside the dropdown to close it
        cy.get("body").click({ force: true });
      });

    cy.get('select[name="LOCATION_ID[]"]').then(($choicesLocation) => {
      if ($choicesLocation.text() === "Chọn") {
        cy.get('select[name="LOCATION_ID[]"]').eq(0).select(`${valueLocation}`); // Expected Work location
      } else {
        cy.get("#desired-form button.btn-gradient").click();
      }
    });
  }

  WorkExperience(title, nameCompany, description) {
    cy.get('#widget-15 div[class="widget-body"]').then(($listSticker) => {
      if ($listSticker.length === 0) {
        // Case 1: Doesn't Experience and edit Current Level (Popup form will show)
        // check if user doesn't have any experience
        cy.get('#widget-15 table td div[class="link-edit"]').eq(0).click();

        cy.get("#levelcurrent_id").select("Nhân viên");
        cy.get("#frm_Experience .form-button .button-save").click();

        cy.get("#widget-15").find("span").contains("Thêm mới").click();
        cy.get('[name="rexp_title"]')
          .clear()
          .type(`${title}`)
          .should("have.value", `${title}`); // Title - Vị trí / Chức Danh
        cy.get('[name="rexp_company"]')
          .clear()
          .type(`${nameCompany}`)
          .should("be.visible", "have.value", `${nameCompany}`); // Company - Công ty
        cy.get(".autocomplete-suggestions").eq(0).click({ force: true }); // handle autocomplete-suggestions click
        cy.get('[name="rexp_worktype"]').select("Nhân viên chính thức"); // Work Permanent - Phuong Thuc Cong Viec
        cy.wait(2000);
        cy.get("#widget-15").click({ force: true }); // click outside list dropdown list suggestion data

        //  Thoi gian lam viec - Start Date
        cy.get("#job_startdate").click();
        cy.get(".datepicker-months .table-condensed")
          .find('th[class="prev"]')
          .eq(0)
          .click();
        cy.get(".datepicker-months .table-condensed")
          .eq(0)
          .find('span[class="month"]')
          .contains("Th1")
          .click();
        // End Date
        cy.get("#job_enddate").click();
        cy.get(".datepicker-months .table-condensed")
          .eq(1)
          .find('span[class="month"]')
          .contains("Th1")
          .click();
        // Description
        cy.get('[name="rexp_workdesc"]')
          .clear()
          .type(`${description}`)
          .should("be.visible", "have.value", `${description}`);
        // Save
        cy.get("#experience-form .button-save .btn-gradient")
          .contains("Lưu Lại")
          .click();
      } else
        cy.get('#widget-15 ul[class="list-sticker"]').then(($listExp) => {
          if ($listExp.length >= 2) {
            cy.get("#widget-15 .list-action .delete a").eq(0).click();
            cy.get("#popup_content #popup_ok").click();
          }
        });
    });
  }

  Education(collegeName, description) {
    // Select Highest Degree
    cy.get('#widget-16 table td div[class="link-edit link-highest-degree"]')
      .should("be.visible")
      .click();
    cy.get("#degree").select("Cao đẳng");
    cy.get('#widget-16 table td div[class="link-save"]').click();
    cy.wait(500);
    cy.get("#cbprofile_degree_name").should("be.visible");

    cy.get('#widget-16 div[class="widget-body"]').then(($listSticker) => {
      if ($listSticker.length === 0) {
        // click to show popup form education
        cy.get('#widget-16 div[class="link-add"]')
          .contains("Thêm mới")
          .should("be.visible")
          .click();

        // input data in the education form
        cy.get("#redu_name")
          .clear()
          .type(`${collegeName}`)
          .should("be.visible", "have.value", `${collegeName}`); // Name University or College
        cy.get("#redu_degree").select("Cao đẳng"); // Degree

        // Date of Graduation (Optional)
        cy.get("#redu_date").click();
        cy.get(".table-condensed")
          .find('tbody tr td span[class="month"]')
          .contains("Th9")
          .click();

        // Description (Optional)
        cy.get("#redu_desc")
          .clear()
          .type(`${description}`)
          .should("be.visible", "have.value", `${description}`);
        cy.get('#education-form .form-group button[class="btn-gradient"]')
          .contains("Lưu Lại")
          .click(); //  Save Form Education
      } else {
        cy.get('#widget-16 ul[class="list-action"]').then(($listAction) => {
          if ($listAction.length >= 2) {
            cy.get("#widget-16 .list-action .delete a").eq(0).click();
            cy.get("#popup_content #popup_ok").click();
          }
        });
      }
    });

    // Verify if the education form has been save is successful save and show
    cy.get("#widget-16 .head-sticker").should("be.visible");
  }

  OtherCertificate(
    nameCertificate,
    providedBy,
    dayOfBirth,
    monthOfBirth,
    yearOfBirth,
    dayOfBirth1,
    monthOfBirth1,
    yearOfBirth1
  ) {
    // Optional
    cy.get('#widget-17 div[class="widget-body"]').then(($listSticker) => {
      if ($listSticker.length === 0) {
        cy.get("#certificate-section .link-add a").click();
        cy.get('input[name="cer_title"]')
          .clear()
          .type(`${nameCertificate}`)
          .should("be.visible", "have.value", `${nameCertificate}`); // certificate name
        cy.get('input[name="cer_by"]')
          .clear()
          .type(`${providedBy}`)
          .should("be.visible", "have.value", `${providedBy}`); // provide by
        cy.get("#cer_from").click();
        cy.dayFill(".dtpicker-content", dayOfBirth, monthOfBirth, yearOfBirth);
        cy.wait(1000);

        cy.get("#cer_to").click();
        cy.dayFill(
          ".dtpicker-content",
          dayOfBirth1,
          monthOfBirth1,
          yearOfBirth1
        );

        cy.get("#certificate-form").find("button").click();
      } else {
        cy.get('#widget-17 ul[class="list-action"]').then(($listAction) => {
          if ($listAction.length >= 2) {
            cy.get("#widget-17 .list-action .delete a").eq(0).click();
            cy.get("#popup_content #popup_ok").click();
          }
        });
      }
    });
  }

  Languages(nameCertificate) {
    cy.get('#language-section div[class="widget-body"]');
    cy.get("#language-section .link-add-lang a").click(); // open form Skills
    cy.get('[name="rs_language"]').select("Anh"); // choose Languages
    cy.get('.range-labels li[id="level_4"]').click(); // Click range labels
    cy.get('[name="rs_language_certify"]')
      .clear()
      .type(`${nameCertificate}`)
      .should("be.visible", "have.value", `${nameCertificate}`); // description
    cy.get('#language-form .button-save button[class="btn-gradient"]').click(); // save
  }

  // Kỹ năng chuyên môn
  Skills(skillsName, skillsDescription) {
    cy.get("#widget-17").find('div[class="link-add"] a').click();
    cy.get('input[name="ipt_skill_name"]')
      .clear()
      .type(`${skillsName}`)
      .should("have.value", `${skillsName}`);
    cy.get('textarea[name="ipt_skill_content"]')
      .clear()
      .type(`${skillsDescription}`)
      .should("have.value", `${skillsDescription}`);
    cy.get('#skill-form  .button-save button[class="btn-gradient"]').click(); // save
  }

  // Thành tích nổi bật (Optional)
  Highlight() {}

  // Hoạt động khác (Optional)
  OtherActivity() {}

  // Người tham khảo (Optional)
  Reference(fullNameRef, level, nameCompany, phoneNumberRef, emailRef) {
<<<<<<< HEAD
    cy.get("#widget-20 .link-add a").click(); // open popup form
    cy.get("#rref_name")
      .clear()
      .type(`${fullNameRef}`)
      .should("be.visible", "have.value", `${fullNameRef}`); // input field Name Surname
    cy.get("#rref_title")
      .clear()
      .type(`${level}`)
      .should("be.visible", "have.value", `${level}`); // title field
    cy.get("#rref_company")
      .clear()
      .type(`${nameCompany}`)
      .should("be.visible", "have.value", `${nameCompany}`); // Name company
    cy.get("#rref_phone")
      .clear()
      .type(`${phoneNumberRef}`)
      .should("be.visible", "have.value", `${phoneNumberRef}`); // Phone number
    cy.get("#rref_email")
      .clear()
      .type(`${emailRef}`)
      .should("be.visible", "have.value", `${emailRef}`); // Email address
    cy.get('#references-form .button-save button[class="btn-gradient"]').click(); // save
  }
}
export const onEditCVProfile = new EditCV();
=======
  cy.get('#widget-20 div[class="widget-body"]').then(($listSticker) => {
    if ($listSticker.length === 0) {
      cy.get("#widget-20 .link-add a").click(); // open popup form
      cy.get("#rref_name")
        .clear()
        .type(`${fullNameRef}`)
        .should("be.visible", "have.value", `${fullNameRef}`); // input field Name Surname
      cy.get("#rref_title")
        .clear()
        .type(`${level}`)
        .should("be.visible", "have.value", `${level}`); // title field
      cy.get("#rref_company")
        .clear()
        .type(`${nameCompany}`)
        .should("be.visible", "have.value", `${nameCompany}`); // Name company
      cy.get("#rref_phone")
        .clear()
        .type(`${phoneNumberRef}`)
        .should("be.visible", "have.value", `${phoneNumberRef}`); // Phone number
      cy.get("#rref_email")
        .clear()
        .type(`${emailRef}`)
        .should("be.visible", "have.value", `${emailRef}`); // Email address
      cy.get(
        '#references-form .button-save button[class="btn-gradient"]'
      ).click(); // save
    } else {
      cy.get('#widget-20 ul[class="list-action"]').then(($listAction) => {
        if ($listAction.length >= 2) {
          cy.get("#widget-20 .list-action .delete a").eq(0).click();
          cy.get("#popup_content #popup_ok").click();
        }
      });
    }
  });
}
}
export const onEditCVProfile = new EditCV();
>>>>>>> daaa7ff36cc4c19c1ff7935cc11b9921ae1be4ad
