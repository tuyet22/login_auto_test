describe('Kiểm tra title trang example.cypress.io', () => {
  it('Title phải bao gồm "cypress"', () => {
    cy.visit('https://staging-app.listenlayer.com/');
    cy.title().should('contain', 'cypress');
  });
});