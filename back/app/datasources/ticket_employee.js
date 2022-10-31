/* eslint-disable camelcase */
const CoreSQLDataSource = require('./core/sql');

class TicketEmployee extends CoreSQLDataSource {
  tableName = 'ticket_employee';

  async removeTicketToEmployee(input) {
    const { ticket_id, employee_id } = input;

    const result = await this.knex(this.tableName)
      .connection(this.establishedConnection)
      .select('id', 'ticket_employee.ticket_id')
      .where('ticket_id', ticket_id)
      .where('employee_id', employee_id)
      .delete();

    return result;
  }
}

module.exports = TicketEmployee;
