const { ApolloServer } = require('apollo-server');
const debug = require('debug')('app:server');
const app = require('./app');
require('dotenv').config();

const port = process.env.PORT ?? 3005;

const server = new ApolloServer(app);

server.listen(port).then(({ url }) => {
  debug(`🚀  Server ready at ${url}`);
});
