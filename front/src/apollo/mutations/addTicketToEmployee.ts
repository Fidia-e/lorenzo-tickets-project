import { gql } from '@apollo/client';

export const ADD_TICKET_TO_EMPLOYEE = gql`
  mutation addTicketToEmployee($input: TicketEmployeeInput) {
    addTicketToEmployee(input: $input) {
      id
      ticket_id
      employee_id
    }
  }
`;
