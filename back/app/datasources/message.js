const CoreSQLDataSource = require('./core/sql');

class Message extends CoreSQLDataSource {
  tableName = 'message';

  async getAllMessagesByTicketId(ticketId) {
    const query = this.knex(this.tableName)
      .connection(this.establishedConnection)
      .select('message.*') // On sélectionne toutes les colonnes de la table message
      .where('ticket_id', ticketId);

    const resultMessagesByTicket = await query;

    return resultMessagesByTicket;
  }
}

module.exports = Message;
