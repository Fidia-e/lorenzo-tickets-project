// Scalars
const {
  PositiveIntResolver: PositiveInt,
  EmailAddressResolver: EmailAddress,
  DateTimeResolver: DateTime,
} = require('graphql-scalars');

// Types
const Client = require('./client');
const Ticket = require('./ticket');

// Queries et Mutations
const Query = require('./query');

module.exports = {
  DateTime,

  EmailAddress,

  PositiveInt,

  Client,

  Ticket,

  Query,
};
