// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Custom command to perform a login action.
Cypress.Commands.add('login', (email, password) => {
  // Clear the input fields.
  cy.get('input[name="email"]').clear();
  cy.get('input[name="password"]').clear();

  // Only type if the email and password are not empty strings.
  if (email) {
    cy.get('input[name="email"]').type(email);
  }
  if (password) {
    cy.get('input[name="password"]').type(password);
  }

  cy.get('button[type="submit"]').click();
});



