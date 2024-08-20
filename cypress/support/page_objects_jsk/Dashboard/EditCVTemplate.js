export class LECVTemplate {
  // Flow: Login Then Click Edit CV Template
  ChangeEditTemplateCV() {
    // click Edit CV Template on left menu Dashboard
    cy.get('nav[class="side-navbar"] ul[class="list-unstyled"] li')
      .eq(3)
      .should('contain', 'Chỉnh mẫu hồ sơ')
      .click();
  }

  ChangeTemplateCV() {
    cy.get('.template .change').find('a').should('contain', 'Đổi Mẫu').click(); // Click link text đổi mẫu
    cy.get('.list-template').then(() => {
      // Find the visible parent div and then find the button inside it
      cy.get('.btn-gradient.select-template-new')
        .parents('.cv-item')
        .should('be.visible') // Ensure the parent is visible
        .eq(8)
        .find('.btn-gradient.select-template-new')
        .click(); // Click the button
    });
    cy.get('[class="fancybox-button fancybox-close-small"]').click();
  }

  OnOffCoverCV() {
    cy.get('.slider').click() // Toggle On Off Cover CV
  }

  Language_Font_Size() {
    cy.get('#cv_language').select('Tiếng Việt').should('have.value', 'vi'); // choose language for the resume
    cy.get('#cv_font')
      .select('TimesNewRoman')
      .should('have.value', 'TimesNewRoman'); // choose font CV
    cy.get('#fontCVsize16').click(); // choose size character for CV
    cy.get('#fontCVsize14').click(); // choose size character for CV
    cy.get('#fontCVsize12').click(); // choose size character for CV
  }


  ButtonGroup() {
    cy.get('#btn_preview').should('be.visible').click(); // preview CV button
    cy.get('[class="my-profile-modal fancybox-content"]').should('be.visible'); // popup preview CV Show
    cy.get('[class="main-profile main-scroll-success"]').scrollTo('0','20'); /* srcoll Bottom  [class="my-profile-modal fancybox-content"]*/
    cy.get('[class="main-profile main-scroll-success"]').scrollTo('0','-20'); /*scroll Top*/
    cy.get('button[class="fancybox-button fancybox-close-small"]').click(); // close popup preview CV
    cy.get('#btn_savetemplate').should('be.visible').click(); // save CV template button
    cy.get('a[class="btn-close-modal"]').click(); // close modal

    cy.get('#btn_savetemplate').should('be.visible').click(); // download CV button
  }
}

export const onEditCVTemplate = new LECVTemplate();