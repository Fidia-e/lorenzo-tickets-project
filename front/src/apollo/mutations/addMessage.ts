import { gql } from '@apollo/client';

export const ADD_MESSAGE = gql`
  mutation CreateMessage($input: MessageInput) {
    createMessage(input: $input) {
      content
      ticket_id
      client_id
      employee_id
    }
  }
`;
