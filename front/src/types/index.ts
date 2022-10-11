import { Dispatch, SetStateAction } from 'react';

export enum Status {
  OPEN = 'Open',
  CLOSED = 'Closed',
  UNDERWAY = 'Underway',
}

export interface FieldBaseProps {
  identifier: string;
  placeholder: string;
  label: string;
  value: string;
  updateField: Dispatch<SetStateAction<string>>;
}

// TODO change once we have retrieve type from back
export interface Ticket {
  id: number;
  title: string;
  content: string;
  status: Status;
  client_id: number;
  created_at: string;
  updated_at: string | null;
}

export interface Message {
  id: number;
  content: string;
  ticket_id: number;
  employee_id: number | null;
  client_id: number | null;
  created_at: string;
  updated_at: string | null;
}

export interface Client {
  id: number;
  email: string;
  company: string;
  created_at: string;
  updated_at: string | null;
}
