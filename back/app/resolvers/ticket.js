module.exports = {
  messages(parent, _, { dataSources }) {
    return dataSources.message.findMessagesByTicketId(parent.id);
  },

  employees(parent, _, { dataSources }) {
    return dataSources.employee.findEmployeesByTicket(parent.id);
  },

  client(parent, _, { dataSources }) {
    return dataSources.client.findByPk(parent.client_id);
  },
};
