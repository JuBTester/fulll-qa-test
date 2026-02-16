import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


// Contexte

Given("Je suis authentifié sur l'application", () => {
  cy.log("Utilisateur autorisé");
});

Given("J'accède à l'écran de création de virement", () => {
  cy.visit("/bank-transfer");
});

Given("Je suis authentifié avec un rôle non autorisé", () => {
  cy.log("Utilisateur non autorisé");
});


// Saisie des champs

When("Je saisis un bénéficiaire valide", () => {
  cy.get('[data-test="beneficiary"]').clear().type("Jean Dupont");
});

When("Je saisis un IBAN valide", () => {
  cy.get('[data-test="iban"]').clear().type("FR1420041010050500013M02606");
});

When("Je saisis un IBAN invalide", () => {
  cy.get('[data-test="iban"]').clear().type("FR");
});

When("Je saisis un libellé valide", () => {
  cy.get('[data-test="label"]').clear().type("Paiement facture");
});

When("Je saisis un montant valide", () => {
  cy.get('[data-test="amount"]').clear().type("120");
});


// Actions

When("Je sélectionne un virement planifié", () => {
  cy.get('[data-test="scheduled"]').click();
});

When("Je choisis une date pour demain", () => {
  cy.get('[data-test="transfer-date"]').type("2026-01-01");
});

When("Je valide le formulaire", () => {
  cy.get('[data-test="submit"]').click();
});


// Résultats attendus

Then("le virement est créé avec succès", () => {
  cy.get('[data-test="success"]').should("be.visible");
});

Then("un message d'erreur IBAN est affiché", () => {
  cy.get('[data-test="iban-error"]').should("be.visible");
});

Then("l'accès à la création est refusé", () => {
  cy.get('[data-test="forbidden"]').should("be.visible");
});
