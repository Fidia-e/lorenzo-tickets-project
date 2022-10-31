import { gql } from '@apollo/client';

export const UPDATE_EMPLOYEE_PASSWORD = gql`
  mutation UpdateEmployeePassword($id: PositiveInt!, $input: EmployeePasswordInput) {
    UpdateEmployeePassword(id: $id, input: $input) {
      id
    }
  }
`;
