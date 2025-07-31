describe('Lesson 1- Check title', () => {
  it('In website and check title', () => {
    cy.visit('https://example.cypress.io');
    cy.title().should('include', 'Cypress');
  });
});
