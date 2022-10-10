module.exports = {
  messages(parent, _, { dataSources }) {
    return dataSources.message.getAllMessagesByTicketId(parent.id);
  },

  employees(parent, _, { dataSources }) {
    return dataSources.employee.getAllEmployeesByTicketId(parent.id);
  },
};
