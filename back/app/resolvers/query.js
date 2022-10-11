module.exports = {
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
