import { Dispatch, SetStateAction } from 'react';
import { Role, Status } from '../apollo/__generated__/globalTypes';

export enum ItemType {
  MESSAGE = 'Message',
  TICKET = 'Ticket',
  EMPLOYEE = 'Employee',
  CLIENT = 'Client',
}

export interface FieldBaseProps {
  identifier: string;
  placeholder: string;
  label: string;
  value: string;
  updateField: Dispatch<SetStateAction<string>>;
  styleName: string;
}

export interface UserLoginProps {
  setError: Dispatch<SetStateAction<boolean>>;
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
  // logged: boolean,
  id: number;
  email: string;
  company: string;
  created_at: string;
  updated_at: string | null;
}

export interface Employee {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  role: Role;
  created_at: string;
  updated_at: string | null;
}

export type Nullable<T> = T | null;
