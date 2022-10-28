const { AuthenticationError } = require('apollo-server');

module.exports = {
  async createTicket(_, args, { dataSources, user }) {
    if (!user) {
      throw new AuthenticationError('Vous devez être connecté pour créer un ticket');
    }

    const data = args.input;

    const { ...ticketData } = data;

    const newTicket = await dataSources.ticket.insert(ticketData);

    return newTicket;
  },
};
