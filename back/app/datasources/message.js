const CoreSQLDataSource = require('./core/sql');

class Message extends CoreSQLDataSource {
  tableName = 'message';

  async findMessagesByTicketId(ticketId) {
    const query = this.knex(this.tableName).connection(this.establishedConnection).where('ticket_id', ticketId);

    const result = await query;

    return result;
  }
}

module.exports = Message;
