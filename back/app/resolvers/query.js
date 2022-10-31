const bcrypt = require('bcrypt');
const { UserInputError, AuthenticationError } = require('apollo-server');
const jwt = require('../helpers/jwt');

module.exports = {
  async signin(_, args, { dataSources, ip }) {
    const errorMessage = 'Authentication invalid';
    // eslint-disable-next-line no-unused-vars
    const { email, password, userType } = args;

    if (args.userType === 'employee') {
      const employees = await dataSources.employee.findAll({ email });

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
      employee.userType = 'employee';

      return employee;
    }

    if (args.userType === 'client') {
      const clients = await dataSources.client.findAll({ email });

      if (!clients.length) {
        throw new UserInputError(errorMessage);
      }

      const client = clients[0];

      client.token = jwt.create({ ...client, ip });
      client.userType = 'client';

      return client;
    }
  },

  // ------------------------------- Client -------------------------------
  getAllClients(_, __, { dataSources, user }) {
    if (!user) {
      throw new AuthenticationError('You must be authenticate');
    }
    return dataSources.client.findAll();
  },

  //   getClientByEmail(_, { id }, { dataSources }) {
  //     return dataSources.client.findByEmail(email);
  //   },

  // ------------------------------- Ticket -------------------------------

  getAllTickets(_, __, { dataSources, user }) {
    if (!user) {
      throw new AuthenticationError('You must be authenticate');
    }
    return dataSources.ticket.findAll();
  },

  getTicketById(_, { id }, { dataSources, user }) {
    if (!user) {
      throw new AuthenticationError('You must be authenticate');
    }
    return dataSources.ticket.findByPk(id);
  },

  getAllTicketsByClientId(_, { id }, { dataSources, user }) {
    if (!user) {
      throw new AuthenticationError('You must be authenticate');
    }
    return dataSources.ticket.findAll({ client_id: id });
  },

  async getAllTicketsByEmployeeId(_, args, { dataSources, user }) {
    if (!user) {
      throw new AuthenticationError('You must be authenticate');
    }
    return dataSources.ticket.findByEmployee(args.employee_id);
  },

  // ------------------------------- Message -------------------------------

  getAllMessages(_, __, { dataSources, user }) {
    if (!user) {
      throw new AuthenticationError('You must be authenticate');
    }
    return dataSources.message.findAll();
  },

  getAllMessagesByTicketId(_, { id }, { dataSources, user }) {
    if (!user) {
      throw new AuthenticationError('You must be authenticate');
    }
    return dataSources.message.findAll({ ticket_id: id });
  },

  // ------------------------------- Employee -------------------------------

  getAllEmployees(_, __, { dataSources, user }) {
    if (!user) {
      throw new AuthenticationError('You must be authenticate');
    }
    return dataSources.employee.findAll();
  },

  async getAllEmployeesByTicketId(_, args, { dataSources, user }) {
    if (!user) {
      throw new AuthenticationError('You must be authenticate');
    }
    return dataSources.employee.findEmployeesByTicket(args.ticket_id);
  },
};
