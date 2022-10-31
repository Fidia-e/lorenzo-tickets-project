// Scalars
const {
  PositiveIntResolver: PositiveInt,
  EmailAddressResolver: EmailAddress,
  DateTimeResolver: DateTime,
} = require('graphql-scalars');

// Doivent avoir le même nom que ce qui est dans schemas/index

// Types
const Client = require('./client');
const Ticket = require('./ticket');
const Message = require('./message');
const Employee = require('./employee');
const TicketEmployee = require('./ticket_employee');

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

  TicketEmployee,

  Query,

  Mutation,
};
