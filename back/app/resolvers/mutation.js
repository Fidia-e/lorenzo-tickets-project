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
  async createMessage(_, args, { dataSources, user }) {
    if (!user) {
      throw new AuthenticationError('Vous devez être connecté pour ajouter un message');
    }

    const data = args.input;

    const { ...messageData } = data;

    const newMessage = await dataSources.message.insert(messageData);

    return newMessage;
  },
  async deleteTicket(_, args, { dataSources, user }) {
    if (!user) {
      throw new AuthenticationError('Vous devez être connecté pour supprimer un ticket');
    }

    const response = await dataSources.ticket.delete(args.id);

    return response;
  },
};
