const depthLimit = require('graphql-depth-limit');

const db = require('./db/pg');
const typeDefs = require('./schemas');
const resolvers = require('./resolvers');
const logger = require('./helpers/logger');

const ClientDatasource = require('./datasources/client');
const TicketDatasource = require('./datasources/ticket');
const MessageDatasource = require('./datasources/message');
const EmployeeDatasource = require('./datasources/employee');

const knexConfig = {
  client: 'pg',
  establishedConnection: db,
};

module.exports = {
  typeDefs,
  resolvers,
  dataSources: () => ({
    client: new ClientDatasource(knexConfig),
    ticket: new TicketDatasource(knexConfig),
    message: new MessageDatasource(knexConfig),
    employee: new EmployeeDatasource(knexConfig),
  }),
  formatError: err => {
    // formate les erreurs
    logger.error(err);

    return err.message;
  },
  validationRules: [depthLimit(5)],
};
