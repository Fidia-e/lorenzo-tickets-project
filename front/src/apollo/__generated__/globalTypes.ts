/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum Role {
  admin = "admin",
  intervenor = "intervenor",
  lead = "lead",
}

export enum Status {
  closed = "closed",
  open = "open",
  underway = "underway",
}

export enum UserType {
  client = "client",
  employee = "employee",
}

export interface EmployeePasswordInput {
  password: string;
}

export interface MessageInput {
  content: string;
  ticket_id: any;
  client_id?: any | null;
  employee_id?: any | null;
}

export interface TicketEmployeeInput {
  ticket_id: any;
  employee_id: any;
}

export interface TicketInput {
  title: string;
  content: string;
  status: Status;
  client_id: any;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
