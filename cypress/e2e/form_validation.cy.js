describe('Form Validation', () => {
 beforeEach(() => {
    cy.wait(1000);
    cy.visit('https://staging-app.listenlayer.com');
 });

  it('should navigate to the login page', () => {
    cy.url().should('eq', 'https://staging-app.listenlayer.com/login');
  });

  it('empty email', () => {
    // cy.get('input[name="email"]').type();
    cy.get('input[name="password"]').type('password');
    cy.get('form').submit();
    cy.get('.invalid-feedback').should('contain', 'Email is required');
  });

  it('invalid email', () => {
    cy.get('input[name="email"]').type('invalidemailformat');
    cy.get('input[name="password"]').type('ValidPassword123');
    cy.get('form').submit();
    cy.get('.invalid-feedback').should('contain', 'Not a valid email');
  });

  it('empty password', () => {
    cy.get('input[name="email"]').type('test@example.com');
    // cy.get('input[name="password"]').type('');
    cy.get('form').submit();
    cy.get('.invalid-feedback').should('contain', 'Password is required');
  })

  it('invalid password', () => {
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('short');
    cy.get('form').submit();
    cy.get('.invalid-feedback').should('contain', 'Password must be at least 8 characters');
  });

  it.only('clear error messages', () => {
    // cy.get('input[name="email"]').type('test@example.com');
    // cy.get('input[name="password"]').type('ValidPassword123');
    cy.get('form').submit();
    cy.get('.invalid-feedback').should('contain', 'Email is required');
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('.invalid-feedback').should('not.contain', 'Email is required');
  });




});