// Thành tích nổi bật (Optional)
function Highlight() {}

// Hoạt động khác (Optional)
function OtherActivity() {}
export class EditCV {
  // Flow: Login Then Click Edit CV Profile
  TitleResume(titleResume) {
    // click Careerviet Profile on Dashboard
    cy.get(".list-unstyled")
      .contains("Hồ sơ CareerViet")
      .click({ force: true });

    // skip popup shared profile
    cy.get('[class="container-ckb"]').click();
    cy.get("#popup-modal").contains("Đóng").should("be.visible").click();

    // Title Resume
    cy.get("#t-resume-section").find('div[class="link-edit"] a').click();
    cy.get("#resume_title").should("be.visible").clear().type(`${titleResume}`);
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
    cy.get("#lastname").clear().type(`${firstName}`); // last name
    cy.get("#firstname").clear().type(`${lastName}`); // first name
    cy.get("#gender_f").click({ force: true }); // gender

    cy.get('[name="birthday"]').click(); // choose birthday
    // declare variables for increment and decrement buttons for birthdays
    cy.get(".dtpicker-content")
      .find('input[class="dtpicker-compValue"]')
      .eq(0)
      .type(`${dayOfBirth}`);
    cy.get(".dtpicker-content")
      .find('input[class="dtpicker-compValue"]')
      .eq(1)
      .type(`${monthOfBirth}`);
    cy.get('div[class="dtpicker-comp year"]')
      .find('input[class="dtpicker-compValue"]')
      .type(`${yearOfBirth}`);

    cy.get(".dtpicker-content")
      .find('a[class="dtpicker-button dtpicker-buttonSet"]')
      .click();

    cy.get("#mobile").clear().type(`${phoneNumber}`); // Mobile
    cy.get("#slnationality").select("Người Việt Nam"); // Nationallity
    cy.get("#slcountry").select("Việt Nam"); // International
    cy.get("#slcity").select("Hà Nội"); // Country
    cy.get("#sldistrict").select("Quận Hoàng Mai"); // District
    cy.get('input[name="address"]').clear().type(`${address}`); // Address

    // Click the "Lưu lại" button using contains() method with a more specific selector
    cy.get('form#personalInfoForm button[type="button"]').click();

    // close popup cause after clicking save but the popup form not closed
    cy.get('button[class="fancybox-button fancybox-close-small"]').click();
  }

  CareerInfo() {
    // Career Information (Thông tin nghề nghiệp)
    cy.get("#widget-18 a").should("be.visible").click(); // click on edit button

    cy.get('#chkResumeType_1').click({ force: true }); // worktype (Hình Thức Làm Việc)
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
          // If options are already selected, proceed with additional selection logic
          cy.get("#INDUSTRY_ID_chosen")
            .contains("Bán lẻ / Bán sỉ")
            .click({ ctrlKey: true });
        }

