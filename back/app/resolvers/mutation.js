const { AuthenticationError } = require('apollo-server');

module.exports = {
  async createTicket(_, args, { dataSources, user }) {
    // if (!user) {
    //   throw new AuthenticationError('You must be authenticate to add a ticket');
    // }

    const data = args.input;

    const { ...ticketData } = data;

    const newTicket = await dataSources.ticket.insert(ticketData);

    return newTicket;
  },
};
