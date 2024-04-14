export class WorkWithTC {
  WorkWithTalentCommunity() {
    cy.get(".list-nav-left").find("a").contains("Wiki Career").click(); // click some menu on page Talentcommunity
    cy.get(".figure .image").find("a img").eq(0).click();
  }

  SearchJobInDetailBlog() {
    cy.get("#keyword")
      .clear()
      .type("Senior Quality Control")
      .parents("body")
      .find(".autocomplete-suggestions")
      .eq(0)
      .click();

    cy.get("#location_chosen").click();
    cy.get(".chosen-drop .chosen-results")
      .find("li")
      .contains("Hà Nội")
      .click();
    cy.get('.blog_findjob_button').click()
  }
}

export const onWorkWithTC = new WorkWithTC();
