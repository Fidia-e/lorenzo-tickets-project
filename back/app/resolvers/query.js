module.exports = {
  getAllClients(_, __, { dataSources }) {
    return dataSources.client.findAll();
  },

  getAllMessages(_, __, { dataSources }) {
    return dataSources.message.findAll();
  },

  // getAllEmployees(_, __, { dataSources }) {
  //   return dataSources.employee.findAll();
  // },

  // getAllTickets(_, __, { dataSources }) {
  //   return dataSources.ticket.findAll();
  // },

  //   getClientByEmail(_, { id }, { dataSources }) {
  //     return dataSources.client.findByEmail(email);
  //   },

  //   getAllEmployees(_, __, { dataSources }) {
  //     return dataSources.employee.findAll();
  //   },

  //   getEmployeeByEmail(_, { email }, { dataSources }) {
  //     return dataSources.employee.findByEmail(email);
  //   },
};