        // After selecting the options, click outside the dropdown to close it
        cy.get("body").click({ force: true });
      });

    cy.get("#select_location_id_3").select("Thái Nguyên"); // Expected Work location
    cy.get('#desired-form').contains('Thêm').click(); // Optional add more desired locations work place
    cy.get("#select_location_id_1").select("Hà Nam");

    cy.get("#desired-form button.btn-gradient").click();
  }

  WorkExperience(title, nameCompany, description) {
    /**
     * Edit Number of Experience and Current Level
     * Split into 2 case
     *
     * Case 1: Doesn't Experience and edit Current Level (Popup form will show)
     */
    cy.get('#widget-15 table td div[class="link-edit"]').eq(0).click();
    cy.get('#widget-15 table td div[class="link-edit"]').should("be.visible");
    cy.get("#levelcurrent_id").select("Nhân viên");
    cy.get("#frm_Experience .form-button .button-save").click();

    /**
     * Case 2: Have Experience and edit Current Level (Popup form will show)
     */
    cy.get('#widget-15 table td div[class="link-edit"]').eq(0).click();
    cy.get(".no-exp-yet").click({ force: true });
    cy.get("#yearOfExperience").clear().type("2");
    cy.get('#widget-15 table td div[class="link-edit"]').should("be.visible");
    cy.get("#levelcurrent_id").select("Nhân viên");
    cy.get("#frm_Experience .form-button .button-save").click();

    // Click on form Experience
    cy.get("#widget-15").find("span").contains("Thêm mới").click();
    cy.get('[name="rexp_title"]').clear().type(`${title}`); // Title - Vị trí / Chức Danh
    cy.get('[name="rexp_company"]').clear().type(`${nameCompany}`); // Company - Công ty
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
    cy.get('[name="rexp_workdesc"]').clear().type(`${description}`);
    // Save
    cy.get("#experience-form .button-save .btn-gradient")
      .contains("Lưu Lại")
      .click();
  }

  Education(collegeName, description) {
    // Select Highest Degree
    cy.get('#widget-16 table td div[class="link-edit link-highest-degree"]')
      .should("be.visible")
      .click();
    cy.get("#degree").select("Cao đẳng");
    cy.get('#widget-16 table td div[class="link-save"]').click();
    cy.wait(2000);
    cy.get("#cbprofile_degree_name").should("be.visible");

    // click to show popup form education
    cy.get('#widget-16 div[class="link-add"]')
      .contains("Thêm mới")
      .should("be.visible")
      .click();

    // input data in the education form
    cy.get("#redu_name").clear().type(`${collegeName}`); // Name University or College
    cy.get("#redu_degree").select("Cao đẳng"); // Degree

    // Date of Graduation (Optional)
    cy.get("#redu_date").click();
    cy.get(".table-condensed")
      .find('tbody tr td span[class="month"]')
      .contains("Th9")
      .click();

    // Description (Optional)
    cy.get("#redu_desc").clear().type(`${description}`);
    cy.get('#education-form .form-group button[class="btn-gradient"]')
      .contains("Lưu Lại")
      .click(); //  Save Form Education

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
    cy.get("#certificate-section .link-edit a").click();
    cy.get('input[name="cer_title"]').clear().type(`${nameCertificate}`); // certificate name
    cy.get('input[name="cer_by"]').clear().type(`${providedBy}`); // provide by
    cy.get("#cer_from").click();
    cy.get(".dtpicker-content")
      .find('input[class="dtpicker-compValue"]')
      .eq(0)
      .type(`${dayOfBirth}`);
    cy.get(".dtpicker-content")
      .find('input[class="dtpicker-compValue"]')
      .eq(1)
      .type(`${monthOfBirth}`);
    cy.get('div[class="dtpicker-comp year"]')
      .find('input[class="dtpicker-compValue"]')
      .type(`${yearOfBirth}`);

    cy.get("#cer_to").click();
    cy.get(".dtpicker-content")
      .find('input[class="dtpicker-compValue"]')
      .eq(0)
      .type(`${dayOfBirth1}`);
    cy.get(".dtpicker-content")
      .find('input[class="dtpicker-compValue"]')
      .eq(1)
      .type(`${monthOfBirth1}`);
    cy.get('div[class="dtpicker-comp year"]')
      .find('input[class="dtpicker-compValue"]')
      .type(`${yearOfBirth1}`);

    cy.get("#certificate-form").find("button").click();
  }

  Languages(nameCertificate) {
    cy.get("#language-section .link-add-lang a").click(); // open form Skills
    cy.get('[name="rs_language"]').select("Anh"); // choose Languages
    cy.get('.range-labels li[id="level_4"]').click(); // Click range labels
    cy.get('[name="rs_language_certify"]').clear().type(`${nameCertificate}`); // description
    cy.get('#language-form .button-save button[class="btn-gradient"]').click(); // save
  }

  // Kỹ năng chuyên môn
  Skills(skillsName, skillsDescription) {
    cy.get("#widget-17").find('div[class="link-add"] a').click();
    cy.get('input[name="ipt_skill_name"]')
      .clear()
      .type(`${skillsName}`)
      .should("have.value", `${skillsName}`);
    cy.get('textarea[name="ipt_skill_content]')
      .clear()
      .type(`${skillsDescription}`)
      .should("have.value", `${skillsDescription}`);
    cy.get('.range-labels li[id="level_4"]').click(); // Click range labels
    cy.get('#skill-form  .button-save button[class="btn-gradient"]').click(); // save
  }

  // Người tham khảo (Optional)
  Reference(fullNameRef, level, nameCompany, phoneNumberRef, emailRef) {
    cy.get("#widget-20 .link-add a").click(); // open popup form
    cy.get("#rref_name").clear().type(`${fullNameRef}`); // input field Name Surname
    cy.get("#rref_title").clear().type(`${level}`); // title field
    cy.get("#rref_company").clear().type(`${nameCompany}`); // Name company
    cy.get("#rref_phone").clear().type(`${phoneNumberRef}`); // Phone number
    cy.get("#rref_email").clear().type(`${emailRef}`); // Email address
    cy.get('references-form .button-save button[class="btn-gradient"]').click(); // save
  }
}

export const onEditCVProfile = new EditCV();
