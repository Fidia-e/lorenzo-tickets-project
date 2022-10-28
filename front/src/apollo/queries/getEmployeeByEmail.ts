import { gql } from '@apollo/client';

export const GET_EMPLOYEE_BY_EMAIL = gql`
  query GetEmployeeByEmail($email: EmailAddress!) {
    getEmployeeByEmail(email: $email) {
      firstname
      lastname
      role
    }
  }
`;
