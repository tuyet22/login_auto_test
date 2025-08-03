describe('UI Elements', () => {

    beforeEach(() => {
        //Clear Browser History
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.visitLoginPage();
    });

    it('ui elements', () => {
        //ListenLayer Logo
        cy.get('.login-section-header svg').should('be.visible');

        //Text link to Home Page
        cy.get('.link-back-login').should('be.visible')
          .and('contain', 'Back to Home Page');

        //Title Member Login
        cy.get('h1').should('be.visible').and('contain', 'Member Login');
        
        // Email input field
        cy.get('input[name="email"]').should('be.visible');

        // Password input field
        cy.get('input[name="password"]').should('be.visible');

        // Login button
        cy.get('button[type="submit"]').contains('Login').should('be.visible');

        // Reset password link
        cy.contains('a', 'Reset password?').should('be.visible');

        // Sign up link
        cy.contains('a', 'Sign up for free').should('be.visible');

        // Footer with logo and links
        cy.get('.login-section-footer').within(() => {
        cy.get('.login-section-footer-wrapper svg').should('be.visible');
        cy.contains('a', 'Support').should('be.visible');
        cy.contains('a', 'Terms of Use').should('be.visible');
        cy.contains('a', 'Privacy & Data Policy').should('be.visible');
    });
    });

    it.only('verify Back to Home Page link', () => {

        // Verify the link to Home Page
        
        cy.get('.link-back-login').should('be.visible')
          .and('contain', 'Back to Home Page');
        
        //Verify arrow icon
        cy.get('.link-back-login').find('i.fal.fa-angle-left').should('be.visible');
        cy.screenshot('Back to Home Page Link');
    });




});