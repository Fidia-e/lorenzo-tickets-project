module.exports = {
  tickets(parent, _, { dataSources }) {
    return dataSources.employee.findByEmployee(parent.id);
  },
};
