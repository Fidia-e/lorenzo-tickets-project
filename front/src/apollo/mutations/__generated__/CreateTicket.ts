/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { TicketInput } from './../../../../__generated__/globalTypes';

// ====================================================
// GraphQL mutation operation: CreateTicket
// ====================================================

export interface CreateTicket_createTicket {
  __typename: 'Ticket';
  id: any;
  title: string;
  content: string;
  client_id: any;
}

export interface CreateTicket {
  createTicket: CreateTicket_createTicket | null;
}

export interface CreateTicketVariables {
  input?: TicketInput | null;
}
