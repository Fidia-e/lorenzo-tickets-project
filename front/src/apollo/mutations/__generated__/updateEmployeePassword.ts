/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { EmployeePasswordInput } from '../../__generated__/globalTypes';

// ====================================================
// GraphQL mutation operation: updateEmployeePassword
// ====================================================

export interface updateEmployeePassword_updateEmployeePassword {
  __typename: 'EmployeeUpdate';
  id: any | null;
}

export interface updateEmployeePassword {
  updateEmployeePassword: updateEmployeePassword_updateEmployeePassword | null;
}

export interface updateEmployeePasswordVariables {
  id: any;
  input?: EmployeePasswordInput | null;
}
