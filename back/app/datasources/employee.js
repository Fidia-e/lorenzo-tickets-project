const CoreSQLDataSource = require('./core/sql');

class Employee extends CoreSQLDataSource {
  tableName = 'employee';

  async getAllEmployeesByTicketId(ticketId) {
    const query = this.knex(this.tableName)
      .connection(this.establishedConnection)
      .select('employee.*')
      .where('ticket_id', ticketId);

    const resultEmployeesByTicket = await query;

    return resultEmployeesByTicket;
  }
}

module.exports = Employee;
