/**
 * Ce fichier sert à la validation des données et le routage
 * Plugin VSCode pour graphQL : https://marketplace.visualstudio.com/items?itemName=kumar-harsh.graphql-for-vscode
 */

const { gql } = require('apollo-server');
const { readFileSync } = require('fs');
const path = require('path');

// Types
const ticket = readFileSync(path.join(__dirname, './ticket.gql'));
const client = readFileSync(path.join(__dirname, './client.gql'));
const employee = readFileSync(path.join(__dirname, './employee.gql'));
const message = readFileSync(path.join(__dirname, './message.gql'));
const ticketEmployee = readFileSync(path.join(__dirname, './ticket_employee.gql'));

// Scalars
const scalars = readFileSync(path.join(__dirname, './scalars.gql'));

// Queries et mutations
const query = readFileSync(path.join(__dirname, './query.gql'));
const mutation = readFileSync(path.join(__dirname, './mutation.gql'));

/*
  Les gabarits étiquetés (tagged templates)
  sont une forme plus avancée de gabarits.
  On peut ici utiliser une fonction pour analyser les différents fragments du gabarit.
  https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Litt%C3%A9raux_gabarits
*/

const schema = gql`
  ${scalars}

  ${query}

  ${ticket}

  ${client}

  ${employee}

  ${message}

  ${ticketEmployee}

  ${mutation}
`;

module.exports = schema;
