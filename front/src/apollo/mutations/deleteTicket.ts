import { gql } from '@apollo/client';

export const DELETE_TICKET = gql`
  mutation DeleteTicket($deleteTicketId: PositiveInt!) {
    deleteTicket(id: $deleteTicketId)
  }
`;
