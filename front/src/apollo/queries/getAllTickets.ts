import { gql } from '@apollo/client';

export const GET_ALL_TICKETS = gql`
  query GetAllTickets {
    getAllTickets {
      id
      title
      content
      status
      client_id
      client {
        id
        email
        company
      }
      employees {
        id
        email
      }
      messages {
        id
        content
      }
      created_at
      updated_at
    }
  }
`;
