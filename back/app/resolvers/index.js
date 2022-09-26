// Scalars
const {
  PositiveIntResolver: PositiveInt,
  EmailAddressResolver: EmailAddress,
  DateTimeResolver: DateTime,
} = require('graphql-scalars');

// Types
const Client = require('./client');
const Ticket = require('./ticket');
const Message = require('./message');
const Employee = require('./employee');

// Queries et Mutations
const Query = require('./query');
const Mutation = require('./mutation');

module.exports = {
  DateTime,

  EmailAddress,

  PositiveInt,

  Client,

  Ticket,

  Message,

  Employee,

  Query,

  Mutation,
};
