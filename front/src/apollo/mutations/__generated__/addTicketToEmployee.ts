/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { TicketEmployeeInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: addTicketToEmployee
// ====================================================

export interface addTicketToEmployee_addTicketToEmployee {
  __typename: "TicketEmployee";
  id: any;
  ticket_id: any;
  employee_id: any;
}

export interface addTicketToEmployee {
  addTicketToEmployee: addTicketToEmployee_addTicketToEmployee | null;
}

export interface addTicketToEmployeeVariables {
  input?: TicketEmployeeInput | null;
}
