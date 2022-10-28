/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Status } from '../../__generated__/globalTypes';

// ====================================================
// GraphQL query operation: GetAllTickets
// ====================================================

export interface GetAllTickets_getAllTickets_client {
  __typename: 'Client';
  id: any;
  email: any;
  company: string;
}

export interface GetAllTickets_getAllTickets_employees {
  __typename: 'Employee';
  id: any;
  email: any;
}

export interface GetAllTickets_getAllTickets_messages {
  __typename: 'Message';
  id: any;
  content: string;
}

export interface GetAllTickets_getAllTickets {
  __typename: 'Ticket';
  id: any;
  title: string;
  content: string;
  status: Status;
  client_id: any;
  client: GetAllTickets_getAllTickets_client | null;
  employees: GetAllTickets_getAllTickets_employees[];
  messages: GetAllTickets_getAllTickets_messages[];
  created_at: any;
  updated_at: any | null;
}

export interface GetAllTickets {
  /**
   * Liste de tous les tickets
   */
  getAllTickets: GetAllTickets_getAllTickets[];
}
