/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { Status } from '../../__generated__/globalTypes';

// ====================================================
// GraphQL query operation: GetAllTicketsByClientId
// ====================================================

export interface GetAllTicketsByClientId_getAllTicketsByClientId {
  __typename: 'Ticket';
  id: any;
  title: string;
  content: string;
  status: Status;
  client_id: any;
  created_at: any;
  updated_at: any | null;
}

export interface GetAllTicketsByClientId {
  /**
   * Récupération de tous les tickets par client
   */
  getAllTicketsByClientId: GetAllTicketsByClientId_getAllTicketsByClientId[] | null;
}

export interface GetAllTicketsByClientIdVariables {
  id: number;
}
