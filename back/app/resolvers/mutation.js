const { AuthenticationError } = require('apollo-server');
const bcrypt = require('bcrypt');

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

  async addTicketToEmployee(_, args, { dataSources, user }) {
    const response = await dataSources.ticket_employee.insert(args.input);

    return response;
  },

  async removeTicketToEmployee(_, args, { dataSources, user }) {
    const response = await dataSources.ticket_employee.removeTicketToEmployee(args.input);

    return response;
  },

  async UpdateEmployeePassword(_, args, { dataSources, user }) {
    if (!user) {
      throw new AuthenticationError('Vous devez être connecté pour supprimer un ticket');
    }

    const data = args.input;
    const pwd = data.password;

    const employeeNewPwdCrypt = await bcrypt.hash(pwd, 10);

    const updatedPasswordInput = { ...data, password: employeeNewPwdCrypt };

    const response = await dataSources.employee.update(args.id, updatedPasswordInput);

    return response;
  },
};
