const db = require('./db/pg');
const typeDefs = require('./schemas');
const resolvers = require('./resolvers');
const logger = require('./helper/logger');

const TicketDatasource = require('./datasources/ticket');
const MessageDatasource = require('./datasources/message');
const ClientDatasource = require('./datasources/client');
const EmployeeDatasource = require('./datasources/employee');

const knexConfig = {
  client: 'pg',
  establishedConnection: db,
};

module.exports = {
  typeDefs,
  resolvers,
  dataSources: () => ({
    ticket: new TicketDatasource(knexConfig),
    message: new MessageDatasource(knexConfig),
    client: new ClientDatasource(knexConfig),
    employee: new EmployeeDatasource(knexConfig),
  }),
  formatError: err => {
    // formate les erreurs
    logger.error(err);

    return err.message;
  },
};
