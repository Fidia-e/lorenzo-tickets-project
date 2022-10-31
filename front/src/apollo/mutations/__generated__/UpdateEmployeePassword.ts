/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { EmployeePasswordInput } from '../../__generated__/globalTypes';

// ====================================================
// GraphQL mutation operation: UpdateEmployeePassword
// ====================================================

export interface UpdateEmployeePassword_UpdateEmployeePassword {
  __typename: 'EmployeeUpdate';
  id: any | null;
}

export interface UpdateEmployeePassword {
  UpdateEmployeePassword: UpdateEmployeePassword_UpdateEmployeePassword | null;
}

export interface UpdateEmployeePasswordVariables {
  id: any;
  input?: EmployeePasswordInput | null;
}
