import { gql } from '@apollo/client';

export const GET_ALL_TICKETS_BY_CLIENT_ID = gql`
  query GetAllTicketsByClientId($id: Int!) {
    getAllTicketsByClientId(id: $id) {
      id
      title
      content
      status
      client_id
      created_at
      updated_at
    }
  }
`;
