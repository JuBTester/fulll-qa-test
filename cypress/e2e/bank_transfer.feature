@transfer
Feature: Création de virement bancaire

  Afin d'effectuer des paiements sécurisés
  En tant qu'utilisateur autorisé
  Je veux pouvoir créer un virement valide ou être bloqué en cas d'erreur


  Background:
    Given Je suis authentifié sur l'application
    And J'accède à l'écran de création de virement


  @happy
  Scenario: Création d'un virement instantané valide
    When Je saisis un bénéficiaire valide
    And Je saisis un IBAN valide
    And Je saisis un libellé valide
    And Je saisis un montant valide
    And Je valide le formulaire
    Then le virement est créé avec succès


  @happy @scheduled
  Scenario: Création d'un virement planifié pour demain
    When Je saisis un bénéficiaire valide
    And Je saisis un IBAN valide
    And Je saisis un libellé valide
    And Je saisis un montant valide
    And Je sélectionne un virement planifié
    And Je choisis une date pour demain
    And Je valide le formulaire
    Then le virement est créé avec succès


  @error
  Scenario: Refus si l'IBAN est invalide
    When Je saisis un bénéficiaire valide
    And Je saisis un IBAN invalide
    And Je saisis un libellé valide
    And Je saisis un montant valide
    And Je valide le formulaire
    Then un message d'erreur IBAN est affiché


  @rbac
  Scenario: Refus pour un utilisateur non autorisé
    Given Je suis authentifié avec un rôle non autorisé
    When J'accède à l'écran de création de virement
    Then l'accès à la création est refusé
