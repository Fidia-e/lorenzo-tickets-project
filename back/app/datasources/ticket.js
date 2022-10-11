const CoreSQLDataSource = require('./core/sql');
const DataLoader = require('dataloader');

const SECONDS = 10;

class Ticket extends CoreSQLDataSource {
  tableName = 'ticket';

  async findByEmployee(employeeId) {
    if (process.env.DATALOADER_ENABLED) {
      return this.employeeIdLoader.load(employeeId);
    }

    const query = this.knex(this.tableName)
      .connection(this.establishedConnection)
      .select('ticket.*', 'ticket_employee.employee_id')
      .join('ticket_employee', 'ticket.id', '=', 'ticket_employee.ticket_id')
      .where('employee_id', employeeId);

    const result = await (process.env.CACHE_ENABLED ? query.cache(SECONDS) : query);

    return result;
  }

  async findByEmployeeBulk(employeeIds) {
    const query = this.knex(this.tableName)
      .connection(this.establishedConnection)
      .select('ticket.*', 'ticket_employee.employee_id')
      .join('ticket_employee', 'ticket.id', '=', 'ticket_employee.ticket_id')
      .whereIn('employee_id', employeeIds);

    const result = await (process.env.CACHE_ENABLED ? query.cache(SECONDS) : query);
    return result;
  }

  employeeIdLoader = new DataLoader(async ids => {
    const intIds = ids.map(id => parseInt(id, 10));
    const records = await this.findByEmployeeBulk(intIds);

    return intIds.map(id => records.filter(record => record.employee_id === id));
  });
}

module.exports = Ticket;
