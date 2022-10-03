const CoreSQLDataSource = require('./core/sql');

class Client extends CoreSQLDataSource {
  tableName = 'client';
}

module.exports = Client;
