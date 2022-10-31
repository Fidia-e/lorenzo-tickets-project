import { gql } from '@apollo/client';

export const REMOVE_TICKET_TO_EMPLOYEE = gql`
  mutation removeTicketToEmployee($input: TicketEmployeeInput) {
    removeTicketToEmployee(input: $input)
  }
`;
