const CoreSQLDataSource = require('./core/sql');
const DataLoader = require('dataloader');

const SECONDS = 10;

class Employee extends CoreSQLDataSource {
  tableName = 'employee';

  async findEmployeesByTicket(ticketId) {
    if (process.env.DATALOADER_ENABLED) {
      return this.ticketIdLoader.load(ticketId);
    }

    const query = this.knex(this.tableName)
      .connection(this.establishedConnection)
      .select('employee.*', 'ticket_employee.ticket_id')
      .join('ticket_employee', 'employee.id', '=', 'ticket_employee.employee_id')
      .where('ticket_id', ticketId);

    const result = await (process.env.CACHE_ENABLED ? query.cache(SECONDS) : query);

    return result;
  }

  async findByTicketBulk(ticketIds) {
    const query = this.knex(this.tableName)
      .connection(this.establishedConnection)
      .select('employee.*', 'ticket_employee.ticket_id')
      .join('ticket_employee', 'employee.id', '=', 'ticket_employee.employee_id')
      .whereIn('ticket_id', ticketIds);

    const result = await (process.env.CACHE_ENABLED ? query.cache(SECONDS) : query);
    return result;
  }

  ticketIdLoader = new DataLoader(async ids => {
    const intIds = ids.map(id => parseInt(id, 10));
    const records = await this.findByTicketBulk(intIds);

    return intIds.map(id => records.filter(record => record.ticket_id === id));
  });
}

module.exports = Employee;
