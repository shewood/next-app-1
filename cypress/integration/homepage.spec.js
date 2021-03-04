/* eslint-disable no-undef */
/// <reference types="Cypress" />

describe("Blog app spec", () => {
  
    beforeEach(() => { 
      cy.visit("/");
    });

    // The 
    it("There is some stuff on the home page", () => {
        cy.visit( 'http://localhost:3000/')
        cy.get('[ data-cy="home-icon"]').should('be.visible')
      //  cy.screenshot('grid')
    
    });

});