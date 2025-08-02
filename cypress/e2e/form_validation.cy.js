describe('Form Validation', () => {

  beforeEach(() => {
    cy.visitLoginPage();
  });

  // Test for an empty email field.
  it('empty email', () => {
    cy.login('', 'ValidPassword123');
    cy.get('.invalid-feedback').should('contain', 'Email is required');
  });

  // Test for an invalid email format.
  it('invalid email format', () => {
    cy.login('invalid','ValidPassword123');
    cy.get('.invalid-feedback').should('contain', 'Not a valid email');
  });

  // Test for an empty password field.
  it('empty password', () => {
    cy.login('test@example.com', '');
    cy.get('.invalid-feedback').should('contain', 'Password is required');
  });

  // Test for a password that is too short.
  it('an invalid password', () => {
    cy.login('test@example.com', 'short');
    cy.get('.invalid-feedback').should('contain', 'Password must be at least 8 characters');
  });

  // Test that error messages are cleared when the user starts typing again.
  it('clear error messages', () => {
    cy.login('', '');
    cy.get('.invalid-feedback').should('contain', 'Email is required');
    cy.get('.invalid-feedback').should('contain', 'Password is required');

    // Now type in the email field to clear its specific error.
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="email"]').should('not.contain', 'Email is required');
    
    // Now type in the password field to clear its specific error.
    cy.get('input[name="password"]').type('ValidPassword123');
    cy.get('input[name="password"]').should('not.contain', 'Password is required');
  });


});