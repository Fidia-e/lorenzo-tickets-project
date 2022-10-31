import { gql } from '@apollo/client';

export const UPDATE_EMPLOYEE_PASSWORD = gql`
  mutation updateEmployeePassword($id: PositiveInt!, $input: EmployeePasswordInput) {
    updateEmployeePassword(id: $id, input: $input) {
      id
    }
  }
`;
