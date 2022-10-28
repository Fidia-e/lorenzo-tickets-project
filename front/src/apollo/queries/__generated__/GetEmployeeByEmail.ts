/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Role } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: GetEmployeeByEmail
// ====================================================

export interface GetEmployeeByEmail_getEmployeeByEmail {
  __typename: "Employee";
  firstname: string;
  lastname: string;
  role: Role;
}

export interface GetEmployeeByEmail {
  /**
   * Recupération d'un employee par l'email
   */
  getEmployeeByEmail: GetEmployeeByEmail_getEmployeeByEmail[] | null;
}

export interface GetEmployeeByEmailVariables {
  email: any;
}
