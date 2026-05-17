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

/// <reference types = "Cypress" />
/// <reference types = "@cypress/xpath" />

// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//MS OAuth login session -- experimentalSessionAndOrigin: true & experimentalModifyObstructiveThirdPartyCode: true
Cypress.Commands.add("loginSession", () => {
  cy.session('MS OAuth Login Session', () => {
      cy.intercept('GET', '**/core/api/v1/auth').as('authPageLoad')
      cy.visit('/')
      cy.get('.MsLoginButton_microsoftLoginBtn__qovZf').should('be.visible').click()
      // cy.wait('@authPageLoad')
      console.log("before logging")
      cy.origin(`https://login.microsoftonline.com/`, () => {
          cy.get('[type="email"]').should('be.visible').type(Cypress.env('login_username') + '{enter}')
          cy.get('[type="password"]').should('be.visible').type(Cypress.env('login_password') + '{enter}')
          cy.get('[type="checkbox"]').should('be.visible').check().type('{enter}')
      })
      cy.wait('@authPageLoad')
      console.log("before the dashboard");
      //cy.wait(4000);
      cy.url().should('include', 'allocation-management')
  })

  
})

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


 Cypress.Commands.add("loginWithUser", (userType) => {

    switch (userType) {

        case "RMSupervisorLogin":
        cy.xpath('//*[@id="root"]/div/aside[1]/aside[1]/div[3]/span')
        cy.xpath('//*[@id="root"]/div/aside[1]/aside[1]/div[3]/div/div/div[1]/a').realHover('mouse')
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/aside[1]/aside[1]/div[3]/div[1]/div[1]/div[2]/ul[1]/div[5]/div[1]/span[1]').click({force:true})//RM Supervisor

        break;

        case "BUHead":
        cy.xpath('//*[@id="root"]/div/aside[1]/aside[1]/div[3]/span')
        cy.xpath('//*[@id="root"]/div/aside[1]/aside[1]/div[3]/div/div/div[1]/a').realHover('mouse')
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/aside[1]/aside[1]/div[3]/div[1]/div[1]/div[2]/ul[1]/div[1]/div[1]/span[1]').click({force:true}) //BU Head

        break;

        case "RMUserLogin":
        cy.xpath('//*[@id="root"]/div/aside[1]/aside[1]/div[3]/span')
        cy.xpath('//*[@id="root"]/div/aside[1]/aside[1]/div[3]/div/div/div[1]/a').realHover('mouse')
        cy.xpath('//*[@id="root"]/div/aside[1]/aside[1]/div[3]/div/div/div[2]/ul/div[6]/div/span').click({force:true}) //RM user

        break; 

        case "RMReportConsumerLogin":
        cy.xpath('//*[@id="root"]/div/aside[1]/aside[1]/div[3]/span')
        cy.xpath('//*[@id="root"]/div/aside[1]/aside[1]/div[3]/div/div/div[1]/a').realHover('mouse')
        cy.xpath('//*[@id="root"]/div/aside[1]/aside[1]/div[3]/div/div/div[2]/ul/div[4]/div/span').click({ force: true })

        break;    

        case "Employee Login":
        cy.xpath('//*[@id="root"]/div/aside[1]/aside[1]/div[3]/span')
        cy.xpath('//*[@id="root"]/div/aside[1]/aside[1]/div[3]/div/div/div[1]/a').realHover('mouse')
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/aside[1]/aside[1]/div[3]/div[1]/div[1]/div[2]/ul[1]/div[2]/div[1]/span[1]').click({ force: true })

        break; 

        default:

        //throw new Error(`Invalid user type: ${userType}`);

    }

  });

 




 

 