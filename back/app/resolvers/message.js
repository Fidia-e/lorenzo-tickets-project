module.exports = {
  employee(parent, _, { dataSources }) {
    if (parent.employee_id == null) {
      return null;
    }
    return dataSources.employee.findByPk(parent.employee_id);
  },

  client(parent, _, { dataSources }) {
    if (parent.client_id == null) {
      return null;
    }
    return dataSources.client.findByPk(parent.client_id);
  },
};
