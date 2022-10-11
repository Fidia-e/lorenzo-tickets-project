module.exports = {
  messages(parent, _, { dataSources }) {
    return dataSources.message.findMessagesByTicketId(parent.id);
  },

  employees(parent, _, { dataSources }) {
    return dataSources.employee.findEmployeesByTicket(parent.id);
  },
};
