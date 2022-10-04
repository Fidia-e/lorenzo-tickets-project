const CoreSQLDataSource = require('./core/sql');

class Ticket extends CoreSQLDataSource {
  tableName = 'ticket';

  async findAllTicketsByClientId(clientId) {
    const query = this.knex(this.tableName)
      .connection(this.establishedConnection)
      .select('ticket.*')
      .where('client_id', clientId);

    const resultTicketsByClient = await query;

    return resultTicketsByClient;
  }
}

module.exports = Ticket;
