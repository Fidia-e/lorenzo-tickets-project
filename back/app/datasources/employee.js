const CoreSQLDataSource = require('./core/sql');

class Employee extends CoreSQLDataSource {
  tableName = 'employee';
}

module.exports = Employee;
