/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Status } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: GetTicketById
// ====================================================

export interface GetTicketById_getTicketById_client {
  __typename: "Client";
  id: any;
  email: any;
  company: string;
}

export interface GetTicketById_getTicketById_messages_client {
  __typename: "Client";
  email: any;
  id: any;
}

export interface GetTicketById_getTicketById_messages_employee {
  __typename: "Employee";
  id: any;
  firstname: string;
  lastname: string;
}

export interface GetTicketById_getTicketById_messages {
  __typename: "Message";
  id: any;
  content: string;
  client_id: any | null;
  client: GetTicketById_getTicketById_messages_client | null;
  employee_id: any | null;
  employee: GetTicketById_getTicketById_messages_employee | null;
  created_at: any;
  updated_at: any | null;
}

export interface GetTicketById_getTicketById_employees {
  __typename: "Employee";
  id: any;
  email: any;
  firstname: string;
  lastname: string;
}

export interface GetTicketById_getTicketById {
  __typename: "Ticket";
  id: any;
  title: string;
  content: string;
  status: Status;
  client: GetTicketById_getTicketById_client | null;
  messages: GetTicketById_getTicketById_messages[];
  employees: GetTicketById_getTicketById_employees[];
  created_at: any;
  updated_at: any | null;
}

export interface GetTicketById {
  /**
   * Récupération d'un ticket par son id
   */
  getTicketById: GetTicketById_getTicketById | null;
}

export interface GetTicketByIdVariables {
  ticketId: number;
}
