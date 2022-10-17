const bcrypt = require('bcrypt');
const { UserInputError, AuthenticationError } = require('apollo-server');
const jwt = require('../helpers/jwt');

module.exports = {
  async signin(_, args, { dataSources, ip }) {
    const errorMessage = 'Authentication invalid';
    const { email, password } = args;

    const employees = await dataSources.employee.findAll({ email });
    // console.log('employees----------->', employees);

    if (!employees.length) {
      throw new UserInputError(errorMessage);
    }

    const employee = employees[0];

    const result = await bcrypt.compare(password, employee.password);

    // console.log('pwd hashé:', bcrypt.hashSync('1234', 10)); // pour hasher les password

    if (!result) {
      throw new AuthenticationError(errorMessage);
    }

    employee.token = jwt.create({ ...employee, ip });

    return employee;
  },

  // ------------------------------- Client -------------------------------
  getAllClients(_, __, { dataSources }) {
    return dataSources.client.findAll();
  },

  //   getClientByEmail(_, { id }, { dataSources }) {
  //     return dataSources.client.findByEmail(email);
  //   },

  // ------------------------------- Ticket -------------------------------

  getAllTickets(_, __, { dataSources }) {
    return dataSources.ticket.findAll();
  },

  getTicketById(_, { id }, { dataSources }) {
    return dataSources.ticket.findByPk(id);
  },

  getAllTicketsByClientId(_, { id }, { dataSources }) {
    return dataSources.ticket.findAll({ client_id: id });
  },

  async getAllTicketsByEmployeeId(_, args, { dataSources }) {
    return dataSources.ticket.findByEmployee(args.employee_id);
  },

  // ------------------------------- Message -------------------------------

  getAllMessages(_, __, { dataSources }) {
    return dataSources.message.findAll();
  },

  getAllMessagesByTicketId(_, { id }, { dataSources }) {
    return dataSources.message.findAll({ ticket_id: id });
  },

  // ------------------------------- Employee -------------------------------

  getAllEmployees(_, __, { dataSources }) {
    return dataSources.employee.findAll();
  },

  async getAllEmployeesByTicketId(_, args, { dataSources }) {
    return dataSources.employee.findEmployeesByTicket(args.ticket_id);
  },

  //   getEmployeeByEmail(_, { email }, { dataSources }) {
  //     return dataSources.employee.findByEmail(email);
  //   },
};
