/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { MessageInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateMessage
// ====================================================

export interface CreateMessage_createMessage {
  __typename: "Message";
  content: string;
  ticket_id: any;
  client_id: any | null;
  employee_id: any | null;
}

export interface CreateMessage {
  createMessage: CreateMessage_createMessage | null;
}

export interface CreateMessageVariables {
  input?: MessageInput | null;
}
