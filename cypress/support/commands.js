// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//

Cypress.Commands.add('clearAppCache', () => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.window().then((win) => {
      win.sessionStorage.clear();
    });  
});

Cypress.Commands.add('requestWithRetry', (options, retries = 10 ) => {
    const makeRequest = (attempt) => {
      return cy.request(options).then(response => {
        if (response.status === 429 && attempt < retries) {
          cy.wait(10000); // Espera 10 segundo antes de tentar novamente
          return makeRequest(attempt + 1);
        } else if (response.status === 429) {
          throw new Error('Exceeded maximum retries');
        } else {
          return response;
        }
      });
    };
    return makeRequest(0);
  });

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