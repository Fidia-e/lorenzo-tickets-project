module.exports = {
  tickets(parent, _, { dataSources }) {
    return dataSources.ticket.findAllTicketsByClientId(parent.id);
  },
};
