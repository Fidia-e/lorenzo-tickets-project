import { gql } from '@apollo/client';

export const ADD_TICKET = gql`
  mutation CreateTicket($input: TicketInput) {
    createTicket(input: $input) {
      id
      title
      content
      client_id
    }
  }
`;
