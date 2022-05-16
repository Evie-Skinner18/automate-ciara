  /// <reference types="Cypress" />

  describe('Accept cookies from the Ocado homepage', () => {
    it('Contains the content "Accept"', () => {
      cy.visit('https://www.ocado.com')
      cy.contains('Accept').click();
    })
  })

  describe('Log in to Ocado', () => {
    it('Contains the content "Log in"', () => {
      cy.contains('Log in').click();
    })
  })

  describe('Check we are now on the Login page', () => {
    it('Url includes the string "login"', () => {
      cy.url().should('include', '/login');
    })
  })

  describe('Accept cookies from the Ocado login page', () => {
    it('Contains the content "Accept"', () => {
      cy.contains('Accept').click();
    })
  })

  describe('Enter email', () => {
    it('Can type into the input for "Email"', () => {
        cy.get('.login__form')
        .find('[type="email"]')
        .type(Cypress.env("ciaras_email"))
        .should('have.value', Cypress.env("ciaras_email"))
    })
  })

  describe('Enter password', () => {
    it('Can type into the input for "Password"', () => {
        cy.get('.login__form')
        .find('[type="password"]')
        .type(Cypress.env("ciaras_password"))
        .should('have.value', Cypress.env("ciaras_password"))
    })
  })

  describe('Click Login button', () => {
    it('Can submit the Login form', () => {
        cy.get('.login__form')
        .find('.login__submit')
        .click();
    })
  })

  describe('Re-accept cookies from the Ocado login page', () => {
    it('Contains the content "Accept"', () => {
      cy.contains('Accept').click();
    })
  })