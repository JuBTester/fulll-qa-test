# Test technique QA

## Étape 1 – Préparation de l’environnement

Création d’un nouveau projet Node puis installation des dépendances nécessaires à l’exécution des tests Cypress avec Cucumber.

Commandes utilisées :

- `npm init -y`  
  Initialise le projet Node et génère le fichier `package.json`.

- `npm install cypress --save-dev`  
  Installe Cypress.

- `npm install @badeball/cypress-cucumber-preprocessor --save-dev`  
  Ajoute le support des fichiers Gherkin (`.feature`).

- `npm install @bahmutov/cypress-esbuild-preprocessor --save-dev`  
  Permet la compilation et l’intégration de Cucumber avec Cypress.

- `npx cypress open`  
  Initialise Cypress dans le projet et génère l’arborescence par défaut.

---

## Étape 2 – Mise en place des fichiers de test

Après l’initialisation, création du dossier `e2e` contenant :

- `bank_transfer.feature` → pour y mettre mes scénarios de test
- `bank_transfer.steps.js` → pour implémenter mes steps


## Étape 2 - Création du scénario dans bank_transfer.feature 

Pour cela, ne connaissant pas totalement bien l'environnement gherkin , cypress et cucumber, je me suis aidé de cette documentation : 

https://cucumber.io/docs/gherkin/languages

J’ai d’abord suivi les exigences métier présentes dans le dépôt GitHub afin de répondre exactement à ce qui était demandé pour le test.

Ensuite, j’ai ajouté quelques scénarios supplémentaires à la fin de ce paragraphe sur des points que je considère sensibles : les limites de montants, les formats ou certaines dépendances entre champs.

Avec mon expérience et les bases ISTQB que j'ai appris ces dernières années, je sais qu’il est impossible de tout tester à 100%.  
L’idée est donc de choisir des cas utiles, proches des problèmes que l’on pourrait réellement rencontrer en production.

Voici mes propositions supplémentaires  : 

- Vérification des montants aux limites (0, 0.01, 100 000, dépassement du maximum)
- Tests de longueur minimale et maximale de l’IBAN
- Validation des caractères autorisés dans le libellé
- Vérification du mode de virement sélectionné par défaut
- Tests autour des dates planifiées hors plage autorisée
- Double soumission du formulaire

## Étape 3 - Implémentation des steps 

Une fois la feature définie, j’ai implémenté les steps dans `bank_transfer.steps.js`.

Je me suis appuyé sur différents supports (documentation officielle, exemples et assistance outillée) pour accélérer la mise en place.

J’ai ensuite relu, ajusté et validé chaque step afin de m’assurer qu’il correspond bien à la demande initial.

Je suis bien entendu en mesure d’expliquer et de justifier chaque choix d’implémentation.

Et pour finir il faudrait lancer la commande : npx cypress open.
