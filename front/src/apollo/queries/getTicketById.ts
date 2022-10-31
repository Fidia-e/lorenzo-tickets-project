import { gql } from '@apollo/client';
export const GET_TICKET_BY_ID = gql`
  query GetTicketById($ticketId: Int!) {
    getTicketById(id: $ticketId) {
      id
      title
      content
      status
      client {
        id
        email
        company
      }
      messages {
        id
        content
        client_id
        client {
          email
          id
        }
        employee_id
        employee {
          id
          firstname
          lastname
        }
        created_at
        updated_at
      }
      employees {
        id
        email
        firstname
        lastname
      }
      created_at
      updated_at
    }
  }
`;
